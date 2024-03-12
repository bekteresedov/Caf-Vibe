const AuthResponse = require("../dto/response/authResponse");
const AuthPassword = require("../util/auth/password");
const ContactService = require("./contactService");
const UserService = require("./userService");
class AuthService {
  static async register(user) {
    let { fullname, password, contact } = user;
    const saveContact = await ContactService.saveContact(contact);
    password = await AuthPassword.passwordHash(password);
    const saveUser = await UserService.saveUser({
      fullname,
      password,
      contact: saveContact._id,
    });
    return new AuthResponse(saveUser._id, saveUser.fullname, saveContact.email);
  }
}

module.exports = AuthService;
