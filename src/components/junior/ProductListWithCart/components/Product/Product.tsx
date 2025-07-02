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
	const { image, name, category, price } = productInfo;
	return (
		<div className={classes.card}>
			<div className={classes["image-and-button-container"]}>
				<img src={image ? image.desktop : ""} alt={name} />
				<Button product={productInfo} addItem={addItem} removeItem={removeItem} removeAll={removeAll} />
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
