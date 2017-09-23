import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';
import mocks from './mocks'

const typeDefs = `
type Numbers{
  id: Int
  digit1: Int
  digit2: Int
  sumOfNumbers:Int
}
type Query {
  numbers(digit1: Int, digit2: Int): Numbers
}
`;

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks });

export default schema;
