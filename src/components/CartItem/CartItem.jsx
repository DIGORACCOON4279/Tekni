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


// import "./CartItem.css";
// import Counter from "../Counter/Counter";

// const CartItem = ({ item, quantity }) => {
//   return (
//     <article className="cart-item">
//       <div>
//         <h3>{item.name}</h3>
//         <p>Quantity: {quantity}</p>
//         <p>Price: ${item.price}</p>
//       </div>
//       {/* Renderiza el componente Counter dentro de CartItem */}
//       <Counter stock={item.stock} initial={quantity} functionAdd={() => {}} />
//     </article>
//   );
// };

// export default CartItem;









