import React, { useEffect, useState } from "react";
import { getAllQuizzes } from "../../services/QuizService";
import QuizCard from "../../components/shared/QuizCard";

function FeedQuiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (quizzes.length <= 0) {
      if (!loading) {
        loadAllQuizzes();
      }
    }
  }, []);

  async function loadAllQuizzes() {
    try {
      setLoading(true);
      const result = await getAllQuizzes();
      console.log(result);
      setQuizzes([...result].reverse());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className="text-3xl ">All quizzes are here</h1>
      <p className="mt-2 font-light">Click on any quiz to start the quiz...</p>
      <div className="flex flex-wrap gap-4 mt-10">
        {quizzes.map((quiz) => (
          <QuizCard
            title={quiz.title}
            description={quiz.description}
            maxMarks={quiz.maxMarks}
            minusMarking={quiz.minusMarking}
            numberOfQuestions={quiz.questions.length}
            coverImage="https://cdn-icons-png.flaticon.com/512/5692/5692030.png"
            createdDate={quiz.createdDate}
          />
        ))}
      </div>
    </div>
  );
}

export default FeedQuiz;
