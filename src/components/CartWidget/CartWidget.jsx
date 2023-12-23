
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <li>
            <label htmlFor="cartWidget">
                <img className="cartWidget" src="./img/shoppingCart.svg" alt=""/>
                <p><strong> 3 </strong></p>
                <input id="cartWidget" type="checkbox"/>
            </label>
        </li>
    )
}

export default CartWidget

