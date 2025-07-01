import { useState } from "react";
import classes from "./Button.module.css";
import addToCartIcon from "/assets/ProductListWithCart/images/icon-add-to-cart.svg";
import carbonNeutralIcon from "/assets/ProductListWithCart/images/icon-carbon-neutral.svg";
import addIcon from "../../assets/AddIcon.svg";
import subtractIcon from "../../assets/SubtractIcon.svg";
import { type Item } from "../../ProductListWithCart";
import { type Product } from "../Product/Product";

interface ButtonProps {
	image?: string;
	text?: string;
	addItem: (item: Item) => void;
	removeItem: (id: number) => void;
	product: Item;
}

const Button = ({ product, addItem, removeItem }: ButtonProps) => {
	const [focused, setFocused] = useState(false);
	const [quantity, setQuantity] = useState(1);

	const handleIncrese = () => {
		addItem(product);
		setQuantity((prevState) => prevState + 1);
	};

	const handleDecrease = () => {
		if (quantity > 1) {
			setQuantity((prevState) => prevState - 1);
		} else if (quantity == 1) {
			setQuantity(1);
			//if quantity is 1, button needs to return to inactive state
			setFocused(false);
		}
	};

	return (
		<div tabIndex={0} className={classes.wrapper} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
			{!focused ? (
				<button className={classes["inactive-button"]}>
					<span>
						<img src={addToCartIcon} alt="add to cart" />
					</span>
					Add to Cart
				</button>
			) : (
				<button className={classes["quantity-button"]}>
					<span role="button" onClick={handleDecrease}>
						<img src={subtractIcon} alt="more" />
					</span>
					{quantity}
					<span role="button" onClick={handleIncrese}>
						<img src={addIcon} alt="less" />
					</span>
				</button>
			)}
		</div>
	);
};

export default Button;
