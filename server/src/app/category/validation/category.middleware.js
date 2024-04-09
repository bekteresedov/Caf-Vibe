import { validationHandlerMiddleware } from "../../../core/middleware/error-handler-middleware.js";
import { categoryValidationSchema } from "./category.schema.js";

export const categoryValidationSchemaMiddleware = async (
  request,
  response,
  next
) =>
  validationHandlerMiddleware(
    categoryValidationSchema,
    request,
    response,
    next
  );
