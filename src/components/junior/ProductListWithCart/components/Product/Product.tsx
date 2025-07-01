import classes from "./Product.module.css";
import Button from "../Button/Button";
import { type Item } from "../../ProductListWithCart";

export type Product = {
	id: number,
	image: {
		thumbnail: string;
		mobile: string;
		tablet: string;
		desktop: string;
	};
	name: string;
	category: string;
	price: number;
};

interface ProductProps {
	productInfo: Product;
	addItem: (item: Item) => void;
	removeItem: (id: number) => void;
}

const Product = ({ productInfo, addItem, removeItem }: ProductProps) => {
	const { image, name, category, price } = productInfo;
	return (
		<div className={classes.card}>
			<div className={classes["image-and-button-container"]}>
				<img src={image ? image.desktop : ""} alt={name} />
				<Button product={productInfo} addItem={addItem} removeItem={removeItem} />
			</div>
			<div className={classes["product-info"]}>
				<div className={classes.category}>{category}</div>
				<div className={classes.name}>{name}</div>
				<div className={classes.price}>${price}</div>
			</div>
		</div>
	);
};

export default Product;
