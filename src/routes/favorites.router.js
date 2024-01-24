const { Router } = require("express");
const FavoriteController = require("../controller/FavoriteController");

const favoriteRoutes = Router();
const favoriteController = new FavoriteController();

favoriteRoutes.get("/", favoriteController.index);
favoriteRoutes.post("/", favoriteController.favorite);

module.exports = favoriteRoutes;
