import { userModel } from "./model/user.model.js";

export class UserDal {
  static async save(user) {
    return await userModel.create(user);
  }
}
