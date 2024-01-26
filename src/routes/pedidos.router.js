const { Router } = require("express");
const PedidoController = require("../controller/PedidoController");

const pedidoRoutes = Router();
const pedidoController = new PedidoController();

pedidoRoutes.get("/", pedidoController.index);
pedidoRoutes.get("/:id", pedidoController.show);

pedidoRoutes.post("/", pedidoController.create);

module.exports = pedidoRoutes;
