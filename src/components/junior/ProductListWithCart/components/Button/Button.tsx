import { useState } from "react";
import classes from "./Button.module.css";
import addToCartIcon from "/assets/ProductListWithCart/images/icon-add-to-cart.svg";
import carbonNeutralIcon from "/assets/ProductListWithCart/images/icon-carbon-neutral.svg";
import addIcon from "/assets/ProductListWithCart/images/icon-increment-quantity.svg";
import subtractIcon from "/assets/ProductListWithCart/images/icon-decrement-quantity.svg";

interface ButtonProps {
	image?: string;
	text: string;
}

const Button = () => {
	const [focused, setFocused] = useState(false);
	const [quantity, setQuantity] = useState(1);
	return (
		<div tabIndex={0} className={classes.wrapper} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
			{!focused ? (
				<button>
					<span>
						<img src={addToCartIcon} alt="add to cart" />
					</span>
					Add to Cart
				</button>
			) : (
				<button>
					<span>
						<img src={addIcon} alt="more" />
					</span>
					{quantity}
					<span>
						<img src={subtractIcon} alt="less" />
					</span>
				</button>
			)}
		</div>
	);
};

export default Button;
