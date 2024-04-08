import { validationHandlerMiddleware } from "../../../core/middleware/error-handler-middleware.js";
import { APIError } from "../../../shared/dto/error-response.js";
import { imageValidationSchema } from "../../../shared/schema/img-schema.js";
import { userUpdateValidationSchema } from "./user.schema.js";

export const userValidationSchemaMiddleware = async (
  request,
  response,
  next
) => {
  if (request.file) {
    const validationResult = imageValidationSchema.validate(request.file);
    if (validationResult.error) {
      throw new APIError(validationResult.error.message, 400);
    }
  }
  request.body = JSON.parse(JSON.stringify(request.body));

  return validationHandlerMiddleware(
    userUpdateValidationSchema,
    request,
    response,
    next
  );
};
