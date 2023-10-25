import { Knex } from "knex";

exports.up = function (knex: Knex): Promise<any> {
    return knex.schema.createTable('purchases', (table) => {
        table.increments('id').primary();
        table.integer('customer_id').unsigned().notNullable();
        table.foreign('customer_id').references('id').inTable('customers');
        table.timestamp('order_date').notNullable();
        table.string('status').notNullable();
        table.string('createdBy').notNullable();
        table.string('updatedBy');
        table.timestamp('createdDt').defaultTo(knex.fn.now());
        table.timestamp('updatedDt'); 
    });
};

exports.down = function (knex: Knex): Promise<any> {
    return knex.schema.dropTable('purchases');
};