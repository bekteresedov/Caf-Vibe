import { objectTrims } from "../../shared/utils/object.trim.js";
import { ContactDal } from "./contact.dal.js";

export class ContactService {
  static async saveContact(contact) {
    return await ContactDal.save(objectTrims(contact));
  }
  static async getFindByEmail(email) {
    return await ContactDal.findByEmail(email);
  }
}
