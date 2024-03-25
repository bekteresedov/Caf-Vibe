import { ApiResponse } from "../../shared/dto/api-response.js";
import { AuthService } from "./auth.service.js";
import { AuthResponse } from "./dto/auth.dto.js";

export class AuthController {
  static async register(request, response) {
    const registered = await AuthService.register(request.body);
    return new ApiResponse(
      new AuthResponse(registered, "User registered successfully")
    ).created(response);
  }
}
