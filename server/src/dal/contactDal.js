const ContactModel = require("../model/contact");
const { APIError } = require("../util/error/apiError");

class ContactDal {
  static async getbyEmail(email) {
    return await ContactModel.findOne({ email });
  }

  static async save(contact) {
    return await ContactModel.create(contact);
  }
}

module.exports = ContactDal;
