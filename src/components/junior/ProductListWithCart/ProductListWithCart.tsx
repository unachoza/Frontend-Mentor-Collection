import classes from "./ProductListWithCart.module.css";
import emptyCart from "/assets/ProductListWithCart/images/illustration-empty-cart.svg";
import data from "./data/data.json";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";

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
			<Cart />
		</div>
	);
};

export default ProductListWithCart;
