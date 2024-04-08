import express from "express";
import { UserController } from "./user.conroller.js";
import { userValidationSchemaMiddleware } from "./validation/user.middleware.js";
import { fileHandlerMiddleware } from "../../core/middleware/file-handler.middleware.js";
const userRouter = express.Router();
const mainPath = "/user";
const allowedMimes = ["image/png", "image/jpeg", "image/svg+xml", "image/jpg"];
userRouter.patch(
  `${mainPath}/update/:id`,
  userValidationSchemaMiddleware,
  UserController.updateSelfProfile
);

userRouter.get(`${mainPath}/get/:id`, UserController.getSelfProfile);

export default userRouter;
