import { useState, useEffect } from "react";
import { getOneProduct } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    useEffect( () => {
        getOneProduct(2)
            .then(response => setProduct(response));
    }, []);

    return (
        <section className="ItemDetailContainer">
            <ItemDetail {...product} />
        </section>
    )
}

export default ItemDetailContainer
