exports.up = (knex) => {
  return knex.schema.createTable("favorites", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("prato_id")
      .notNullable()
      .references("id")
      .inTable("pratos")
      .onDelete("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => knex.schema.dropTable("favorites");
