export interface Part {
	category: string;
	image?: string;
	lengths?: string[];
	links?: {
		api?: string;
		robosource?: string;
		vex?: string;
	};
	locations?: {
		cabinet?: number;
		drawer: number;
		husky?: number;
	}[];
	name: string;
	description?: string;
}
