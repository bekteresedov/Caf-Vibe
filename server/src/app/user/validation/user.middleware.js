import { validationHandlerMiddleware } from "../../../core/middleware/error-handler-middleware.js";
import { userValidationSchema } from "./user.schema.js";

export const userValidationSchemaMiddleware = async (request, response, next) =>
  validationHandlerMiddleware(userValidationSchema, request, response, next);
