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
			email: args.email,
			state: ''
		});
		return requestId;
	}
});

export const handleRequest = mutation({
	args: {
		state: v.string(),
		requestId: v.id('requests')
	},
	handler: async (ctx, args) => {
		await ctx.db.patch(args.requestId, { state: args.state });
	}
});

export const get = query({
	args: {
		email: v.optional(v.string())
	},
	handler: async (ctx, args) => {
		if (args.email) {
			const tasks = await ctx.db
				.query('requests')
				.filter((q) => q.eq(q.field('email'), args.email))
				.order('desc')
				.collect();
			return tasks;
		} else {
			const tasks = await ctx.db.query('requests').collect();
			return tasks;
		}
	}
});
