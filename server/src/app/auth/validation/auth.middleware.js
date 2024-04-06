import { validationHandlerMiddleware } from "../../../core/middleware/error-handler-middleware.js";
import { userValidationSchema } from "../../user/validation/user.schema.js";
import { AuthValidationSchema } from "./auth.schema.js";

export class AuthValidationSchemaMiddleware {
  static login = async (request, response, next) =>
    validationHandlerMiddleware(
      AuthValidationSchema.login,
      request,
      response,
      next
    );
  static register = async (request, response, next) =>
    validationHandlerMiddleware(userValidationSchema, request, response, next);
  static forgotPassword = async (request, response, next) =>
    validationHandlerMiddleware(
      AuthValidationSchema.forgotPassword,
      request,
      response,
      next
    );
  static resetCodeCheck = async (request, response, next) =>
    validationHandlerMiddleware(
      AuthValidationSchema.resetCodeCheck,
      request,
      response,
      next
    );
  static resetPassword = async (request, response, next) =>
    validationHandlerMiddleware(
      AuthValidationSchema.resetPassword,
      request,
      response,
      next
    );
}
