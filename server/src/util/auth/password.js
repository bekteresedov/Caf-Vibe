const bcrypt = require("bcrypt");

class AuthPassword {
  static async passwordHash(password) {
    return await bcrypt.hash(password, 10);
  }
}

module.exports = AuthPassword;
