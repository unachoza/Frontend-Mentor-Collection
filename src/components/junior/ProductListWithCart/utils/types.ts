export type Images = {
	desktop: string;
	tablet: string;
	mobile: string;
	thumbnail: string;
};

export type Item = {
	id: number;
	name: string;
	price: number;
	quantity: number;
	image: Images;
};

export type ProductType = {
	id: number;
	image: {
		thumbnail: string;
		mobile: string;
		tablet: string;
		desktop: string;
	};
	name: string;
	category: string;
	price: number;
};
