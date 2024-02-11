import { useState, useEffect } from "react";
import AdvantagesTwo from "../AdvantagesTwo/AdvantagesTwo";
import ItemDetail from "../ItemDetail/ItemDetail";
import Counter from "../Counter/Counter";
import Advertising from "../Advertising/Advertising";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const{ idItem } = useParams();

    useEffect( () => {
        const newDoc = doc(db, "products", idItem);

        getDoc(newDoc)
        .then(response => {
            const data = response.data();
            const newProduct = {id: response.id, ...data};
            setProduct(newProduct);
        })
        .catch(error => console.log("Inconsistencia ", error))
    }, [idItem])

    return (
        <section className="ItemDetailContainer">
            <h2>⚡ Get 35%  off on all our devices this Black Friday!!! ⚡</h2>
            <Advertising/>
            <ItemDetail {...product} >
                <Counter/>
            </ItemDetail>
            <AdvantagesTwo/>
        </section>
    )
}

export default ItemDetailContainer

