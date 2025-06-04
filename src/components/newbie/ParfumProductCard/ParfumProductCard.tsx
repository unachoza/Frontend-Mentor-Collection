import './ParfumProductCard.css'
import icon from '../parfumCard/assets/product-preview-card-component-main/images/icon-cart.svg'

const ParfumProductCard = () => {
    return (
        <div>
            <h1> Perfume</h1>
           
            <img src={icon} alt="shopping cart icon"/>
        </div>
    )
}

export default ParfumProductCard