import express from "express";
import { UserController } from "./user.conroller.js";
import { userValidationSchemaMiddleware } from "./validation/user.middleware.js";
const userRouter = express.Router();
const mainPath = "/user";

userRouter.patch(
  `${mainPath}/update/:id`,
  userValidationSchemaMiddleware,
  UserController.updateSelfProfile
);

userRouter.get(`${mainPath}/get/:id`, UserController.getSelfProfile);

export default userRouter;
