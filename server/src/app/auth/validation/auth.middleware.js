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
}
