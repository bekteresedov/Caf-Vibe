import { ApiResponse } from "../../shared/dto/api-response.js";
import { generateToken } from "../../shared/utils/generateToken.js";
import { AuthService } from "./auth.service.js";
import { AuthResponse } from "./dto/auth.dto.js";

export class AuthController {
  static async register(request, response) {
    await AuthService.register(request.body).then((data) => {
      generateToken(data._id, data.fullname, "48h", response);
      return new ApiResponse(
        new AuthResponse(data, "User registered successfully")
      ).created(response);
    });
  }
}
