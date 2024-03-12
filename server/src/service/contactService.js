const ContactDal = require("../dal/contactDal");
const APIError = require("../util/error/apiError");

class ContactService {
  static async findContactByEmail(email) {
    return await ContactDal.getbyEmail(email);
  }
  static async saveContact(contact) {
    console.log(contact);
    const findContact = await ContactService.findContactByEmail(contact.email);
    if (findContact) {
      throw new APIError("User could not be registered!", 400);
    }
    return ContactDal.save(contact);
  }
}

module.exports = ContactService;
