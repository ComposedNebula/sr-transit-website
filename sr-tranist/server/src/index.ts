import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { buildSchema } from "type-graphql";
import "reflect-metadata";
import { typeDefs } from "./typeDefs";
import { RouteResolver } from "./resolvers/route";

const main = async () => {
  const schema = await buildSchema({
    resolvers: [RouteResolver],
  });

  const app = express();

  await mongoose
    .connect(
      "mongodb+srv://nbottari:Emerson2468@cluster0.sqjip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(() => console.log("connected to db"));

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

export const mng = mongoose;
