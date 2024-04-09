import express from "express";
import { isAdmin } from "../../core/middleware/auth-middleware.js";
import { categoryValidationSchemaMiddleware } from "./validation/category.middleware.js";
import { CategoryController } from "./category.controller.js";
const categoryRouter = express.Router();
const mainPath = "/category";

categoryRouter.post(
  `${mainPath}/add`,
  isAdmin,
  categoryValidationSchemaMiddleware,
  CategoryController.save
);

categoryRouter.get(`${mainPath}/get/:id`, CategoryController.findCategoryById);
categoryRouter.get(`${mainPath}/all`, CategoryController.all);
categoryRouter.delete(
  `${mainPath}/delete/:id`,
  isAdmin,
  CategoryController.delete
);
categoryRouter.patch(
  `${mainPath}/update/:id`,
  isAdmin,
  categoryValidationSchemaMiddleware,
  CategoryController.updateCategoryById
);

export default categoryRouter;
