import classes from "./ProductListWithCart.module.css";
import data from "./data/data.json";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

export type Item = {
	id: number;
	name: string;
	price: number;
	quantity: number;
};

type ShoppingCart = {
	item?: Item;
};

const ProductListWithCart = () => {
	const [shopppingCart, setShopppingCart] = useState<Item[]>([]);

	const addItem = (newItem: Item): void => {
		setShopppingCart((prevCart) => {
			const existingItem = prevCart.find((item) => item.id === newItem.id);

			if (existingItem) {
				return prevCart.map((item) => (item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item));
			}

			return [...prevCart, { ...newItem, quantity: 1 }];
		});
	};

	const removeItem = (id: number): void => {
		setShopppingCart((prevCart) =>
			prevCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)).filter((item) => item.quantity > 0)
		);
	};

	const removeAll = (id:number): void => {
		setShopppingCart((prevCart) => prevCart.filter(item => item.id !== id))
	}

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
			<Cart cart={shopppingCart} removeAll={removeAll}/>
		</div>
	);
};

export default ProductListWithCart;
