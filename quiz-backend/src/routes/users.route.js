import express from "express";
import { listUsers } from "../controllers/users.controller.js";

const userRouter = express.Router();

userRouter.get("/users", listUsers);

export default userRouter;
