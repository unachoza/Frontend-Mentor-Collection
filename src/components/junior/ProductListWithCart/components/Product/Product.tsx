import classes from "./Product.module.css";
import Button from "../Button/Button";
import { type Item, type ProductType } from "../../utils/types";

interface ProductProps {
	productInfo: ProductType;
	addItem: (item: Item) => void;
	removeItem: (id: number) => void;
	removeAll: (id: number) => void;
}

const Product = ({ productInfo, addItem, removeItem, removeAll }: ProductProps) => {
	const productWithQuantity: Item = {
		...productInfo,
		quantity: 1,
	};

	const { image, name, category, price } = productInfo;
	return (
		<div className={classes.card}>
			<div className={classes["image-and-button-container"]}>
				<picture>
					<source srcSet={image.desktop} media="(min-width: 1024px)" />
					<source srcSet={image.tablet} media="(min-width: 700px)" className={classes.tablet} />
					<img src={image.mobile} className={classes.mobile} alt={name} />
				</picture>
				<Button product={productWithQuantity} addItem={addItem} removeItem={removeItem} removeAll={removeAll} />
			</div>
			<div className={classes["product-info"]}>
				<div className={classes.category}>{category}</div>
				<div className={classes.name}>{name}</div>
				<div className={classes.price}>${price.toFixed(2)}</div>
			</div>
		</div>
	);
};

export default Product;
