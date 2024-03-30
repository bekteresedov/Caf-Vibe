import { config } from "dotenv";
import jwt from "jsonwebtoken";
config();

const accessSecret = process.env.ACCESS_TOKEN;
export const generateToken = (userId, fullname, time, response) => {
  const accessToken = jwt.sign({ userId, fullname }, accessSecret, {
    expiresIn: time,
    algorithm: "HS512",
  });
  response.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
};
