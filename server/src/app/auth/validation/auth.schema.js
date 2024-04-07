import Joi from "joi";
export class AuthValidationSchema {
  static login = Joi.object({
    email: Joi.string()
      .trim()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.email": "Please enter a valid email address",
        "string.empty": "Email address cannot be empty",
        "any.required": "Email address is required",
      }),
    password: Joi.string()
      .trim()
      .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$"))
      .min(8)
      .max(20)
      .required()
      .messages({
        "string.pattern.base":
          "Password must contain at least one lowercase letter, one uppercase letter, and one digit",
        "string.min": "Password must be at least 8 characters long",
        "string.max": "Password must be at most 20 characters long",
        "any.required": "Password is required",
      }),
  });
  static forgotPassword = Joi.object({
    email: Joi.string()
      .trim()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.email": "Please enter a valid email address",
        "string.empty": "Email address cannot be empty",
        "any.required": "Email address is required",
      }),
  });
  static resetCodeCheck = Joi.object({
    email: Joi.string()
      .trim()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.email": "Please enter a valid email address",
        "string.empty": "Email address cannot be empty",
        "any.required": "Email address is required",
      }),
    password: Joi.string().trim().min(6).max(6).required().messages({
      "string.min": "Password must be at least 6 characters long",
      "string.max": "Password must be at most 6 characters long",
      "any.required": "Password is required",
    }),
  });
  static resetPassword = Joi.object({
    password: Joi.string()
      .trim()
      .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$"))
      .min(8)
      .max(20)
      .required()
      .messages({
        "string.pattern.base":
          "Password must contain at least one lowercase letter, one uppercase letter, and one digit",
        "string.min": "Password must be at least 8 characters long",
        "string.max": "Password must be at most 20 characters long",
        "any.required": "Password is required",
      }),
  });
}
