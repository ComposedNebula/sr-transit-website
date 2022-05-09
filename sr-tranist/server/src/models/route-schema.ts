import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RouteSchema = new Schema({
  routeId: {
    type: Number,
    required: true,
  },
  routeName: {
    type: String,
    required: true,
  },
  routeNumber: {
    type: Number,
    required: true,
  },
});

export const Route = mongoose.model("sr-transit", RouteSchema);
