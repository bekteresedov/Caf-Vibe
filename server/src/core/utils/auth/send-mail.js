import nodemailer from "nodemailer";
import { config } from "dotenv";
import { APIError } from "../../../shared/dto/error-response.js";

config();
export const sendEmail = async (mailOptions) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      throw new APIError("Email Failed to Send!", 403);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
