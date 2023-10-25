import { Knex } from "knex";

exports.up = function (knex: Knex): Promise<any> {
    return knex.schema.createTable('customers', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('phone').notNullable();
        table.string('createdBy').notNullable();
        table.string('updatedBy');
        table.timestamp('createdDt').defaultTo(knex.fn.now());
        table.timestamp('updatedDt');
    });
};

exports.down = function (knex: Knex): Promise<any> {
    return knex.schema.dropTable('customers');
};