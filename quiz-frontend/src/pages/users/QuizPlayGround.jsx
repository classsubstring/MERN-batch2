import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getSingleQuiz } from "../../services/QuizService";
import InstructionPage from "./InstructionPage";
import { attrEffect, time } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Book, BrainCircuit, CardSim, Cross, CrossIcon, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Spinner } from "@/components/ui/spinner";
import toast from "react-hot-toast";
import ResultSummary from "./ResultSummary";
import { core } from "zod";

function QuizPlayGround() {
  const { quizId, quizTitle } = useParams();
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [startQuiz, setStartQuiz] = useState(false);
  //   quiz variables
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [isSubmitDialogOpen, setisSubmitDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    correct: 0,
    incorrect: 0,
    attempted: 0,
    total: 0,
  });

  const navigate = useNavigate();
  function handleAnswerSelected(questionIndex, optionIndex) {
    console.log(questionIndex, optionIndex);
    setSelectedAnswer((prev) => ({
      ...prev,
      [questionIndex]: prev[questionIndex] === optionIndex ? null : optionIndex,
    }));
  }

  useEffect(() => {
    if (startQuiz) {
      setTimeLeft((pre) => pre - 1);
    }
  }, [startQuiz]);

  function calculateScores() {
    let correct = 0;
    let incorrect = 0;
    let attempted = 0;
    let total = currentQuiz.questions.length;

    questions.forEach((question, index) => {
      const userSelectedAnswerOption = selectedAnswer[index];
      console.log(userSelectedAnswerOption);
      if (userSelectedAnswerOption) {
        //attempted:
        attempted = attempted + 1;
        let correctOption = 1;
        if (question.option1 === question.correctAnswer) {
          correctOption = 1;
        } else if (question.option2 === question.correctAnswer) {
          correctOption = 2;
        } else if (question.option3 === question.correctAnswer) {
          correctOption = 3;
        } else if (question.option4 === question.correctAnswer) {
          correctOption = 4;
        }
        console.log(correctOption, userSelectedAnswerOption);

        if (correctOption == userSelectedAnswerOption) {
          correct = correct + 1;
        } else {
          incorrect = incorrect + 1;
        }
      }

      console.log(correct);
      console.log(incorrect);
      console.log(attempted);
    });

    setResult({
      correct,
      incorrect,
      total,
      attempted,
    });
  }

  //function -- to submit quiz
  function handleQuizSubmit() {
    console.log("quiz submmited..");
    setLoading(true);
    setStartQuiz(false);

    calculateScores();
    ///calculate score...
    setShowResult(true);
    setLoading(false);

    // setisSubmitDialogOpen(false);
  }

  //handler timmer
  useEffect(() => {
    let timer;
    if (startQuiz) {
      if (timeLeft < 0) {
        handleQuizSubmit();
        return;
      }

      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  //quiz change
  useEffect(() => {
    if (currentQuiz) {
      setQuestions([...currentQuiz.questions]);
      setTimeLeft(currentQuiz.maxTime);
    }
  }, [currentQuiz]);

  //initials-- loading quiz
  useEffect(() => {
    async function loadQuiz() {
      if (quizId) {
        try {
          setLoading(true);
          const quiz = await getSingleQuiz(quizId);
          console.log(quiz);
          setCurrentQuiz({ ...quiz });
        } catch (error) {
          console.log(error);
          toast.error("Error in loading quiz data");
          navigate("/users/feed");
        } finally {
          setLoading(false);
        }
      }
    }

    loadQuiz();
  }, []);

  //   if (!currentQuiz) {
  //     return <h1>No quiz loaded..</h1>;
  //   }

  //startQuiz
  function startQuizButtonClicked() {
    setStartQuiz(true);
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }
  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  // print time in min and sec
  function printTimeInMinAndSec(timeInSec) {
    75 / 60;
    const min = Math.floor(timeInSec / 60);
    const sec = timeInSec % 60;
    return `${min} min , ${sec} sec`;
  }

  //get time %
  function getTimeInPercentage() {
    if (!currentQuiz) return 0;
    let per = (timeLeft / currentQuiz.maxTime) * 100;
    return Math.round(per);
  }

  if (loading) {
    return (
      <div className="flex flex-col justify-center gap-2 items-center mt-10">
        <Spinner />
        <h1>Please wait...</h1>
      </div>
    );
  }

  if (!startQuiz && showResult) {
    return (
      <div className="">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>
              <Book />
              <p className="mt-3 font-bold">Your quiz result</p>
              <p className="font-thin mt-3">
                This is auto generated result you can cross verify ...
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResultSummary
              maxMarks={currentQuiz.maxMarks}
              correct={result.correct}
              incorrect={result.incorrect}
              attempted={result.attempted}
              total={currentQuiz.questions.length}
            />
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button
              onClick={() => {
                navigate("/users/feed");
              }}
              className="cursor-pointer"
            >
              Attempt Another Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (!startQuiz && currentQuiz) {
    return (
      <div>
        <InstructionPage
          createdDate={currentQuiz.createdDate}
          description={currentQuiz.description}
          instructions={[currentQuiz.instructions]}
          maxMarks={currentQuiz.maxMarks}
          maxTime={currentQuiz.maxTime}
          minusMarking={currentQuiz.minusMarking}
          onStartQuiz={startQuizButtonClicked}
        />
      </div>
    );
  }

  if (startQuiz && currentQuiz) {
    return (
      <>
        <div className="flex">
          {questions.length > 0 && (
            <div className="flex-1  mx-10 relative  px-2 py-3 flex flex-col gap-5">
              {/* clear option butotn */}

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => {
                      handleAnswerSelected(currentIndex, null);
                    }}
                    className="absolute rounded-full p-2 cursor-pointer right-10  top-2"
                    size="sm "
                    variant="outline"
                  >
                    <X />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  Clear selected answer for this question
                </TooltipContent>
              </Tooltip>

              <h1 className="text-2xl font-bold  w-[calc(90%)]">
                Q{currentIndex + 1}) {questions[currentIndex]["question"]}
              </h1>
              <div className="flex flex-wrap justify-between ">
                <p className=" w-1/2 flex  items-center gap-2">
                  <input
                    checked={selectedAnswer[currentIndex] == 1}
                    onChange={() => {
                      handleAnswerSelected(currentIndex, 1);
                    }}
                    type="radio"
                    name="answer"
                  />
                  <span> 1) {questions[currentIndex]["option1"]}</span>
                </p>
                <p className="  w-1/2 text-left  flex items-center gap-2">
                  <input
                    checked={selectedAnswer[currentIndex] == 2}
                    onChange={() => {
                      handleAnswerSelected(currentIndex, 2);
                    }}
                    type="radio"
                    name="answer"
                  />
                  <span> 2) {questions[currentIndex]["option2"]}</span>
                </p>
              </div>
              <div className="flex flex-wrap justify-between">
                <p className=" w-1/2   flex items-center gap-2">
                  <input
                    checked={selectedAnswer[currentIndex] == 3}
                    onChange={() => {
                      handleAnswerSelected(currentIndex, 3);
                    }}
                    type="radio"
                    name="answer"
                  />
                  <span>3) {questions[currentIndex]["option3"]}</span>
                </p>
                <p className=" w-1/2 text-left  flex items-center gap-2">
                  <input
                    checked={selectedAnswer[currentIndex] == 4}
                    onChange={() => {
                      handleAnswerSelected(currentIndex, 4);
                    }}
                    type="radio"
                    name="answer"
                  />
                  <span> 4) {questions[currentIndex]["option4"]}</span>
                </p>
              </div>
              <div className="flex mt-5 flex-wrap justify-between">
                <Button
                  disabled={currentIndex <= 0}
                  onClick={handlePrevious}
                  className="cursor-pointer"
                  variant="outline"
                >
                  Previous
                </Button>
                <Button
                  disabled={currentIndex >= questions.length - 1}
                  onClick={handleNext}
                  className="cursor-pointer"
                  variant="outline"
                >
                  Next
                </Button>
              </div>
              <Button
                onClick={() => {
                  setisSubmitDialogOpen(true);
                }}
                size="sm"
                className="fixed cursor-pointer bottom-10 right-10 "
              >
                Submit Quiz
              </Button>
            </div>
          )}
          <div className="w-[200px]  flex flex-col items-center   px-2 ">
            <h1>Time Left</h1>
            <h1 className="font-bold mt-3">
              {" "}
              {printTimeInMinAndSec(timeLeft)}
            </h1>

            <Progress value={100 - getTimeInPercentage()} className="mt-4" />

            <div className="mt-10 flex flex-col gap-3 ">
              <h1>Questions</h1>
              <div className=" flex flex-wrap justify-center gap-2">
                {questions.map((ques, index) => {
                  return (
                    <Button
                      className={"cursor-pointer w-10"}
                      onClick={() => {
                        setCurrentIndex(index);
                      }}
                      variant={currentIndex == index ? "default" : "outline"}
                      size="sm"
                    >
                      {index + 1}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* submit config dialog  */}
        <AlertDialog open={isSubmitDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently submit your
                quiz and you will get result.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                onClick={() => {
                  setisSubmitDialogOpen(false);
                }}
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleQuizSubmit}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    );
  }
}

export default QuizPlayGround;
