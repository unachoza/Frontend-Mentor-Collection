import type { Item } from "./types";
export const getTotalQuantity = (cart: Item[]): number => {
	return cart.reduce((total, item) => total + item.quantity, 0);
};

export const getTotal = (cart: Item[]): number => {
	return cart.reduce((total, item) => total + item.quantity * item.price, 0);
};
