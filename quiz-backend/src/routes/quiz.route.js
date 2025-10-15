// apis__routes
import express from "express";
import {
  createQuiz,
  createQuizFromAI,
  deleteQuiz,
  getSingleQuiz,
  listQuizzes,
} from "../controllers/quiz.controller.js";

const quizRouter = express.Router();

quizRouter.delete("/quizzes/:quizId", deleteQuiz);
quizRouter.get("/quizzes/:quizId", getSingleQuiz);
quizRouter.get("/quizzes", listQuizzes);
quizRouter.post("/quizzes", createQuiz);
quizRouter.post("/quizzes/ai", createQuizFromAI);

export default quizRouter;
