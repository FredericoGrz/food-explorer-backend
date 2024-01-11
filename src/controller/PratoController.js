const knex = require("../database/knex");
const AppError = require("../Utils/AppError");

class PratoController {
  async index(req, res) {
    try {
      let pratos = await knex("pratos").orderBy("created_at", "desc");

      for (const prato of pratos) {
        prato.ingredientes = prato.ingredientes.split(";");
      }

      res.status(200).json(pratos);
    } catch (error) {
      throw new AppError(error.message);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      let prato = await knex("pratos").where({ id }).first();

      if (!prato) throw new AppError("Prato não encontrado");

      // Devolve os ingredientes em formato de array
      prato.ingredientes = prato.ingredientes.split(";");

      res.status(200).json(prato);
    } catch (error) {
      throw new AppError(error.message);
    }
  }

  async create(req, res) {
    try {
      let { name, category_id, ingredientes, preco, description, imagem } =
        req.body;
      ingredientes = ingredientes.join(";");
      const allDataRequiredAvailable = name && category_id && preco;

      if (!allDataRequiredAvailable)
        throw new AppError("Por favor preencha todos os campos necessários!");

      await knex("pratos").insert({
        name,
        category_id,
        ingredientes,
        preco,
        description,
        imagem,
      });

      res.status(201).json();
    } catch (error) {
      throw new AppError(error.message);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      let { name, category_id, ingredientes, preco, description, imagem } =
        req.body;

      let prato = await knex("pratos").where({ id }).first();

      if (!prato) throw new AppError("Prato não encontrado");

      prato.name = name === undefined ? prato.name : name;
      prato.preco = preco === undefined ? prato.preco : preco;
      prato.imagem = imagem === undefined ? prato.imagem : imagem;
      prato.description =
        description === undefined ? prato.description : description;
      prato.ingredientes =
        ingredientes === undefined
          ? prato.ingredientes
          : ingredientes.join(";");
      prato.category_id =
        category_id === undefined ? prato.category_id : category_id;

      prato.updated_at = knex.fn.now();

      await knex("pratos").update(prato).where({ id });

      res.status(200).json();
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

module.exports = PratoController;
