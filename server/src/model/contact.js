const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContactSchema = new Schema(
  {
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

const ContactModel = mongoose.model("Contact", ContactSchema);

module.exports = ContactModel;
