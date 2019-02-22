const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { MemcachedCache } = require('apollo-server-cache-memcached');
const path = require('path');

// Set our schema
const schema = require('./server/schema');

// Set our resolvers
const resolvers = require('./server/resolvers');

// Set our database model
const db = require('./server/models');

// Set our apollo server
const server = new ApolloServer({
  typeDefs: gql(schema),
  resolvers,
  persistedQueries: {
    cache: new MemcachedCache(
      ['memcached-server-1', 'memcached-server-2', 'memcached-server-3'],
      { retries: 10, retry: 10000 } // Options
    )
  },
  context: { db }
});

// Set up the express app
const app = express();

// Set up middleware
server.applyMiddleware({ app });

// // Connect our schema to our application
// app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

module.exports = app;
