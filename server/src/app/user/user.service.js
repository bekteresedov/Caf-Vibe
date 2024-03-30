import { ContactService } from "../contact/contact.service.js";
import { UserDal } from "./user.dal.js";

export class UserService {
  static async saveUser(user) {
    return await UserDal.save(user);
  }
  static async findUserByContactEmail(email) {
    const contact = await ContactService.getFindByEmail(email);
    if (!contact) {
      return null;
    }
    return await UserDal.findUserByContactId(contact._id);
  }
  static async updateUserById(id, user) {
    return UserDal.updateUserById(id, user);
  }
}
