const Joi = require("joi");

class AuthSchema {
  static contactSchema = Joi.object({
    email: Joi.string().trim().email().required().messages({
      "string.base": "Email must be a string",
      "string.empty": "Email is required",
      "string.email": "Invalid email format",
      "any.required": "Email is required",
    }),
    phoneNumber: Joi.string()
      .trim()
      .required()
      .pattern(new RegExp(/^\+(?:[0-9]●?){6,14}[0-9]$/))
      .messages({
        "string.base": "Phone number must be a string",
        "string.empty": "Phone number is required",
        "string.pattern.base": "Invalid phone number format",
        "any.required": "Phone number is required",
      }),
  });

  static register = Joi.object({
    fullname: Joi.string().trim().required().min(4).max(20).messages({
      "string.base": "Fullname must be a string",
      "string.empty": "Fullname is required",
      "string.min": "Fullname must be at least 4 characters long",
      "string.max": "Fullname cannot exceed 20 characters",
      "any.required": "Fullname is required",
    }),
    contact: AuthSchema.contactSchema.required(),
    password: Joi.string()
      .trim()
      .required()
      .min(8)
      .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$"))
      .messages({
        "string.base": "Password must be a string",
        "string.empty": "Password is required",
        "string.min": "Password must be at least 8 characters long",
        "string.pattern.base":
          "Password must contain at least one lowercase letter, one uppercase letter, and one digit. Special characters are not allowed.",
        "any.required": "Password is required",
      }),
  });
}

module.exports = AuthSchema;
