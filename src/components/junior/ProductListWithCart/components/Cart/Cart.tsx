import classes from "./Cart.module.css";
import emptyCart from "/assets/ProductListWithCart/images/illustration-empty-cart.svg";
import { type Item } from "../../ProductListWithCart";
import removeIcon from "../../assets/removeIcon.svg";

interface CartProps {
	cart: Item[];
}

const Cart = ({ cart }: CartProps) => {
	return (
		<div className={classes.cart}>
			<div className={classes["cart-title-text"]}>
				Your Cart <span>0</span>
			</div>
			{cart.map((item) => {
				const { name, price, quantity } = item;
				return (
					<div className={classes["added-item"]}>
						<div className={classes["item-info"]}>
							<div className={classes.name}>{name}</div>
							<div className={classes["quantity-and-price"]}>
								<div className={classes.quantity}>{quantity}X</div>
								<div className={classes.price}>@${price.toFixed(2)}</div>
								<div className={classes.total}>{(quantity * price).toFixed(2)}</div>
							</div>
						</div>
						<button className={classes["remove-button"]}>
							<img src={removeIcon} alt="" />
						</button>
					</div>
				);
			})}
			{cart.length < 1 && (
				<div className={classes["empty-placeholder"]}>
					<img src={emptyCart} alt="empty" />
					<div className={classes["cart-empty-text"]}> Your added items will appear here</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
