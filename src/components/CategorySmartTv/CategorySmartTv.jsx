
// CategorySmartTv.jsx

import { useEffect, useState } from 'react';
import Footer from "../Footer/Footer";
import Item from '../Item/Item';
import './CategorySmartTv.css';
import { getProducts } from "../../asyncmock";

const CategorySmartTv = ({ greeting }) => {
    const [smartTvProducts, setSmartTvProducts] = useState([]);

    useEffect(() => {
        const fetchSmartTvProducts = async () => {
            try {
                const allProducts = await getProducts();
                const filteredProducts = allProducts.filter(product => product.category === 'SmartTV');
                setSmartTvProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching SmartTV products:', error);
            }
        };

        fetchSmartTvProducts();
    }, []);

    return (
        <section className="categorySmartTV">
            <h2>{greeting}</h2>
            <h3 className="title">SmartTV</h3>
            <div className="containerSmartTv">
                {smartTvProducts.map(product => (
                    <Item key={product.id} {...product} />
                ))}
            </div>
            <Footer/>
        </section>
    );
};

export default CategorySmartTv;
