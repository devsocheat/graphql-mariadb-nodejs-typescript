import productResolvers from "./productResolvers";
import customerResolvers from "./customerResolvers";
import purchaseResolvers from "./purchaseResolvers";
const resolvers = {
    Query : {
        ...productResolvers.Query,
        ...customerResolvers.Query,
        ...purchaseResolvers.Query
    },
    Mutation: {
        ...productResolvers.Mutation,
        ...customerResolvers.Mutation,
        ...purchaseResolvers.Mutation
    }
}

export default resolvers;