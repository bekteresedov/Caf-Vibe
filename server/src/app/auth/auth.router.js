import express from "express";
import { authValidationSchemaMiddleware } from "./validation/auth.schema.js";
import { AuthController } from "./auth.controller.js";
const authRouter = express.Router();
const mainPath = "/auth";

authRouter.post(
  `${mainPath}/register`,
  authValidationSchemaMiddleware,
  AuthController.register
);

export default authRouter;
