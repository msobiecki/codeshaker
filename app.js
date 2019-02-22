const express = require('express');
const path = require('path');
const graphqlHTTP = require('express-graphql');

// Set our schema
const schema = require('./server/schema');

// Set up the express app
const app = express();

// Connect our schema to our application
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

module.exports = app;
