import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullname: {
      type: String,
    },
    password: {
      type: String,
    },
    profilePhoto: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    reset: {
      code: {
        type: String,
        default: null,
      },
      time: {
        type: String,
        default: null,
      },
    },
    contact: {
      type: Schema.Types.ObjectId,
      ref: "Contact",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

export const userModel = mongoose.model("User", userSchema);
