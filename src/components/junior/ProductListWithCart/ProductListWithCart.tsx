import classes from "./ProductListWithCart.module.css";
import emptyCart from "/assets/ProductListWithCart/images/illustration-empty-cart.svg";
import data from "./data/data.json";
import Product from "./components/Product/Product";

const ProductListWithCart = () => {
	return (
		<div className={classes.main}>
			<div className={classes["product-list-container"]}>
				<h1 className={classes.title}>Desserts</h1>
				<div className={classes["product-list"]}>
					{data.map((product) => (
						<Product productInfo={product} />
					))}
				</div>
			</div>
			<div className={classes.cart}>
				<img src={emptyCart} alt="" />
			</div>
		</div>
	);
};

export default ProductListWithCart;
