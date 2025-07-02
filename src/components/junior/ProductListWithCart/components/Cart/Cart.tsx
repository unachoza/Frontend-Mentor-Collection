import classes from "./Cart.module.css";
import emptyCart from "/assets/ProductListWithCart/images/illustration-empty-cart.svg";
import removeIcon from "../../assets/icons/removeIcon.svg";
import treeIcon from "../../assets/icons/treeIcon.svg";
import { type Item } from "../../utils/types";
import { getTotal, getTotalQuantity } from "../../utils/utils";

interface CartProps {
	cart: Item[];
	removeAll: (id: number) => void;
	openModal: () => void;
}

const Cart = ({ cart, removeAll, openModal }: CartProps) => {
	return (
		<div className={classes["cart-container"]}>
			<div className={classes["cart-title-text"]}>
				Your Cart (<span>{getTotalQuantity(cart)}</span>)
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
				<div className={classes.total}>${getTotal(cart).toFixed(2)}</div>
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
