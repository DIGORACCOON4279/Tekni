import "./CartItem.css";
// import Counter from "../Counter/Counter";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


const CartItem = ( { item, quantity, onDelete }) => {


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



        // Este es el que sirve

        <article className="productItem">
            <section className="iconMenu">

                <img className="productImage" src={item.img} alt={item.category} />
                <div className="iconOption">

                <img className="icon" src="/img/trash.svg"  alt="Trash icon" onClick={onDelete}/>
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














