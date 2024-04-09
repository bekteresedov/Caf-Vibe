import { ApiResponse } from "../../shared/dto/api-response.js";
import { CategoryService } from "./category.service.js";
import { CategoryResponse } from "./dto/category.dto.js";

export class CategoryController {
  static async findCategoryById(request, response) {
    const data = await CategoryService.findCategoryById(request.params.id);
    return new ApiResponse(
      new CategoryResponse(data),
      "Category find  successfully"
    ).success(response);
  }
  static async save(request, response) {
    const data = await CategoryService.save(request.body);
    return new ApiResponse(
      new CategoryResponse(data),
      "Category save successfully"
    ).success(response);
  }
  static async delete(request, response) {
    await CategoryService.delete(request.params.id);
    return new ApiResponse(null, "Category delete successfully").success(
      response
    );
  }
  static async all(request, response) {
    const data = await CategoryService.all();
    return new ApiResponse(
      data.map((e) => new CategoryResponse(e)),
      "Category list successfully"
    ).success(response);
  }
  static async updateCategoryById(request, response) {
    const data = await CategoryService.updateCategoryById(
      request.params.id,
      request.body
    );
    return new ApiResponse(
      new CategoryResponse(data),
      "Category update successfully"
    ).success(response);
  }
}
