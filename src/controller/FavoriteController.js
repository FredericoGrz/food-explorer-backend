const knex = require("../database/knex");
const AppError = require("../Utils/AppError");
const appError = require("../Utils/AppError");

class FavoriteController {
  async index(req, res) {
    try {
      const { id: user_id } = req.user;
      const prato_id = req.query.prato_id;

      console.log(user_id);
      console.log(prato_id);
      const response = await knex("favorites")
        .where({ user_id, prato_id })
        .first();
      console.log(response);
      res.status(200).json(response);
    } catch (error) {
      throw new AppError(error.message);
    }
  }

  async favorite(req, res) {
    try {
      const { id: user_id } = req.user;
      const { prato_id, favorite } = req.body;

      const response = await knex("favorites")
        .where({ user_id, prato_id })
        .first();

      if (favorite && !response)
        await knex("favorites").insert({ user_id, prato_id });
      else if (!favorite)
        await knex("favorites").delete().where({ user_id, prato_id });

      res.status(200).json();
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

module.exports = FavoriteController;
