import { Knex } from "knex";

exports.up = function (knex: Knex): Promise<any> {
    return knex.schema.createTable('products', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('description');
        table.decimal('price', 10, 2).notNullable();
        table.integer('stock_quantity').notNullable();
        table.string('manufacturer');
        table.string('createdBy').notNullable();
        table.string('updatedBy');
        table.timestamp('createdDt').defaultTo(knex.fn.now());
        table.timestamp('updatedDt');
    });
};

exports.down = function (knex: Knex): Promise<any> {
    return knex.schema.dropTable('products');
};