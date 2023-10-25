import { gql } from 'apollo-server-express';
import graphReader from '../../core/graphReader';

const purchaseTypeDefs = gql`
    scalar Date
    
    ${graphReader("purchases.graphql")}
    ${graphReader("purchaseItems.graphql")}

    input PurchaseItemArgs {
        product_id: Int!
        quantity: Int!
        price_at_purchase: Float!
        createdBy: String!
    }

    input MakePurchaseArgs {
        customer_id: Int!
        order_date: String!
        status: String!
        createdBy: String!
        items : [PurchaseItemArgs]!
    }

    type Query {
        getPurchases: [Purchase]
        getPurchase(id: Int!): Purchase
    }

    type Mutation {
        makePurchase(input : MakePurchaseArgs): Purchase
    }
`;

export default purchaseTypeDefs;