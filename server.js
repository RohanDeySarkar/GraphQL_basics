import {ApolloServer} from "apollo-server-express";
import express from 'express';

import {typeDefs} from './Schema/TypeDefs.js';
import {resolvers} from './Schema/Resolvers.js';

const app = express();
const port = process.env.PORT || 8001;

const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({app});

app.listen(port, () => console.log(`listening on localhost: ${port}`));