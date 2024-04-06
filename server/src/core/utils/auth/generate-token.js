import { config } from "dotenv";
import jwt from "jsonwebtoken";
config();

const accessSecret = process.env.ACCESS_TOKEN;
export const generateToken = ({ _id, fullname, role }, time, response) => {
  const accessToken = jwt.sign({ _id, fullname, role }, accessSecret, {
    expiresIn: time,
    algorithm: "HS512",
  });
  response.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
};
