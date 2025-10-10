import mongoose from "mongoose";

// 1. create schema
const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Quiz title is required !"],
  },
  description: {
    type: String,
    required: [true, "Quiz description is required !"],
  },
});

// 2. create model from schema
const Quiz = mongoose.model("Quiz", QuizSchema);

export default Quiz;
