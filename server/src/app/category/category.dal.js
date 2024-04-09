import { categoryModel } from "./model/category.model.js";

export class CategoryDal {
  static async findCategoryById(id) {
    return await categoryModel.findOne({ _id: id });
  }
  static async findCategoryByName(name) {
    return await categoryModel.findOne({ name });
  }
  static async save(category) {
    return await categoryModel.create(category);
  }
  static async delete(id) {
    return await categoryModel.deleteOne({ _id: id });
  }
  static async all() {
    return await categoryModel.find({});
  }
  static async updateCategoryById(id, category) {
    return await categoryModel.findByIdAndUpdate(
      id,
      { $set: category },
      { new: true }
    );
  }
}
