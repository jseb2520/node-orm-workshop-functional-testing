"use strict";
exports.up = knex =>
  knex.schema.createTable("contacts", table => {
    table.increments("id").primary();
    table.string("firstName");
    table.string("lastName");
    table
      .string("emailAddress")
      .notNullable();
      .unique()
  });

exports.down = knex => knex.schema.dropTable("contacts");