import Joi from "joi";

export const contactValidationSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Please enter a valid email address",
      "string.empty": "Email address cannot be empty",
      "any.required": "Email address is required",
    }),
  phoneNumber: Joi.string().required().messages({
    "string.pattern.base":
      "Please enter a valid phone number (e.g. 5551234567)",
    "string.empty": "Phone number cannot be empty",
    "any.required": "Phone number is required",
  }),
});
