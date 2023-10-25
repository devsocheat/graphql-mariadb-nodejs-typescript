import { gql } from 'apollo-server-express';
import graphReader from '../../core/graphReader';

const purchaseTypeDefs = gql`
    scalar Date
    
    ${graphReader("purchases.graphql")}

    input CreatePurchaseArgs {
        customer_id: Int!
        order_date: String!
        status: String!
        createdBy: String!
    }

    input UpdatePurchaseArgs {
        id: Int!
        customer_id: Int!
        order_date: String!
        status: String!
        updatedBy : String!
    }

    type Query {
        getPurchases: [Purchase]
        getPurchase(id: Int!): Purchase
    }

    type Mutation {
        createPurchase(input : CreatePurchaseArgs): Purchase
        updatePurchase(input : UpdatePurchaseArgs): Purchase
        deletePurchase(id: Int!): Boolean
    }
`;

export default purchaseTypeDefs;