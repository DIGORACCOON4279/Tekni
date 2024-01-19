import { useState, useEffect } from "react";
import { getOneProduct } from "../../asyncmock";
import AdvantagesTwo from "../AdvantagesTwo/AdvantagesTwo";
import RandomItemList from "../RandomItemList/RandomItemList";
import ItemDetail from "../ItemDetail/ItemDetail";
import Counter from "../Counter/Counter";
import "./ItemDetailContainer.css";
import Advertising from "../Advertising/Advertising";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({greeting}) => {
    const [product, setProduct] = useState(null);

    const{ idItem } = useParams();

    useEffect( () => {
        getOneProduct( idItem )
            .then(response => setProduct(response));
    }, [ idItem ]);

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
        </section>
    )
}

export default ItemDetailContainer
