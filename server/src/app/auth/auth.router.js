import express from "express";
import { AuthController } from "./auth.controller.js";
import { AuthValidationSchemaMiddleware } from "./validation/auth.middleware.js";
const authRouter = express.Router();
const mainPath = "/auth";

authRouter.post(
  `${mainPath}/register`,
  AuthValidationSchemaMiddleware.register,
  AuthController.register
);
authRouter.post(
  `${mainPath}/login`,
  AuthValidationSchemaMiddleware.login,
  AuthController.login
);

export default authRouter;
