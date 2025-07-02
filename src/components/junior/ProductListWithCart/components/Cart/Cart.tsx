import classes from "./Cart.module.css";
import emptyCart from "/assets/ProductListWithCart/images/illustration-empty-cart.svg";
import { type Item } from "../../ProductListWithCart";
import removeIcon from "../../assets/removeIcon.svg";
import treeIcon from "../../assets/treeIcon.svg";

interface CartProps {
	cart: Item[];
	removeAll: (id: number) => void;
	openModal: () => void;
}

const Cart = ({ cart, removeAll, openModal }: CartProps) => {
	const getTotalQuantity = (): number => {
		let total = 0;
		cart.forEach((item) => (total += item.quantity));
		return total;
	};

	const getTotal = (): number => {
		let total = 0;
		cart.forEach((item) => (total += item.quantity * item.price));
		return total;
	};

	return (
		<div className={classes["cart-container"]}>
			<div className={classes["cart-title-text"]}>
				Your Cart (<span>{getTotalQuantity()}</span>)
			</div>
			{cart.map((item) => {
				const { id, name, price, quantity } = item;
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
						<button className={classes["remove-button"]} onClick={() => removeAll(id)}>
							<img src={removeIcon} alt="" />
						</button>
					</div>
				);
			})}
			<div className={classes["order-total"]}>
				<div className={classes.text}>Order Total</div>
				<div className={classes.total}>${getTotal().toFixed(2)}</div>
			</div>
			<div className={classes["carbon-info-container"]}>
				<div className={classes["carbon-nuetral-info"]}>
					<img src={treeIcon} alt="carbon nuetral" /> This is a <strong>carbon nuetral</strong> delivery
				</div>
			</div>
			<div className={classes["button-container"]}>
				<button className={classes.confirm} onClick={() => openModal()}>
					Confirm Order
				</button>
			</div>
			{cart.length > 1 && (
				<div className={classes["empty-placeholder"]}>
					<img src={emptyCart} alt="empty" />
					<div className={classes["cart-empty-text"]}> Your added items will appear here</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
