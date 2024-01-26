const knex = require("../database/knex");
const AppError = require("../Utils/AppError");

class PedidoController {
  async index(req, res) {
    try {
      const user_id = req.user.id;

      const pedidos = await knex("pedidos").where({ user_id });

      res.status(200).json(pedidos);
    } catch (error) {
      console.log(error);
      throw new AppError(error.message);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const pedido = await knex("pedidos").where({ id }).first();

      if (pedido) res.status(200).json(pedido);
      else res.status(404).json();
    } catch (error) {
      console.log(error);
      throw new AppError(error.message);
    }
  }

  async create(req, res) {
    try {
      const user_id = req.user.id;
      const { pratos, status } = req.body;

      const [{ id: pedido_id }] = await knex("pedidos")
        .insert({
          user_id,
          status: status || "Aberto",
        })
        .returning("id");
      if (pedido_id && pratos) {
        for (const prato of pratos) {
          await knex("pedidopratos").insert({
            pedido_id,
            prato_id: prato.id,
            quantidade: prato.quantidade,
          });
        }
      }

      res.status(201).json({ id: pedido_id });
    } catch (error) {
      console.log(error);
      throw new AppError(error.message);
    }
  }
}

module.exports = PedidoController;
