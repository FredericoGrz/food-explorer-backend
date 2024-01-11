const { Router } = require("express");
const PratoController = require("../controller/PratoController");

const pratoRoutes = Router();
const pratoController = new PratoController();

pratoRoutes.get("/", pratoController.index);
pratoRoutes.get("/:id", pratoController.show);

pratoRoutes.post("/", pratoController.create);
pratoRoutes.put("/:id", pratoController.update);

module.exports = pratoRoutes;
