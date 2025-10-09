import express from "express";
import {
  createUser,
  deleteUser,
  listUsers,
  updateUser,
} from "../controllers/users.controller.js";

const userRouter = express.Router();
userRouter.delete("/users/:userId", deleteUser);
userRouter.put("/users/:userId", updateUser);
userRouter.get("/users", listUsers);
userRouter.post("/users", createUser);

export default userRouter;
