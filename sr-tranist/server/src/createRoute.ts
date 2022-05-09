import { Route } from "./models/route-schema";

export function createNewRoute(type: string, routeNumber: number) {
  const newRoute = new Route({
    type: type,
    routeNumber: routeNumber,
  }).then(() => console.log("New Route Created"));

  newRoute.save();
}
