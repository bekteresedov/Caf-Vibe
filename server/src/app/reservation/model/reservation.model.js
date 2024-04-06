import mongoose, { Schema } from "mongoose";

const reservationSchema = new Schema(
  {
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    guest: {
      type: String,
      enum: [2, 4, 6, 9, 10, 12],
    },
    name: {
      type: String,
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

export const reservationModel = mongoose.model(
  "Reservation",
  reservationSchema
);
