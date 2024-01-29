const knex = require("../database/knex");
const AppError = require("../Utils/AppError");

class PedidoPratosController {
  async create(req, res) {
    try {
      const { pedido_id, prato } = req.body;

      if (pedido_id && prato) {
        let pedido_prato = await knex("pedidopratos")
          .where({ pedido_id, prato_id: prato.id })
          .first();

        if (pedido_prato) {
          pedido_prato.quantidade = pedido_prato.quantidade + prato.quantidade;

          await knex("pedidopratos")
            .update(pedido_prato)
            .where({ id: pedido_prato.id });
        } else {
          await knex("pedidopratos").insert({
            pedido_id,
            prato_id: prato.id,
            quantidade: prato.quantidade,
          });
        }

        res.status(200).json();
      } else {
        res.status(400).json();
      }
    } catch (error) {
      console.log(error);
      throw new AppError(error.message);
    }
  }

  async delete(req, res) {
    try {
      const { pedido_id, prato_id } = req.body;

      if (pedido_id && prato_id) {
        await knex("pedidopratos").where({ pedido_id, prato_id }).delete();
      }
      res.status(200).json();
    } catch (error) {
      console.log(error);
      throw new AppError(error.message);
    }
  }
}

module.exports = PedidoPratosController;
