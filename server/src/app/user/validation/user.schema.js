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

export const userUpdateValidationSchema = Joi.object({
  fullname: Joi.string().trim().required().optional().min(4).max(20).messages({
    "string.base": "Fullname must be a string",
    "string.empty": "Fullname is required",
    "string.min": "Fullname must be at least 4 characters long",
    "string.max": "Fullname cannot exceed 20 characters",
    "any.required": "Fullname is required",
  }),
  password: Joi.string().trim().required().optional().messages({
    "string.empty": "Password cannot be empty",
    "any.required": "Password is required",
  }),
  password: Joi.string()
    .trim()
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$"))
    .min(8)
    .max(20)
    .required()
    .optional()
    .messages({
      "string.pattern.base":
        "Password must contain at least one lowercase letter, one uppercase letter, and one digit",
      "string.min": "Password must be at least 8 characters long",
      "string.max": "Password must be at most 20 characters long",
      "any.required": "Password is required",
    }),
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .optional()
    .messages({
      "string.email": "Please enter a valid email address",
      "string.empty": "Email address cannot be empty",
      "any.required": "Email address is required",
    }),
  phoneNumber: Joi.string()
    .trim()
    .min(9)
    .max(15)
    .required()
    .optional()
    .messages({
      "string.pattern.base":
        "Please enter a valid phone number (e.g. 5551234567)",
      "string.min": "Phone Number must be at least 9 characters long",
      "string.max": "Phone Number cannot exceed 15 characters",
      "string.empty": "Phone number cannot be empty",
      "any.required": "Phone number is required",
    }),
});
