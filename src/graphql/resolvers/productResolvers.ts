import mapColumn from "../../core/columnMapper";
import knex from "../../db/knex";

const table = "products"
const productResolvers = {
    Query: {
        getProducts: async () => {
            try {
                const columns = mapColumn("products.graphql")
                return await knex(table).select(columns)
            } catch (error) {
                console.error('Error fetching products:', error);
                throw new Error('Unable to fetch products');
            }
        },
        getProduct: async (_: any, { id }: { id: number }) => {
            try {
                return await knex(table).where({ id }).first();
            } catch (error) {
                console.error('Error fetching product:', error);
                throw new Error('Unable to fetch the product');
            }
        },
    },
    Mutation: {
        createProduct: async (_ : any, args : any) => {
            const { input } = args;
            try {
                const [id] = await knex(table).insert({
                    ...input
                });
                return await knex(table).where({ id }).first();
            } catch (error) {
                console.error('Error creating product:', error);
                throw new Error('Unable to create the product');
            }
        },
        updateProduct: async (_ : any, args : any) => {
            const { id, ...data } = args.input;
            try {
                await knex(table)
                    .where({ id })
                    .update({
                       ...data
                    });
                return await knex(table).where({ id }).first();
            } catch (error) {
                console.error('Error updating product:', error);
                throw new Error('Unable to update the product');
            }
        },
        deleteProduct: async (_ : any, { id  } : {id : number}) => {
            try {
                await knex(table).where({ id }).del();
                return true;
            } catch (error) {
                console.error('Error deleting product:', error);
                throw new Error('Unable to delete the product');
            }
        },
    },
};

export default productResolvers; 