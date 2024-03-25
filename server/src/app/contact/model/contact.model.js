import mongoose, { Schema } from "mongoose";
const contactSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

export const contactModel = mongoose.model("Contact", contactSchema);
