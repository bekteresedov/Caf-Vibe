import { generateToken } from "../../core/utils/auth/generate-token.js";
import { ApiResponse } from "../../shared/dto/api-response.js";
import { AuthService } from "./auth.service.js";
import { AuthResponse } from "./dto/auth.dto.js";

export class AuthController {
  static async register(request, response) {
    await AuthService.register(request.body).then((data) => {
      generateToken(data, "1m", response);
      return new ApiResponse(
        new AuthResponse(data),
        "User registered successfully"
      ).created(response);
    });
  }
  static async login(request, response) {
    await AuthService.login(request.body).then((data) => {
      generateToken(data, "1m", response);
      return new ApiResponse(
        new AuthResponse(data),
        "User login successfully"
      ).success(response);
    });
  }
  static async logOut(request, response) {
    const accessToken = request.cookies.accessToken;
    if (!accessToken) {
      return new ApiResponse(null, "User is already signed out").success(
        response
      );
    }

    response.clearCookie("accessToken", { httpOnly: true, secure: true });
    return new ApiResponse(null, "User signed out successfully").success(
      response
    );
  }
  static async checkEmail(request, response) {
    await AuthService.checkEmail(request.query.email);
    return new ApiResponse(null, "Email is found").success(response);
  }
  static async forgotPassword(request, response) {
    const { email } = request.body;
    await AuthService.forgotPassword(email);
    return new ApiResponse(null, "Please Check Your Mailbox").success(response);
  }
  static async resetCodeCheck(request, response) {
    const { email, password } = request.body;
    const data = await AuthService.resetCodeCheck(email, password);
    generateToken(data, "5h", response);
    return new ApiResponse(
      new AuthResponse(data, "You Can Reset Your Password")
    ).created(response);
  }
  static async resetPassword(request, response) {
    await AuthService.resetPassword(
      request.cookies.accessToken,
      request.body.password
    ).then((data) => {
      generateToken(data, "1m", response);
      return new ApiResponse(
        new AuthResponse(data),
        "Reset password  successfully"
      ).success(response);
    });
  }
}
