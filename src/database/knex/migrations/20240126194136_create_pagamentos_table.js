exports.up = (knex) => {
  return knex.schema.createTable("pagamentos", (table) => {
    table.increments("id").primary();
    table.string("tipo");
    table
      .integer("pedido_id")
      .notNullable()
      .references("id")
      .inTable("pedidos")
      .onDelete("CASCADE");
    table.decimal("valor").notNullable();
    table.string("status").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => knex.schema.dropTable("pagamentos");
