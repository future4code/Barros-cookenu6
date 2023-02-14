import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router()
const userController = new UserController()


// ENDPOINT CRIAR USUARIO
userRouter.post("/signup", userController.signup)