// apis__routes
import express from "express";
import { listQuizzes } from "../controllers/quiz.controller.js";

const quizRouter = express.Router();

quizRouter.get("/quiz", listQuizzes);

export default quizRouter;
