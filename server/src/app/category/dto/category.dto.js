export class CategoryResponse {
  constructor(category) {
    this.id = category._id;
    this.name = category.name;
  }
}
