import { decodedToken } from "../../core/utils/auth/decoded-token.js";
import { ApiResponse } from "../../shared/dto/api-response.js";
import { APIError } from "../../shared/dto/error-response.js";
import { objectTrims } from "../../shared/utils/object.trim.js";
import { saveCloudinary } from "../../shared/utils/save-cloudinary.js";
import { ContactService } from "../contact/contact.service.js";
import { UserResponse } from "./dto/user.dto.js";
import { UserService } from "./user.service.js";
import bcrypt from "bcrypt";

export class UserController {
  static async getSelfProfile(request, response) {
    const deToken = await decodedToken(request.cookies.accessToken);
    if (deToken._id != request.params.id) {
      throw new APIError("Nah! Access", 401);
    }
    const data = await UserService.findUserById(request.params.id);
    return new ApiResponse(
      new UserResponse(data),
      "Get Self Profile successfully"
    ).success(response);
  }
  static async updateSelfProfile(request, response) {
    if (Object.keys(request.body).length === 0 && !request.file) {
      throw new APIError("Bad Request: Request body is empty", 400);
    }

    if (request.body.email) {
      const findEmail = await ContactService.getFindByEmail(request.body.email);

      if (findEmail) {
        throw new APIError("Email is already in use", 409);
      }
    }

    const deToken = await decodedToken(request.cookies.accessToken);
    if (deToken._id != request.params.id) {
      throw new APIError("Nah! Access", 401);
    }

    if (request.body.password) {
      request.body.password = await bcrypt.hash(request.body.password, 10);
    }
    if (request.file) {
      request.body.profilePhoto = await saveCloudinary(request.file);
    }

    const data = await UserService.updateUserById(
      request.params.id,
      objectTrims(request.body)
    );
    return new ApiResponse(
      new UserResponse(data),
      "update  Self Profile successfully"
    ).success(response);
  }
}
