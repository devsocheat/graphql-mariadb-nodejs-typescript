import { gql } from 'apollo-server-express';
import graphReader from '../../core/graphReader';

const productTypeDefs = gql`
    scalar Date
    
    ${graphReader("products.graphql")}

    input CreateProductArgs {
        title : String!, 
        description : String, 
        price : Float, 
        stock_quantity : Int,
        createdBy : String!
    }

    input UpdateProductArgs {
        id : Int!, 
        title : String!, 
        description : String, 
        price : Float, 
        stock_quantity : Int,
        updatedBy : String!
    }

    type Query {
        getProducts: [Product]
        getProduct(id: Int!): Product
    }

    type Mutation {
        createProduct(input : CreateProductArgs): Product
        updateProduct(input : UpdateProductArgs): Product
        deleteProduct(id: Int!): Boolean
    }
`;

//createProduct(title: String!, description: String, price: Float!, stock_quantity: Int!, createdBy : String!): Product
export default productTypeDefs;