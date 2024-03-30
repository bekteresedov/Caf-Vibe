import { userModel } from "./model/user.model.js";

export class UserDal {
  static async save(user) {
    return await userModel.create(user);
  }

  static async findUserByContactId(id) {
    return await userModel.findOne({ contact: id }).populate("contact");
  }
  static async updateUserById(id, newData) {
    return await userModel.findByIdAndUpdate(
      id,
      { $set: newData },
      { new: true }
    );
  }
}
