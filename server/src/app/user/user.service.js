import { UserDal } from "./user.dal.js";

export class UserService {
  static async saveUser(user) {
    return await UserDal.save(user);
  }
}
