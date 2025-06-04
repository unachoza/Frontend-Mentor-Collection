import "./ParfumProductCard.css";
import icon from "./assets/images/icon-cart.svg";
import productImage from "./assets/images/image-product-desktop.jpg";

const ParfumProductCard = () => {
	return (
		<div className="card-container">
			<div className="image-container">
				<img src={productImage} alt="chanel perfume" />
			</div>
			<div className="content-container">
				<div className="content">
					<div className="title">Perfume</div>
					<div className="name"> Gabrielle Essence Eau De Parfum</div>
					<div className="description">
						A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
					</div>
				</div>
				<div className="price">
					<div className="sale">$149.99</div>
					<div className="original">$169.99</div>
				</div>
				<button type="button">
					<img src={icon} alt="shopping cart icon" />
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ParfumProductCard;
