import Joi from "joi";
import { contactValidationSchema } from "../../contact/validation/contact.schema.js";

export const reservationValidationSchema = Joi.object({
  date: Joi.string()
    .pattern(new RegExp(/^\d{2}\.\d{2}\.\d{4}$/))
    .required()
    .messages({
      "string.empty": "Date cannot be empty",
      "any.required": "Date is required",
      "string.pattern.base": "Date must be in the format DD.MM.YYYY",
    }),
  time: Joi.string()
    .pattern(new RegExp(/^\d{2}:\d{2}$/))
    .required()
    .messages({
      "string.empty": "Time cannot be empty",
      "any.required": "Time is required",
      "string.pattern.base": "Time must be in the format HH:MM",
    }),
  guest: Joi.number().valid(2, 4, 6, 9, 10, 12).required().messages({
    "any.only": "Guest must be one of [2, 4, 6, 9, 10, 12]",
    "any.required": "Guest is required",
  }),
  name: Joi.string().min(3).max(15).required().messages({
    "string.min": "Name must be at least 3 characters long",
    "string.max": "Name must be at most 15 characters long",
    "string.empty": "Name cannot be empty",
    "any.required": "Name is required",
  }),
  phoneNumber: Joi.string().required().messages({
    "string.pattern.base":
      "Please enter a valid phone number (e.g. 5551234567)",
    "string.empty": "Phone number cannot be empty",
    "any.required": "Phone number is required",
  }),
});
