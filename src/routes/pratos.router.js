const { Router } = require("express");
const PratoController = require("../controller/PratoController");
const ensureIsAdmin = require("../middlewares/ensureIsAdmin");

const pratoRoutes = Router();
const pratoController = new PratoController();

pratoRoutes.get("/", pratoController.index);
pratoRoutes.get("/:id", pratoController.show);

pratoRoutes.post("/", ensureIsAdmin, pratoController.create);
pratoRoutes.put("/:id", ensureIsAdmin, pratoController.update);

module.exports = pratoRoutes;
