const APIError = require("../util/error/apiError");

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

module.exports = errorHandlerMiddleware;
