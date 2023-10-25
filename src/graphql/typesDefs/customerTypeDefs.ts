import { gql } from 'apollo-server-express';
import graphReader from '../../core/graphReader';

const customerTypeDefs = gql`
    scalar Date
    
    ${graphReader("customers.graphql")}

    input CreateCustomerArgs {
        name : String!, 
        phone : String!, 
        createdBy : String!
    }

    input UpdateCustomerArgs {
        id : Int!, 
        name : String, 
        phone : String, 
        updatedBy : String!
    }

    type Query {
        getCustomers: [Customer]
        getCustomer(id: Int!): Customer
    }

    type Mutation {
        createCustomer(input : CreateCustomerArgs): Customer
        updateCustomer(input : UpdateCustomerArgs): Customer
        deleteCustomer(id: Int!): Boolean
    }
`;

//createProduct(title: String!, description: String, price: Float!, stock_quantity: Int!, createdBy : String!): Product
export default customerTypeDefs;