import { APIError } from "../../shared/dto/error-response.js";
import { CategoryDal } from "./category.dal.js";

export class CategoryService {
  static async findCategoryById(id) {
    const data = await CategoryDal.findCategoryById(id).catch((e) => {});
    if (!data) throw new APIError("Category is not found!", 404);
    return data;
  }
  static async findCategoryByName(name) {
    return await CategoryDal.findCategoryByName(name);
  }
  static async save(category) {
    const data = await CategoryService.findCategoryByName(category.name);
    if (data) throw new APIError("Category name  is already in use", 409);
    return await CategoryDal.save(category);
  }
  static async delete(id) {
    await CategoryService.findCategoryById(id);

    return await CategoryDal.delete(id);
  }
  static async all() {
    return await CategoryDal.all();
  }
  static async updateCategoryById(id, category) {
    const data = await CategoryService.findCategoryByName(category.name);
    if (data) throw new APIError("Category name  is already in use", 409);
    await CategoryService.findCategoryById(id);
    return await CategoryDal.updateCategoryById(id, category);
  }
}
