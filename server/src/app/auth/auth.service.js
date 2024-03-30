import { sendEmail } from "../../core/utils/auth/send-mail.js";
import { APIError } from "../../shared/dto/error-response.js";
import { ContactService } from "../contact/contact.service.js";
import { UserService } from "../user/user.service.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import moment from "moment";

export class AuthService {
  static async register(register) {
    let { fullname, password, contact } = register;
    const findEmail = await ContactService.getFindByEmail(contact.email);
    if (findEmail) {
      throw new APIError("Email is already in use", 409);
    }
    password = await bcrypt.hash(password, 10);
    const saveContact = await ContactService.saveContact(contact);
    return UserService.saveUser({
      fullname,
      password,
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
    if (findEmail) {
      throw new APIError("Email is already in use", 409);
    }
  }
  static async forgotPassword(email) {
    const user = ContactService.getFindByEmail(email);

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
    return await UserService.updateUserByEmail(email, {
      reset: resetInfo,
    });
  }
  static async resetCodeCheck(email, password) {}
  static async resetPassword(id, newPassword) {}
}
