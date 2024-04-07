import { decodedToken } from "../../core/utils/auth/decoded-token.js";
import { ApiResponse } from "../../shared/dto/api-response.js";
import { APIError } from "../../shared/dto/error-response.js";
import { UserResponse } from "./dto/user.dto.js";
import { UserService } from "./user.service.js";

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
    const deToken = await decodedToken(request.cookies.accessToken);
    if (deToken._id != request.params.id) {
      throw new APIError("Nah! Access", 401);
    }
    return response.json({ satisfies: true });
  }
}
