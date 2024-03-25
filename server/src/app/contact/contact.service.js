import { ContactDal } from "./contact.dal.js";

export class ContactService {
  static async saveContact(contact) {
    return await ContactDal.save(contact);
  }
  static async getFindByEmail(email) {
    return await ContactDal.findByEmail(email);
  }
}
