import { Knex } from "knex";

exports.up = function (knex: Knex): Promise<any> {
    return knex.schema.createTable('purchase_items', (table) => {
        table.increments('id').primary();
        table.integer('purchase_id').unsigned().notNullable();
        table.integer('product_id').unsigned().notNullable();
        table.integer('quantity').notNullable();
        table.decimal('price_at_purchase', 10, 2).notNullable();
        table.string('createdBy').notNullable();
        table.string('updatedBy');
        table.timestamp('createdDt').defaultTo(knex.fn.now());
        table.timestamp('updatedDt');
        table.foreign('purchase_id').references('id').inTable('purchases');
        table.foreign('product_id').references('id').inTable('products');
    });
};

exports.down = function (knex: Knex): Promise<any> {
    return knex.schema.dropTable('purchase_items');
};