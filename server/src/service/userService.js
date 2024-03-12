const UserDal = require("../dal/userDal");

class UserService {
  static async saveUser(user) {
    return await UserDal.save(user);
  }
}

module.exports = UserService;
