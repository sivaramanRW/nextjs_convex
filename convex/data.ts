import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("data").collect();
  },
});

export const getData = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("data").collect();
  },
});