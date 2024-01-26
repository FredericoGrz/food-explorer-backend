const knex = require("../database/knex");
const AppError = require("../Utils/AppError");

class PagamentoController {
  async index(req, res) {
    try {
      const { id } = req.params;

      const pagamento = await knex("pagamentos").where({ id }).first();

      if (!pagamento) throw new AppError("Pedido nao encontrado", 401);

      res.status(200).json(pagamento);
    } catch (error) {
      console.log(error);
      throw new AppError(error.message);
    }
  }

  async create(req, res) {
    try {
      const { pedido_id } = req.body;

      const pagamento = await knex("pagamentos").where({ pedido_id }).first();

      if (pagamento) await knex("pagamentos").where({ pedido_id }).delete();

      const pratos = await knex("pedidopratos")
        .select(
          "pedidopratos.pedido_id",
          "pedidopratos.quantidade",
          "pratos.id",
          "pratos.preco"
        )
        .join("pratos", "pedidopratos.prato_id", "=", "pratos.id");

      let total = 0;
      for (const prato of pratos) {
        total += Number(prato.preco) * prato.quantidade;
      }

      total = parseFloat(total.toFixed(2));

      const [{ id, valor }] = await knex("pagamentos")
        .insert({
          pedido_id,
          valor: total,
          status: "Aguardando",
        })
        .returning("*");

      const qr_code = `http:localhost:3333/pagamentos/${id}`;

      res.status(201).json({ pagamento_id: id, total: valor, qr_code });
    } catch (error) {
      console.log(error);
      throw new AppError(error.message);
    }
  }
}

module.exports = PagamentoController;
