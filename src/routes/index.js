const { Router } = require("express");
const express = require("express");
const uploadConfig = require("../configs/upload");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRoutes = require("./users.router");
const sessionRoutes = require("./sessions.router");
const categoryRoutes = require("./categories.router");
const pratosRoutes = require("./pratos.router");
const imageUploadRoute = require("./imageUpload.router");
const favoriteRoutes = require("./favorites.router");
const pedidoRoutes = require("./pedidos.router");
const pedidoPratosRoutes = require("./pedidopratos.router");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/sessions", sessionRoutes);
routes.use("/categories", ensureAuthenticated, categoryRoutes);
routes.use("/pratos", ensureAuthenticated, pratosRoutes);
routes.use("/upload", imageUploadRoute);
routes.use("/favorites", ensureAuthenticated, favoriteRoutes);
routes.use("/pedidos", ensureAuthenticated, pedidoRoutes);
routes.use("/pedidopratos", ensureAuthenticated, pedidoPratosRoutes);
routes.use(
  "/files",
  ensureAuthenticated,
  express.static(uploadConfig.UPLOADS_FOLDER)
);

module.exports = routes;
