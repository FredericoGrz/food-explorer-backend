exports.up = (knex) => {
  return knex.schema.createTable("pedidopratos", (table) => {
    table.increments("id").primary();
    table
      .integer("pedido_id")
      .notNullable()
      .references("id")
      .inTable("pedidos")
      .onDelete("CASCADE");
    table
      .integer("prato_id")
      .notNullable()
      .references("id")
      .inTable("pratos")
      .onDelete("CASCADE");
    table.integer("quantidade").notNullable().defaultTo(1);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => knex.schema.dropTable("pedidopratos");
