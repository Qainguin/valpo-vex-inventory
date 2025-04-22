// place files you want to import through the `$lib` alias in this folder.
export interface Part {
	name: string;
	image?: string;
	lengths?: Array<string>;
	category: string;
	links?: { robosource?: string; vex: string };
	locations?: Array<Location>;
}

export interface Location {
	cabinet?: number;
	husky?: number;
	drawer?: number;
}
