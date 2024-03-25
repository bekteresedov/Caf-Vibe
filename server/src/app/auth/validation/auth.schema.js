import { validationHandlerMiddleware } from "../../../core/middleware/error-handler-middleware.js";
import { userValidationSchema } from "../../user/validation/user.schema.js";
export const authValidationSchemaMiddleware = async (request, response, next) =>
  validationHandlerMiddleware(userValidationSchema, request, response, next);
