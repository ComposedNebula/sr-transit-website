import {
  Arg,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { InsertResult } from "typeorm";
import { mongodbDataSource } from "..";
import { Route } from "../entities/Route";

@ObjectType()
class RouteResponse {
  @Field(() => Route, { nullable: true })
  route?: Route;
}

@Resolver()
export class RouteResolver {
  @Query(() => RouteResponse)
  async getRoute(
    @Arg("routeId") routeId: number
  ): Promise<RouteResponse | string> {
    const route = await mongodbDataSource.manager.findOne(Route, {
      where: {
        id: routeId
      }
    });
    if (!route) {
      return "No route found with specified routeId";
    }

    console.log(route);
    return { route };
  }

  @Mutation(() => String)
  async createRoute(
    @Arg("routeId") routeId: number,
    @Arg("routeNumber") routeNumber: number,
    @Arg("routeName") routeName: string
  ): Promise<InsertResult | string> {
    const route = await mongodbDataSource.manager.insert(Route, {
      id: routeId,
      name: routeName,
      number: routeNumber,
    });

    if (!route) {
      return "Error in inserting new route into database";
    }

    return "Success";
  }
}
