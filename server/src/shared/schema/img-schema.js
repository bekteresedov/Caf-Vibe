import Joi from "joi";

const allowedMimes = ["image/png", "image/jpeg", "image/svg+xml", "image/jpg"];

export const imageValidationSchema = Joi.object({
  // Field name of the file (e.g., "file")
  fieldname: Joi.string().required(),

  // Original file name
  originalname: Joi.string().required(),

  // Encoding information (e.g., "7bit")
  encoding: Joi.string().required(),

  // File type, only specific types are accepted (png, jpeg, svg, jpg)
  mimetype: Joi.string()
    .valid("image/png", "image/jpeg", "image/svg+xml", "image/jpg")
    .required()
    .messages({
      "any.only": "File type must be either PNG, JPEG, SVG, or JPG.",
    }),

  // Destination folder of the file
  destination: Joi.string().required(),

  // File name
  filename: Joi.string().required(),

  // Full path of the file
  path: Joi.string().required(),

  // File size, maximum 3 MB (3 * 1024 * 1024 bytes)
  size: Joi.number()
    .max(3 * 1024 * 1024)
    .required()
    .messages({
      "number.base": "Invalid file size.",
      "number.max": "File size is too large. It must be maximum 3 MB.",
    }),
});
