import axios from "axios";
import { axiosInstance } from "./axiosConfig";

//get all quizzes
export const getAllQuizzes = async () => {
  const response = await axiosInstance.get(`quizzes`);
  return response.data;
};

//generate quiz with ai
export const createQuizWithAI = async (aiData) => {
  const response = await axiosInstance.post(`/quizzes/ai`, aiData);
  return response.data;
};

//get single quiz

// ceate quiz

//delete quiz
