import axios from "axios";
import { axiosInstance } from "./axiosConfig";

//get all quizzes
export const getAllQuizzes = async () => {
  const response = await axiosInstance.get(`/quizzes`);
  return response.data;
};

//generate quiz with ai
export const createQuizWithAI = async (aiData) => {
  const response = await axiosInstance.post(`/quizzes/ai`, aiData);
  return response.data;
};


//load single quiz
export const getSingleQuiz=async(quizId)=>{

  const resposne= await axiosInstance.get(`/quizzes/${quizId}`)

  return resposne.data

}

//get single quiz

// ceate quiz

//delete quiz
