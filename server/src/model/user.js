const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
    },
    password: {
      type: String,
    },
    profilePhoto: {
      type: String,
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

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
