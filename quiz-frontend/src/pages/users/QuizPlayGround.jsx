import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleQuiz } from "../../services/QuizService";
import InstructionPage from "./InstructionPage";
import { time } from "framer-motion";
import { Button } from "@/components/ui/button";

function QuizPlayGround() {
  const { quizId, quizTitle } = useParams();
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [startQuiz, setStartQuiz] = useState(false);
  //   quiz variables
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //function -- to submit quiz
  function handleQuizSubmit() {
    console.log("quiz submmited..");
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

  useEffect(() => {
    if (currentQuiz) {
      setQuestions([...currentQuiz.questions]);
      setTimeLeft(new Number(currentIndex.maxTime));
    }
  }, [currentQuiz]);

  useEffect(() => {
    async function loadQuiz() {
      if (quizId) {
        const quiz = await getSingleQuiz(quizId);
        console.log(quiz);
        setCurrentQuiz({ ...quiz });
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
  } else {
    return (
      <div className="flex">
        {questions.length > 0 && (
          <div className="flex-1 questions_container p-2 md:px-16 py-3 flex flex-col gap-5">
            {console.log(questions[currentIndex])}
            <h1 className="text-2xl font-bold">
              Q{currentIndex + 1}) {questions[currentIndex]["question"]}
            </h1>
            <div className="flex flex-wrap justify-between">
              <p className=" w-1/2 flex  items-center gap-2">
                <input type="radio" name="answer" />
                <span> 1) {questions[currentIndex]["option1"]}</span>
              </p>
              <p className="  w-1/2 text-left  flex items-center gap-2">
                <input type="radio" name="answer" />
                <span> 2) {questions[currentIndex]["option2"]}</span>
              </p>
            </div>
            <div className="flex flex-wrap justify-between">
              <p className=" w-1/2   flex items-center gap-2">
                <input type="radio" name="answer" />
                <span>3) {questions[currentIndex]["option3"]}</span>
              </p>
              <p className=" w-1/2 text-left  flex items-center gap-2">
                <input type="radio" name="answer" />
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
            <Button size="sm" className="fixed bottom-10 right-10 ">
              Submit Quiz
            </Button>
          </div>
        )}
        <div className="w-[200px]  flex flex-col items-center   px-2 ">
          <h1>Time Left</h1>
          <h1 className="font-bold">30min 2sec </h1>

          <div className="mt-10 flex flex-col gap-3 ">
            <h1>Questions</h1>
            <div className=" flex flex-wrap gap-2">
              {questions.map((ques, index) => {
                return (
                  <Button
                    className={"cursor-pointer"}
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
    );
  }
}

export default QuizPlayGround;
