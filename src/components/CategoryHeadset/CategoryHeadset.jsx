
// CategoryHeadset.jsx

import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './CategoryHeadset.css';
import { getProducts } from "../../asyncmock";
import { useParams } from 'react-router-dom';

// Explicacion del profe

const CategoryHeadset = ({ greeting }) => {
    const {id} = useParams();

    return (
        <section className="categoryHeadset">
            <h2>{greeting}</h2>
            <h3 className="titleSection">Headset</h3>
            <section className="sectionHeadset">
                <div className="containerHeadset">
                    {headsetProducts.map(product => (
                        <Item key={product.id} {...product} />
                    ))}
                </div>
            </section>
        </section>
    );
};

// Esta es otra manera de hacerlo

// const CategoryHeadset = ({ greeting }) => {
//     const [headsetProducts, setHeadsetProducts] = useState([]);

//     useEffect(() => {
//         const fetchHeadsetProducts = async () => {
//             try {
//                 const allProducts = await getProducts();
//                 const filteredProducts = allProducts.filter(product => product.category === 'Headset');
//                 setHeadsetProducts(filteredProducts);
//             } catch (error) {
//                 console.error('Error fetching Headset products:', error);
//             }
//         };

//         fetchHeadsetProducts();
//     }, []);

//     return (
//         <section className="categoryHeadset">
//             <h2>{greeting}</h2>
//             <h3 className="titleSection">Headset</h3>
//             <section className="sectionHeadset">
//                 <div className="containerHeadset">
//                     {headsetProducts.map(product => (
//                         <Item key={product.id} {...product} />
//                     ))}
//                 </div>
//             </section>
//         </section>
//     );
// };

export default CategoryHeadset;
