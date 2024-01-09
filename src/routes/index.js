const { Router } = require("express");

const userRoutes = require("./users.router");
const sessionRoutes = require("./sessions.router");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/sessions", sessionRoutes);

module.exports = routes;
