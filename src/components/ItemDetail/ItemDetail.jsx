import { useState } from "react";
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemDetail = ({id, reference, category, price, img, stock, features, compatibility, updates, children}) => {

    const [addQuantity, setAddQuantity] = useState(0);

    const { addToCart } = useContext(CartContext);



    const handleQuantity = (quantity) => {
        setAddQuantity(quantity);
        // console.log("Products added:" +  quantity);


    const item = {id, category, price};
        addToCart(item, quantity)
    }

    return (
        <article className="cardItem">
            <figure className="imgCounter">
                <img className="image" src={img} alt={category} />
            </figure>
            <section className="categoryInfo">
                <div className="titleRating">
                    <h3 className="category"> {category} </h3>
                    <img className="rating" src="/img/rating.svg" alt="Rating start"/>
                </div>
                <div className="info">
                    <p className="id"> ID: {id} </p>
                    <p className="reference"> {reference} <span className="price"> ...${price} </span></p>
                    <div className="description">
                        <p className="title">Description:</p>
                        <section className="descriptionProduct">
                            <p className="features"><span>Key Features: </span>{features}</p>
                            <p className="compatibility"><span>Connectivity and Compatibility: </span>{compatibility}</p>
                            <p className="compatibility"><span>Operating System and Updates:  </span>{updates}</p>
                        </section>
                    </div>
                </div>
                <p className="stock">Stock: {stock}</p>
                {/* {children} */}
                <div className="add">

                {
                    addQuantity > 0 ? (<Link to="/checkout" className="btnEndingShop"> Ending shopping </Link>) : (<Counter
                    initial={1} stock={stock} functionAdd={handleQuantity}/>)
                }


                {/* A este button se cambio para Counter.jsx */}

                {/* <div className="add">
                    <button className="addToCart">Add to cart</button>
                </div> */}
                </div>
            </section>
        </article>
    )
}

export default ItemDetail
