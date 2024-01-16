import { useState, useEffect } from "react";
import { getOneProduct } from "../../asyncmock";
import Footer from "../Footer/Footer";
import AdvantagesTwo from "../AdvantagesTwo/AdvantagesTwo";
import RandomItemList from "../RandomItemList/RandomItemList";
import ItemDetail from "../ItemDetail/ItemDetail";
import Counter from "../Counter/Counter";
import "./ItemDetailContainer.css";
import Advertising from "../Advertising/Advertising";

const ItemDetailContainer = ({greeting}) => {
    const [product, setProduct] = useState(null);

    useEffect( () => {
        getOneProduct(2)
            .then(response => setProduct(response));
    }, []);

    return (
        <section className="ItemDetailContainer">
            <h2>{greeting}</h2>
            <Advertising/>
            <ItemDetail {...product} >
                {/* <p className="soldOut">SoldOut</p> */}
                <Counter stock={10} initial={1}/>
            </ItemDetail>
            <AdvantagesTwo/>
            <RandomItemList/>
            <Footer/>
        </section>
    )
}

export default ItemDetailContainer
