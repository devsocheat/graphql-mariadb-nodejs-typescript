import { mergeTypeDefs } from '@graphql-tools/merge';
import productTypeDefs from './productTypeDefs';
import customerTypeDefs from './customerTypeDefs';
import purchaseTypeDefs from './purchaseTypeDefs';

const typeDefs= mergeTypeDefs([
    productTypeDefs, 
    customerTypeDefs, 
    purchaseTypeDefs
])

export default typeDefs;