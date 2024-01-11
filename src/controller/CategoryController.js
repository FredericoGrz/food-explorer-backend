const knex = require("../database/knex");
const AppError = require("../Utils/AppError");

class CategoryController {
  async index(req, res) {
    try {
      let categories = await knex("categories").orderBy("created_at", "desc");

      res.status(200).json(categories);
    } catch (error) {
      throw new AppError(error.message);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const category = await knex("categories").where({ id }).first();

      if (!category) throw new AppError("Categoria não encontrada");

      res.status(200).json(category);
    } catch (error) {
      throw new AppError(error.message);
    }
  }

  async create(req, res) {
    try {
      const { name, description } = req.body;

      if (!name)
        throw new AppError("Por favor preencha todos os campos necessários!");

      await knex("categories").insert({ name, description });

      res.status(201).json();
    } catch (error) {
      throw new AppError(error.message);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, description } = req.body;

      if (!name)
        throw new AppError("Por favor preencha todos os campos necessários!");

      const category = await knex("categories").where({ id }).first();

      if (!category) throw new AppError("Categoria não encontrada");

      category.name = name;
      category.description =
        description === undefined ? category.description : description;
      category.updated_at = knex.fn.now();

      await knex("categories").update(category).where({ id });

      res.status(200).json();
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

module.exports = CategoryController;
