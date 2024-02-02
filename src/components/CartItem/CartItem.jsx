import "./CartItem.css";
import Counter from "../Counter/Counter";

const CartItem = ( { item, quantity }) => {
    return (

        <div>
            <h3> {item} </h3>
            <p> Quantity: { quantity }</p>
            <p> Price: {item} </p>
        </div>


    )
}

export default CartItem




