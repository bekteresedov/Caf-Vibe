import { APIError } from "../../shared/dto/error-response.js";

const errorHandlerMiddleware = (error, request, response, next) => {
  if (error instanceof APIError) {
    return response.status(error.statusCode || 400).json({
      success: false,
      message: error.message,
    });
  }

  console.log(error);

  return response.status(500).json({
    success: false,
    message: "Internal Server Error!",
  });
};

export default errorHandlerMiddleware;
