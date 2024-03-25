import { contactModel } from "./model/contact.model.js";

export class ContactDal {
  static async save(user) {
    return await contactModel.create(user);
  }
  static async findByEmail(email) {
    return await contactModel.findOne({ email });
  }
}
