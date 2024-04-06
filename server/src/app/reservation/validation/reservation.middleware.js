import { validationHandlerMiddleware } from "../../../core/middleware/error-handler-middleware.js";
import { reservationValidationSchema } from "./reservation.schema.js";

export const reservationValidationSchemaMiddleware = async (
  request,
  response,
  next
) =>
  validationHandlerMiddleware(
    reservationValidationSchema,
    request,
    response,
    next
  );
