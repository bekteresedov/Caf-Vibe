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
}
