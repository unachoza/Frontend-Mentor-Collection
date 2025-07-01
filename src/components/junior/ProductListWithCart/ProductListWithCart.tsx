import classes from "./ProductListWithCart.module.css";
import data from "./data/data.json";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

export type Item = {
	id: number;
	name: string;
	price: number;
	quantity?: number;
};

const ProductListWithCart = () => {
	const [shopppingCart, setShopppingCart] = useState<Item[]>([]);

	const addItem = (item: Item): void => {
		const { id, name, price } = item;
		console.log("added", name);
		//if item is in shopping cart increase quantity,
		//else add new item
		// shopppingCart.findIndex((item) => item.id == id);
		const newItems = [
			...shopppingCart,
			{
				id,
				name,
				price,
				quantity: 1,
			},
		];
		setShopppingCart(newItems);
	};

	const removeItem = (id: number): void => {
		const updatedItems = shopppingCart.filter((item) => item.id !== id);
		setShopppingCart(updatedItems);
	};

	return (
		<div className={classes.main}>
			<div className={classes["product-list-container"]}>
				<h1 className={classes.title}>Desserts</h1>
				<div className={classes["product-list"]}>
					{data.map((product) => (
						<Product key={product.id} productInfo={product} addItem={addItem} removeItem={removeItem} />
					))}
				</div>
			</div>
			<Cart cart={shopppingCart} />
		</div>
	);
};

export default ProductListWithCart;
