interface Location {
	cabinet?: number;
	husky?: number;
	drawer?: number;
}

interface Part {
	name: string;
	image?: string;
	lengths?: Array<string>;
	category: string;
	locations?: Array<Location>;
}

import type { PageLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(`/api/parts`);
	const item: Part[] = await res.json();

	return { item };
};
