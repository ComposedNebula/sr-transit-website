import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import "reflect-metadata";
import { typeDefs } from "./typeDefs";
import { RouteResolver } from "./resolvers/route";
import { Connection, createConnection, DataSource } from "typeorm";
import { Route } from "./entities/Route";

const main = async () => {

  const schema = await buildSchema({
    resolvers: [RouteResolver],

  });

  const app = express();

  const server = new ApolloServer({
    typeDefs,
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log("Server ready at http://localhost:4000");
  });
};

main().catch((err) => console.log(err));

export const mongodbDataSource = new DataSource({
  type: "mongodb",
  url: "mongodb+srv://nbottari:Emerson2468@cluster0.sqjip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  // host: "localhost",
  // port: 27017,
  database: "test",
  entities: [
    Route
  ]
})
