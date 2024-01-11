exports.up = (knex) => {
  return knex.schema.createTable("pratos", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("imagem").notNullable();
    table
      .integer("category_id")
      .notNullable()
      .references("id")
      .inTable("categories")
      .onDelete("CASCADE");
    table.string("ingredientes");
    table.decimal("preco", 10, 2).notNullable();
    table.string("description");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => knex.schema.dropTable("pratos");
