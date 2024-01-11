const { Router } = require("express");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRoutes = require("./users.router");
const sessionRoutes = require("./sessions.router");
const categoryRoutes = require("./categories.router");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/sessions", sessionRoutes);
routes.use("/categories", ensureAuthenticated, categoryRoutes);

module.exports = routes;
