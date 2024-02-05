import "./CartItem.css";
import Counter from "../Counter/Counter";
// import { CartContext } from "../../context/CartContext";
// import { useContext } from "react";


const CartItem = ( { item, quantity, onDelete }) => {

    return (

        <article className="productItem">
            <section className="iconMenu">
                <div className="productFeatures">
                    <img className="productImage" src={item.img} alt={item.category} />
                </div>
                <div className="iconOption">
                    <div className="features">
                        <p className="category">{item.category}</p>
                        <p className="reference">{item.reference}</p>
                    </div>
                    <img className="rating" src="/img/rating.svg" alt="Rating star"  />
                    <div className="icons">
                        <img className="icon" src="/img/trash.svg"  alt="Trash icon" onClick={onDelete}/>
                        <img className="icon" src="/img/heart.svg" alt="Heart icon" />
                    </div>
                </div>
            </section>
            <p className="price">${item.price}</p>
            {/* <Counter>

            </Counter> */}
            <div className="counterProduct">{quantity}</div>
            <p className="priceTotal">${item.price * quantity}</p>
        </article>
    );
};

export default CartItem;




// Este es el que sirve

// import "./CartItem.css";
// import Counter from "../Counter/Counter";

// const CartItem = ({ item, quantity, onDelete, stock }) => {
//     const handleQuantityChange = (newQuantity) => {
//         // Actualiza el stock aquí
//         console.log("New quantity:", newQuantity);
//     };

//     return (
//         <article className="productItem">
//             <section className="iconMenu">
//                 <img className="productImage" src={item.img} alt={item.category} />
//                 <div className="iconOption">
//                     <img className="icon" src="/img/trash.svg" alt="Trash icon" onClick={onDelete} />
//                     <img className="icon" src="/img/heart.svg" alt="Heart icon" />
//                 </div>
//             </section>
//             <p className="price">${item.price}</p>
//             <Counter stock={stock} initial={quantity} functionAdd={handleQuantityChange} />
//             <p className="priceTotal">${item.price * quantity}</p>
//         </article>
//     );
// };

// export default CartItem;


// Este es el que sirve

// import "./CartItem.css";
// import Counter from "../Counter/Counter";
// import { useState } from "react";

// const CartItem = ({ item, quantity, onDelete, stock }) => {
//     const [cartQuantity, setCartQuantity] = useState(quantity);

//     const handleQuantityChange = (newQuantity) => {
//         setCartQuantity(newQuantity);
//     };

//     return (
//         <article className="productItem">
//             <section className="iconMenu">
//                 <img className="productImage" src={item.img} alt={item.category} />
//                 <div className="iconOption">
//                     <img className="icon" src="/img/trash.svg" alt="Trash icon" onClick={onDelete} />
//                     <img className="icon" src="/img/heart.svg" alt="Heart icon" />
//                 </div>
//             </section>
//             <p className="price">${item.price}</p>

//             <Counter stock={stock} initial={quantity} functionAdd={handleQuantityChange} />

//             <p className="priceTotal">${item.price * cartQuantity}</p>
//         </article>
//     );
// };

// export default CartItem;

// este sirve diminuye pero no actualiza contador total

// import "./CartItem.css";
// import { useState } from "react";

// const CartItem = ({ item, quantity, onDelete, stock }) => {
//     const [cartQuantity, setCartQuantity] = useState(quantity);

//     const increaseCounter = () => {
//         if (cartQuantity < stock) {
//             setCartQuantity(cartQuantity + 1);
//         }
//     };

//     const decreaseCounter = () => {
//         if (cartQuantity > 1) {
//             setCartQuantity(cartQuantity - 1);
//         }
//     };

//     const handleQuantityChange = (newQuantity) => {
//         if (newQuantity >= 1 && newQuantity <= stock) {
//             setCartQuantity(newQuantity);
//         }
//     };

//     return (
//         <article className="productItem">
//             <section className="iconMenu">
//                 <img className="productImage" src={item.img} alt={item.category} />
//                 <div className="iconOption">
//                     <img className="icon" src="/img/trash.svg" alt="Trash icon" onClick={onDelete} />
//                     <img className="icon" src="/img/heart.svg" alt="Heart icon" />
//                 </div>
//             </section>
//             <p className="price">${item.price}</p>
//             <div className="counterSection">
//                 <button onClick={decreaseCounter} className="decrease"> - </button>
//                 <p className="counter"><strong> {cartQuantity} </strong></p>
//                 <button onClick={increaseCounter} className="increase"> + </button>
//             </div>
//             <p className="priceTotal">${item.price * cartQuantity}</p>
//         </article>
//     );
// };

// export default CartItem;







