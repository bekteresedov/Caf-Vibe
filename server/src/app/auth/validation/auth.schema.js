import Joi from "joi";
export class AuthValidationSchema {
  static login = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.email": "Please enter a valid email address",
        "string.empty": "Email address cannot be empty",
        "any.required": "Email address is required",
      }),
    password: Joi.string().required().messages({
      "string.empty": "Password cannot be empty",
      "any.required": "Password is required",
    }),
  });
}
