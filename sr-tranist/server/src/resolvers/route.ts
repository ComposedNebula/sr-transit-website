import { ProjectionFields } from "mongoose";
import {
  Arg,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { Route as RouteSchema } from "../models/route-schema";

@ObjectType()
class Route {
  @Field(() => [Object])
  objectId!: Object[];

  @Field()
  id!: number;

  @Field()
  name!: string;

  @Field()
  number!: number;

  @Field()
  v!: number;
}

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
    const route = await RouteSchema.findOne({ routeId: routeId });
    if (!route) {
      return "No route found with specified routeId";
    }

    console.log(typeof route._id);
    return { route };
  }

  @Mutation(() => String)
  async createRoute(
    @Arg("routeId") routeId: number,
    @Arg("routeNumber") routeNumber: number,
    @Arg("routeName") routeName: string
  ): Promise<void | string> {
    const route = await RouteSchema.insertMany({
      routeId: routeId,
      routeName: routeName,
      routeNumber: routeNumber,
    });

    if (!route) {
      return "Error in inserting new route into database";
    }

    return "Success";
  }
}
