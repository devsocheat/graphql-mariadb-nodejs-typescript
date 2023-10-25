import mapColumn from "../../core/columnMapper";
import knex from "../../db/knex";

const table = "purchases"
const purchaseResolvers = {
    Query: {
        getPurchases: async () => {
            try {
                const columns = mapColumn("purchases.graphql")
                return await knex(table).select(columns)
            } catch (error) {
                console.error('Error fetching purchases:', error);
                throw new Error('Unable to fetch purchases');
            }
        },
        getPurchase: async (_: any, { id }: { id: number }) => {
            try {
                return await knex(table).where({ id }).first();
            } catch (error) {
                console.error('Error fetching purchase:', error);
                throw new Error('Unable to fetch the purchase');
            }
        },
    },
    Mutation: {
        createPurchase: async (_ : any, args : any) => {
            const { input } = args;
            try {
                const [id] = await knex(table).insert({
                    ...input
                });
                return await knex(table).where({ id }).first();
            } catch (error) {
                console.error('Error creating purchase:', error);
                throw new Error('Unable to create the purchase');
            }
        },
        updatePurchase: async (_ : any, args : any) => {
            const { id, ...data } = args.input;
            try {
                await knex(table)
                    .where({ id })
                    .update({
                       ...data
                    });
                return await knex(table).where({ id }).first();
            } catch (error) {
                console.error('Error updating purchase:', error);
                throw new Error('Unable to update the purchase');
            }
        },
        deletePurchase: async (_ : any, { id  } : {id : number}) => {
            try {
                await knex(table).where({ id }).del();
                return true;
            } catch (error) {
                console.error('Error deleting purchase:', error);
                throw new Error('Unable to delete the purchase');
            }
        },
    },
};

export default purchaseResolvers; 