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
authRouter.post(`${mainPath}/logout`, AuthController.logOut);
authRouter.get(`${mainPath}/check`, AuthController.checkEmail);
authRouter.post(
  `${mainPath}/forgot-password`,
  AuthValidationSchemaMiddleware.forgotPassword,
  AuthController.forgotPassword
);
authRouter.post(
  `${mainPath}/reset-code-check`,
  AuthValidationSchemaMiddleware.resetCodeCheck,
  AuthController.resetCodeCheck
);
authRouter.post(
  `${mainPath}/reset-password`,
  AuthValidationSchemaMiddleware.resetPassword,
  AuthController.resetPassword
);

export default authRouter;
