import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	parts: defineTable({
		category: v.string(),
		description: v.optional(v.string()),
		image: v.optional(v.string()),
		lengths: v.optional(v.array(v.string())),
		links: v.optional(
			v.object({
				api: v.optional(v.string()),
				robosource: v.optional(v.string()),
				vex: v.optional(v.string())
			})
		),
		locations: v.optional(
			v.array(
				v.object({
					cabinet: v.optional(v.float64()),
					drawer: v.float64(),
					husky: v.optional(v.float64())
				})
			)
		),
		name: v.string()
	}),
	requests: defineTable({
		email: v.string(),
		name: v.object({ first: v.string(), last: v.string() }),
		reason: v.string()
	})
});
