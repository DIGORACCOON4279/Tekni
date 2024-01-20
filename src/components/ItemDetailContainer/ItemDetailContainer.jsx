import { useState, useEffect } from "react";
import { getOneProduct } from "../../asyncmock";
import AdvantagesTwo from "../AdvantagesTwo/AdvantagesTwo";
// import RandomItemList from "../RandomItemList/RandomItemList";
import ItemDetail from "../ItemDetail/ItemDetail";
import Counter from "../Counter/Counter";
import Advertising from "../Advertising/Advertising";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const{ idItem } = useParams();

    useEffect( () => {
        getOneProduct( idItem )
            .then(response => setProduct(response));
    }, [ idItem ]);

    return (
        <section className="ItemDetailContainer">
            <h2>⚡ Get 35%  off on all our devices this Black Friday!!! ⚡</h2>
            <Advertising/>
            <ItemDetail {...product} >
                {/* <p className="soldOut">SoldOut</p> */}
                <Counter stock={10} initial={1}/>
            </ItemDetail>
            <AdvantagesTwo/>
            {/* <RandomItemList/> */}
        </section>
    )
}

export default ItemDetailContainer


// const ItemDetailContainer = ({greeting}) => {
//     const [product, setProduct] = useState(null);

//     const{ idItem } = useParams();

//     useEffect( () => {
//         getOneProduct( idItem )
//             .then(response => setProduct(response));
//     }, [ idItem ]);

//     return (
//         <section className="ItemDetailContainer">
//             <h2>{greeting}</h2>
//             <Advertising/>
//             <ItemDetail {...product} >
//                 {/* <p className="soldOut">SoldOut</p> */}
//                 <Counter stock={10} initial={1}/>
//             </ItemDetail>
//             <AdvantagesTwo/>
//             <RandomItemList/>
//         </section>
//     )
// }

// export default ItemDetailContainer
