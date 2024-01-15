
// CategoryHeadset.jsx

import { useEffect, useState } from 'react';
import Footer from "../Footer/Footer";
import Item from '../Item/Item';
import './CategoryHeadset.css';
import { getProducts } from "../../asyncmock";

const CategoryHeadset = ({ greeting }) => {
    const [headsetProducts, setHeadsetProducts] = useState([]);

    useEffect(() => {
        const fetchHeadsetProducts = async () => {
            try {
                const allProducts = await getProducts();
                const filteredProducts = allProducts.filter(product => product.category === 'Headset');
                setHeadsetProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching Headset products:', error);
            }
        };

        fetchHeadsetProducts();
    }, []);

    return (
        <section className="categoryHeadset">
            <h2>{greeting}</h2>
            <h3 className="title">Headset</h3>
            <div className="containerHeadset">
                {headsetProducts.map(product => (
                    <Item key={product.id} {...product} />
                ))}
            </div>
            <Footer/>
        </section>
    );
};

export default CategoryHeadset;