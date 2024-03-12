const AuthService = require("../service/authService");
const ApiResponse = require("../util/share/response");

class AuthController {
  static async register(request, response) {
    const registered = await AuthService.register(request.body);
    return new ApiResponse(registered, "User registered successfully").created(
      response
    );
  }
}

module.exports = AuthController;
