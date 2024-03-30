import { generateToken } from "../../core/utils/auth/generate-token.js";
import { ApiResponse } from "../../shared/dto/api-response.js";
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
  static async login(request, response) {
    await AuthService.login(request.body).then((data) => {
      generateToken(data._id, data.fullname, "48h", response);
      return new ApiResponse(
        new AuthResponse(data, "User login successfully")
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
    return new ApiResponse(null, "You can continue").success(response);
  }
  static async forgotPassword(request, response) {
    const { email } = request.body;
    await AuthService.forgotPassword(email);
    return new ApiResponse(null, "Please Check Your Mailbox").success(response);
    //     return new ApiResponse<null>(null, "Please Check Your Mailbox").
    //         success(response);

    //     const user: IUserModel = await UserModel.findOne({ email }) as IUserModel;

    //     if (!user) throw new APIError("Invalid User", 400)

    //     const resetCode: string = crypto.randomBytes(3).toString("hex");

    //     await sendEmail(
    //         {
    //             from: "youremail@gmail.com",
    //             to: email,
    //             subject: "Password Reset",
    //             text: resetCode,
    //         }
    //     );
    //     await UserModel.updateOne(
    //         { email },
    //         {
    //             reset: {
    //                 code: resetCode,
    //                 time: moment(new Date())
    //                     .add(15, "minute")
    //                     .format("YYYY-MM-DD HH:mm:ss"),
    //             },
    //         }
    //     );
    //     return new ApiResponse<null>(null, "Please Check Your Mailbox").
    //         success(response);
  }
}
