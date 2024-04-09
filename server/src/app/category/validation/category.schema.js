import Joi from "joi";

export const categoryValidationSchema = Joi.object({
  name: Joi.string().min(3).max(10).required().messages({
    "any.required": "Category name is required",
    "string.empty": "Category name cannot be empty",
    "string.min": "Category name must be at least 3 characters long",
    "string.max": "Category name must be at most 10 characters long",
  }),
});
