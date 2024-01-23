const { Router } = require("express");
const CategoryController = require("../controller/CategoryController");
const ensureIsAdmin = require("../middlewares/ensureIsAdmin");

const categoryRoutes = Router();
const categoryController = new CategoryController();

categoryRoutes.get("/", categoryController.index);
categoryRoutes.get("/:id", categoryController.show);

categoryRoutes.post("/", ensureIsAdmin, categoryController.create);
categoryRoutes.put("/:id", ensureIsAdmin, categoryController.update);
categoryRoutes.delete("/:id", ensureIsAdmin, categoryController.delete);

module.exports = categoryRoutes;
