/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable("merchants", function(table) {
            table.increments("id").primary();
            table.string("name", 255).notNullable();
            table.string("email", 255).notNullable();
            table.string("merchant_id", 255).notNullable();
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable("merchants");
};
