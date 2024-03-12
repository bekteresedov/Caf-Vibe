const AuthSchema = require("../../schema/authSchema");
const APIError = require("../../util/error/apiError");

class AuthValidation {
  constructor() {}

  static validate = async (schema, request, response, next) => {
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

  static register = async (request, response, next) =>
    AuthValidation.validate(AuthSchema.register, request, response, next);
}

module.exports = AuthValidation;
