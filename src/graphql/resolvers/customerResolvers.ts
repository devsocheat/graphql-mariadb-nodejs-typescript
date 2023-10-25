import mapColumn from "../../core/columnMapper";
import knex from "../../db/knex";

const table = "customers"
const customerResolvers = {
    Query: {
        getCustomers: async () => {
            try {
                const columns = mapColumn("customers.graphql")
                return await knex(table).select(columns)
            } catch (error) {
                console.error('Error fetching customers:', error);
                throw new Error('Unable to fetch customers');
            }
        },
        getCustomer: async (_: any, { id }: { id: number }) => {
            try {
                return await knex(table).where({ id }).first();
            } catch (error) {
                console.error('Error fetching customer:', error);
                throw new Error('Unable to fetch the customer');
            }
        },
    },
    Mutation: {
        createCustomer: async (_ : any, args : any) => {
            const { input } = args;
            try {
                const [id] = await knex(table).insert({
                    ...input
                });
                return await knex(table).where({ id }).first();
            } catch (error) {
                console.error('Error creating customer:', error);
                throw new Error('Unable to create the customer');
            }
        },
        updateCustomer: async (_ : any, args : any) => {
            const { id, ...data } = args.input;
            try {
                await knex(table)
                    .where({ id })
                    .update({
                       ...data
                    });
                return await knex(table).where({ id }).first();
            } catch (error) {
                console.error('Error updating customer:', error);
                throw new Error('Unable to update the customer');
            }
        },
        deleteCustomer: async (_ : any, { id  } : {id : number}) => {
            try {
                await knex(table).where({ id }).del();
                return true;
            } catch (error) {
                console.error('Error deleting customer:', error);
                throw new Error('Unable to delete the customer');
            }
        },
    },
};

export default customerResolvers; 