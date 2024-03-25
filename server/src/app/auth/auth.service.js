import { APIError } from "../../shared/dto/error-response.js";
import { ContactService } from "../contact/contact.service.js";
import { UserService } from "../user/user.service.js";
import bcrypt from "bcrypt";
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
}
