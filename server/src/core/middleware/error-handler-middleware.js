import { APIError } from "../../shared/dto/error-response.js";

export const validationHandlerMiddleware = async (
  schema,
  request,
  response,
  next
) => {
  try {
    await schema.validateAsync(request.body);
  } catch (error) {
    const errorMessage =
      error.details && error.details[0].message
        ? error.details[0].message
        : "Please Follow the Validation Rules";
    throw new APIError(errorMessage, 400);
  }
  next();
};
