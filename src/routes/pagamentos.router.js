const { Router } = require("express");
const PagamentoController = require("../controller/PagamentoController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const pagamentoRoutes = Router();

const pagamentoController = new PagamentoController();

pagamentoRoutes.post("/", ensureAuthenticated, pagamentoController.create);
pagamentoRoutes.get("/finalizar/:pedido_id", pagamentoController.finalizar);

module.exports = pagamentoRoutes;
