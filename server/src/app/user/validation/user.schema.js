import Joi from "joi";

export const userValidationSchema = Joi.object({
  fullname: Joi.string().trim().required().min(4).max(20).messages({
    "string.base": "Fullname must be a string",
    "string.empty": "Fullname is required",
    "string.min": "Fullname must be at least 4 characters long",
    "string.max": "Fullname cannot exceed 20 characters",
    "any.required": "Fullname is required",
  }),
  password: Joi.string().trim().required().messages({
    "string.empty": "Password cannot be empty",
    "any.required": "Password is required",
  }),
  profilePhoto: Joi.string().trim().allow(null).default(null).messages({
    "string.base": "Profile photo must be a string",
  }),
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Please enter a valid email address",
      "string.empty": "Email address cannot be empty",
      "any.required": "Email address is required",
    }),
  phoneNumber: Joi.string().trim().min(9).max(15).required().messages({
    "string.pattern.base":
      "Please enter a valid phone number (e.g. 5551234567)",
    "string.min": "Phone Number must be at least 9 characters long",
    "string.max": "Phone Number cannot exceed 15 characters",
    "string.empty": "Phone number cannot be empty",
    "any.required": "Phone number is required",
  }),
  role: Joi.string().trim().valid("admin", "user").default("user"),
});
