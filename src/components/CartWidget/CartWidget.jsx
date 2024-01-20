
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <li>
            <label htmlFor="cartWidget">
                <img className="cartWidget" src="../img/shoppingCart.svg" alt=""/>
                <p><strong> 5 </strong></p>
            </label>
            <input id="cartWidget" type="checkbox"/>
            <ShoppingCart />
        </li>
    )
}

export default CartWidget

