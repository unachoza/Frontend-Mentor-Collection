import confirmedIcon from "../../assets/icons/icon-order-confirmed.svg";
import classes from "./Modal.module.css";
import { type Item } from "../../utils/types";
import { getTotal } from "../../utils/utils";

interface ModalProps {
	shopppingCart: Item[];
	closeModal: () => void;
	clearCart: () => void;
}

const Modal = ({ shopppingCart, closeModal, clearCart }: ModalProps) => {
	const handleStartNewOrder = () => {
		clearCart();
		closeModal();
	};

	return (
		<div className={`${classes["modal-container"]} ${classes["show-modal"]}`} id="modal">
			<div className={classes.modal}>
				<div className={classes["title-info"]}>
					<img src={confirmedIcon} alt="check" />
					<div className={classes.title}>Order Confirmed</div>
					<div className={classes["sub-title"]}>We hope you enjoy your food!</div>
				</div>
				<div className={classes["confirmed-items"]}>
					{shopppingCart.map((item) => (
						<div className={classes["confirmed-item"]}>
							<div className={classes.item}>
								<img src={item.image.thumbnail} alt={item.name} />
								<div className={classes["item-info"]}>
									<div className={classes.name}>{item.name}</div>
									<div className={classes.amount}>
										<div className={classes.quantity}>{item.quantity}X</div>
										<div className={classes.price}>@${item.price.toFixed(2)}</div>
									</div>
								</div>
							</div>
							<div className={classes["total-price"]}>{(item.quantity * item.price).toFixed(2)}</div>
						</div>
					))}
					<div className={classes["order-total"]}>
						<div className={classes.text}>Order Total</div>
						<div className={classes.total}>${getTotal(shopppingCart).toFixed(2)}</div>
					</div>
				</div>
				<div className={classes["button-container"]}>
					<button onClick={handleStartNewOrder}>Start New Order</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
