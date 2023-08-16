const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID
        
    }
    type User {
        _id: ID
              
    }
    type Query {
        me: User
    }
    type Auth {
    token: ID!
    user: User
    }
  
}
`;

module.exports = typeDefs;

