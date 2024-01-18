
// CategorySmartphone.jsx

import { useEffect, useState } from 'react';
import Footer from "../Footer/Footer";
import Item from '../Item/Item';
import './CategorySmartphone.css';
import { getProducts } from "../../asyncmock";

const CategorySmartphone = ({ greeting }) => {
    const [smartphoneProducts, setSmartphoneProducts] = useState([]);

    useEffect(() => {
        const fetchSmartphoneProducts = async () => {
            try {
                const allProducts = await getProducts();
                const filteredProducts = allProducts.filter(product => product.category === 'Smartphone');
                setSmartphoneProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching Smartphone products:', error);
            }
        };

        fetchSmartphoneProducts();
    }, []);

    return (
        <section className="categorySmartphone">
            <h2>{greeting}</h2>
            <h3 className="titleSection">Smartphone</h3>
            <section className="sectionSmartphone">
                <div className="containerSmartphone">
                    {smartphoneProducts.map(product => (
                        <Item key={product.id} {...product} />
                    ))}
                </div>
            </section>
        </section>
    );
};

export default CategorySmartphone;
