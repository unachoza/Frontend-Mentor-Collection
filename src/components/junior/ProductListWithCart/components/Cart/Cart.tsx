import classes from "./Cart.module.css";
import emptyCart from "/assets/ProductListWithCart/images/illustration-empty-cart.svg";

const Cart = () => {
	return (
		<div className={classes.cart}>
			<div className={classes["cart-title-text"]}>
				Your Cart <span>0</span>
			</div>
			<div className={classes["empty-placeholder"]}>
				<img src={emptyCart} alt="empty" />
				<div className={classes["cart-empty-text"]}> Your added items will appear here</div>
			</div>
		</div>
	);
};

export default Cart;
