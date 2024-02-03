// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
// import { Link } from "react-router-dom";
// import ShoppingCart from "../ShoppingCart/ShoppingCart";
// import "./CartWidget.css";

// const CartWidget = () => {
// const { quantityTotal } = useContext(CartContext);



//     return (
//         <li>
//             {/* <Link to="/cart">
//                 <label htmlFor="cartWidget">
//                     <img className="cartWidget" src="../img/shoppingCart.svg" alt=""/>
//                     {
//                         quantityTotal > 0 && <p><strong> {quantityTotal} </strong></p>
//                     }
//                 </label>
//                 <input id="cartWidget" type="checkbox"/>
//                 <ShoppingCart />
//             </Link> */}


//                 <label htmlFor="cartWidget">

//                     <img className="cartWidget" src="../img/shoppingCart.svg" alt=""/>
//                     {
//                         quantityTotal > 0 && <p><strong> {quantityTotal} </strong></p>
//                     }

//                 </label>
//                 <input id="cartWidget" type="checkbox"/>


//             <ShoppingCart />
//         </li>
//     )
// }

// export default CartWidget



import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./CartWidget.css";

const CartWidget = () => {
    const { quantityTotal } = useContext(CartContext);
    const [showCart, setShowCart] = useState(false);

    const handleCartToggle = () => {
        setShowCart(!showCart);
    };

    return (
        <li>
        <label htmlFor="cartWidget">
            <img className="cartWidget" src="../img/shoppingCart.svg" alt="" />
            {quantityTotal > 0 && <p><strong>{quantityTotal}</strong></p>}
        </label>
        <input
            id="cartWidget"
            type="checkbox"
            checked={showCart}
            onChange={handleCartToggle}
        />
        <ShoppingCart showCart={showCart} />
        </li>
    );
};

export default CartWidget;








