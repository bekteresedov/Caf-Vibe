const UserModel = require("../model/user");

class UserDal {
  static async save(user) {
    return await UserModel.create(user);
  }
}

module.exports = UserDal;
