import { useState } from "react";
import classes from "./Button.module.css";
import addToCartIcon from "../../assets/icons/icon-add-to-cart.svg";
import addIcon from "../../assets/icons/AddIcon.svg";
import subtractIcon from "../../assets/icons/SubtractIcon.svg";
import { type Item } from "../../utils/types";

interface ButtonProps {
	image?: string;
	text?: string;
	addItem: (item: Item) => void;
	removeItem: (id: number) => void;
	removeAll: (id: number) => void;
	product: Item;
}

const Button = ({ product, addItem, removeItem, removeAll }: ButtonProps) => {
	const [focused, setFocused] = useState(false);
	const [quantity, setQuantity] = useState(1);

	const handleIncrese = () => {
		console.log({ quantity }, { focused });
		addItem(product);
		if (quantity >= 1 && focused) {
			setQuantity((prevState) => prevState + 1);
		}
	};

	const handleDecrease = () => {
		console.log();
		if (quantity > 1) {
			setQuantity((prevState) => prevState - 1);
			removeItem(product.id);
		} else if (quantity == 1) {
			setQuantity(1);
			removeAll(product.id);
			setFocused(false);
		}
	};

	const handleFocus = () => {
		handleIncrese();
		setFocused(true);
	};

	return (
		<div tabIndex={0} className={classes.wrapper} onFocus={() => handleFocus()} onBlur={() => setFocused(false)}>
			{!focused ? (
				<button className={classes["inactive-button"]} onClick={handleIncrese}>
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
