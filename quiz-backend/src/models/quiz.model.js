import mongoose, { Schema } from "mongoose";

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
  maxMarks: {
    type: Number,
    required: true,
    default: 100,
  },
  minusMarking: {
    type: Boolean,
    default: false,
  },
  questions: [Schema.Types.ObjectId],
  maxTime: {
    type: Number,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
});

// 2. create model from schema
const Quiz = mongoose.model("Quiz", QuizSchema);

export default Quiz;
