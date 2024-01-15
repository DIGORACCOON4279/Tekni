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
        getOneProduct(39)
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

            {/* Probando ItemList con diferentes propiedades */}

            {/* <ItemDetail img="https://primera-entrega-tekni.vercel.app/img/tv1.webp" category="SmartTV" reference="HNK-01" price="1599">
                <Counter stock={10} initial={1}/>
            </ItemDetail>

            <ItemDetail img="https://primera-entrega-tekni.vercel.app/img/headset1.webp" category="Headset" reference="KJN-01" price="199">
                <Counter stock={5} initial={1}/>
            </ItemDetail>

            <ItemDetail img="https://primera-entrega-tekni.vercel.app/img/laptop5.webp" category="Laptop" reference="XKX-05" price="1099">
                <Counter stock={15} initial={1}/>
            </ItemDetail>

            <ItemDetail img="https://primera-entrega-tekni.vercel.app/img/laptop9.webp" category="Laptop" reference="XKX-10" price="1099">
                <Counter stock={10} initial={1}/>
            </ItemDetail> */}

        </section>
    )
}

export default ItemDetailContainer
