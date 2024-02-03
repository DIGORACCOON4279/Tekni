import "./CartItem.css";
// import Counter from "../Counter/Counter";

const CartItem = ( { item, quantity }) => {

        // <div>
        //     <h3> {item} </h3>
        //     <p> Quantity: { quantity }</p>
        //     <p> Price: {item} </p>
        // </div>

        // <article className="productItem">
        //     <section className="iconMenu">
        //         <img className="productImage" src="/img/headset11.webp" alt="" />
        //         <div className="iconOption">
        //             <img className="icon" src="/img/trash.svg" alt="Trash icon" />
        //             <img className="icon" src="/img/edit.svg" alt="Edit icon" />
        //             <img className="icon" src="/img/share.svg" alt="share icon" />
        //             <img className="icon" src="/img/heart.svg" alt="Herat icon" />
        //         </div>
        //     </section>
        //     <p className="price">$179</p>
        //     <div className="counterProduct">
        //     </div>
        //     <p className="priceTotal">$179</p>
        // </article>



    return (
        <article className="productItem">
            <section className="iconMenu">

                <img src={item.img}  className="productImage"  alt={item.category} />
                <div className="iconOption">
                <img className="icon" src="/img/trash.svg"  alt="Trash icon" />
                <img className="icon" src="/img/edit.svg" alt="Edit icon" />
                <img className="icon" src="/img/share.svg" alt="Share icon" />
                <img className="icon" src="/img/heart.svg" alt="Heart icon" />
                </div>
            </section>
            <p className="price">${item.price}</p>
            <div className="counterProduct">{quantity}</div>
            <p className="priceTotal">${item.price * quantity}</p>
        </article>
    );
};

export default CartItem;







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









