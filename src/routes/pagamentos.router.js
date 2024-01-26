const { Router } = require("express");
const PagamentoController = require("../controller/PagamentoController");

const pagamentoRoutes = Router();

const pagamentoController = new PagamentoController();

pagamentoRoutes.post("/", pagamentoController.create);

module.exports = pagamentoRoutes;
