import { APIError } from "../../shared/dto/error-response.js";
import { ContactService } from "../contact/contact.service.js";
import { UserService } from "../user/user.service.js";

export class AuthService {
  static async register(register) {
    const { fullname, passwword, contact } = register;
    const findEmail = await ContactService.getFindByEmail(contact.email);
    if (findEmail) {
      throw new APIError("Email is already in use", 409);
    }
    const saveContact = await ContactService.saveContact(contact);
    return UserService.saveUser({
      fullname,
      passwword,
      contact: saveContact._id,
    });
  }
}
