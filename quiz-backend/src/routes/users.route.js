import express from "express";
import {
  createUser,
  deleteUser,
  listUsers,
  updateUser,
} from "../controllers/users.controller.js";

const userRouter = express.Router();

userRouter.get("/users", listUsers);
userRouter.get("/create-user", createUser);
userRouter.get("/delete-user", deleteUser);
userRouter.get("/update-user", updateUser);

export default userRouter;
