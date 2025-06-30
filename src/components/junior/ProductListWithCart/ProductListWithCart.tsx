import classes from "./ProductListWithCart.module.css";
import emptyCart from "./assets/images/illustration-empty-cart.svg";

const ProductListWithCart = () => {
	return (
		<div>
			<div className={classes["product-list-container"]}>
				<h1 className={classes.title}>Desserts</h1>
				<div className={classes["product-list"]}></div>
			</div>
			<div className={classes.cart}>
				<img src={emptyCart} alt="" />
			</div>
		</div>
	);
};

export default ProductListWithCart;
