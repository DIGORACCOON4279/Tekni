import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";
import Item from "../Item/Item";
import "./RandomItemList.css";


const RandomItemList = () => {
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const products = await getProducts();
        const randomProductsArray = [];

        for (let i = 0; i < 8 && products.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * products.length);
            const randomProduct = products.splice(randomIndex, 1)[0];
            randomProductsArray.push(randomProduct);
        }

        setRandomProducts(randomProductsArray);
        };

        fetchData();
    }, []);

    return (
        <section className="randomProductContainer">
            <h3 className="titleSection">Related Products</h3>
            <div className="productList">
                {randomProducts.map((product) => (
                    <Item
                    key={product.id}
                    id={product.id}
                    reference={product.reference}
                    category={product.category}
                    price={product.price}
                    img={product.img}
                    />
                ))}
            </div>
        </section>
    );
};

export default RandomItemList;
