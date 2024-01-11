const { Router } = require("express");
const CategoryController = require("../controller/CategoryController");

const categoryRoutes = Router();
const categoryController = new CategoryController();

categoryRoutes.get("/", categoryController.index);
categoryRoutes.get("/:id", categoryController.show);

categoryRoutes.post("/", categoryController.create);
categoryRoutes.put("/:id", categoryController.update);

module.exports = categoryRoutes;
