import Joi from "joi";
import { contactValidationSchema } from "../../contact/validation/contact.schema.js";

export const userValidationSchema = Joi.object({
  fullname: Joi.string().trim().required().min(4).max(20).messages({
    "string.base": "Fullname must be a string",
    "string.empty": "Fullname is required",
    "string.min": "Fullname must be at least 4 characters long",
    "string.max": "Fullname cannot exceed 20 characters",
    "any.required": "Fullname is required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password cannot be empty",
    "any.required": "Password is required",
  }),
  profilePhoto: Joi.string().allow(null).default(null).messages({
    "string.base": "Profile photo must be a string",
  }),
  contact: contactValidationSchema.required().messages({
    "object.base": "Contact information is invalid",
    "any.required": "Contact information is required",
  }),
});
