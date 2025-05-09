import { query } from './_generated/server';

export const get = query({
	args: {},
	handler: async (ctx) => {
		const tasks = await ctx.db.query('parts').collect();
		return tasks.map((task) => ({ ...task, assigner: 'tom' }));
	}
});
