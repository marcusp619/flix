var express = require('express');
var cors = require('cors');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
const schema = require('./schema');

var root = { hello: () => 'Hello world!' };

var app = express();
app.use('/graphql', cors(), graphqlHTTP({
  schema,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));