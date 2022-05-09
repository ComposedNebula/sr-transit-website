// import { Cat } from "./models/Cat";

export const resolvers = {
  Query: {
    hello: () => "hello",
  },
  // Mutation: {
  //   createCat: (_: any, { name }: any) => {
  //     const kitty = new Cat({ name });
  //     return kitty.save;
  //   },
  // },
};
