import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  tasks: defineTable({
    isCompleted: v.any(),
    text: v.any(),
  }),

  data: defineTable({
    isCompleted: v.boolean(),
    something: v.string(),
    text: v.boolean(),
  }),
});