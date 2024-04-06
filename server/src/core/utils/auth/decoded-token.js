import { UserService } from "../../../app/user/user.service.js";
import { APIError } from "../../../shared/dto/error-response.js";
import jwt from "jsonwebtoken";
export const decodedToken = async (token) => {
  // const token: string = temporaryToken.split(" ")[1]

  let userInfo;
  await jwt.verify(token, process.env.ACCESS_TOKEN, async (err, decoded) => {
    if (err) throw new APIError("Invalid Token", 401);

    // userInfo = await UserModel.findById(decoded.sub);

    userInfo = await UserService.findUserById(decoded._id);

    if (!userInfo) throw new APIError("Invalid Token", 401);
  });

  return userInfo;
};
