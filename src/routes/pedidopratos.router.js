const { Router } = require("express");
const PedidoPratosController = require("../controller/PedidoPratosController");

const pedidoPratosRoutes = Router();
const pedidoPratosController = new PedidoPratosController();

pedidoPratosRoutes.post("/", pedidoPratosController.create);

module.exports = pedidoPratosRoutes;
