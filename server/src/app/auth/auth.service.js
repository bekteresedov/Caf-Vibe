import { sendEmail } from "../../core/utils/auth/send-mail.js";
import { APIError } from "../../shared/dto/error-response.js";
import { ContactService } from "../contact/contact.service.js";
import { UserService } from "../user/user.service.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import moment from "moment";
import { decodedToken } from "../../core/utils/auth/decoded-token.js";

export class AuthService {
  static async register(register) {
    let { fullname, password, contact, role } = register;
    if (role == "admin") {
      const user = await UserService.findUserByRole(role);
      if (user) {
        throw new APIError("Admin is already in use", 409);
      }
    }

    const findEmail = await ContactService.getFindByEmail(contact.email);

    if (findEmail) {
      throw new APIError("Email is already in use", 409);
    }
    password = await bcrypt.hash(password, 10);
    const saveContact = await ContactService.saveContact(contact);
    return UserService.saveUser({
      fullname,
      password,
      role: role,
      contact: saveContact._id,
    });
  }

  static async login(login) {
    const { email, password } = login;
    const findUser = await UserService.findUserByContactEmail(email);

    if (
      !findUser ||
      findUser.contact.email !== email ||
      !(await bcrypt.compare(password, findUser.password))
    ) {
      throw new APIError(`Email, or password is incorrect`, 401);
    }

    return findUser;
  }
  static async checkEmail(email) {
    const findEmail = await ContactService.getFindByEmail(email);
    if (!findEmail) {
      throw new APIError("Email is already in use", 409);
    }
  }
  static async forgotPassword(email) {
    const user = await UserService.findUserByContactEmail(email);

    if (!user) throw new APIError("Invalid User", 400);
    const resetCode = crypto.randomBytes(3).toString("hex");
    await sendEmail({
      from: "caf-vibe@gmail.com",
      to: email,
      subject: "Hello, This Password Reset Code",
      text: resetCode,
    });
    const resetInfo = {
      code: resetCode,
      time: moment(new Date()).add(15, "minute").format("YYYY-MM-DD HH:mm:ss"),
    };
    return await UserService.updateUserById(user._id, {
      reset: resetInfo,
    });
  }
  static async resetCodeCheck(email, password) {
    const userInfo = await UserService.findUserByContactEmail(email);
    if (!userInfo) throw new APIError("Invalid Code", 401);

    const dbTime = moment(userInfo.reset.time);
    const nowTime = moment(new Date());

    const timeDiff = dbTime.diff(nowTime, "minutes");

    if (timeDiff <= 0 || userInfo.reset.code !== password)
      throw new APIError("Invalid Code time", 401);

    return userInfo;
  }
  static async resetPassword(token, newPassword) {
    const deToken = await decodedToken(token);

    const passwordHash = await bcrypt.hash(newPassword, 10);
    const result = await UserService.updateUserById(deToken._id, {
      reset: {
        code: null,
        time: null,
      },
      password: passwordHash,
    });
    return result;
  }
}
