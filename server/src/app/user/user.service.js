import { objectTrims } from "../../shared/utils/object.trim.js";
import { ContactService } from "../contact/contact.service.js";
import { UserDal } from "./user.dal.js";

export class UserService {
  static async saveUser(user) {
    return await UserDal.save(objectTrims(user));
  }
  static async findUserByContactEmail(email) {
    const contact = await ContactService.getFindByEmail(email);
    if (!contact) {
      return null;
    }
    return await UserDal.findUserByContactId(contact._id);
  }
  static async findUserByRole(role) {
    const user = await UserDal.findUserByRole(role);
    if (!user) {
      return null;
    }
    return user;
  }
  static async updateUserById(id, user) {
    return UserDal.updateUserById(id, objectTrims(user));
  }
  static async findUserById(id) {
    return await UserDal.findUserById(id);
  }
}
