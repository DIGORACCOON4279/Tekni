
// CategoryLaptop.jsx

import { useEffect, useState } from 'react';
import Footer from "../Footer/Footer";
import Item from '../Item/Item';
import './CategoryLaptop.css';
import { getProducts } from "../../asyncmock";

const CategoryLaptop = ({ greeting }) => {
    const [laptopProducts, setLaptopProducts] = useState([]);

    useEffect(() => {
        const fetchLaptopProducts = async () => {
            try {
                const allProducts = await getProducts();
                const filteredProducts = allProducts.filter(product => product.category === 'Laptop');
                setLaptopProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching Laptop products:', error);
            }
        };

        fetchLaptopProducts();
    }, []);

    return (
        <section className="categoryLaptop">
            <h2>{greeting}</h2>
            <h3 className="title">Laptops</h3>
            <div className="containerLaptop">
                {laptopProducts.map(product => (
                    <Item key={product.id} {...product} />
                ))}
            </div>
            <Footer/>
        </section>
    );
};

export default CategoryLaptop;
