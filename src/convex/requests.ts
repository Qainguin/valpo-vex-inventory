// convex/requests.ts
import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const createRequest = mutation({
	args: {
		firstName: v.string(),
		lastName: v.string(),
		reason: v.string(),
		email: v.string()
	},
	handler: async (ctx, args) => {
		const requestId = await ctx.db.insert('requests', {
			name: { first: args.firstName, last: args.lastName },
			reason: args.reason,
			email: args.email
		});
		return requestId;
	}
});

export const get = query({
	args: {},
	handler: async (ctx) => {
		const tasks = await ctx.db.query('requests').collect();
		return tasks;
	}
});
