
// // CategoryLaptop.jsx

// import { useEffect, useState } from 'react';
// import Item from '../Item/Item';
// import './CategoryLaptop.css';
// import { getProducts } from "../../asyncmock";

// const CategoryLaptop = ({ greeting }) => {
//     const [laptopProducts, setLaptopProducts] = useState([]);

//     useEffect(() => {
//         const fetchLaptopProducts = async () => {
//             try {
//                 const allProducts = await getProducts();
//                 const filteredProducts = allProducts.filter(product => product.category === 'Laptop');
//                 setLaptopProducts(filteredProducts);
//             } catch (error) {
//                 console.error('Error fetching Laptop products:', error);
//             }
//         };

//         fetchLaptopProducts();
//     }, []);

//     return (
//         <section className="categoryLaptop">
//             <h2>{greeting}</h2>
//             <h3 className="titleSection">Laptops</h3>
//             <section className="sectionLaptop">
//                 <div className="containerLaptop">
//                     {laptopProducts.map(product => (
//                         <Item key={product.id} {...product} />
//                     ))}
//                 </div>
//             </section>
//         </section>
//     );
// };

// export default CategoryLaptop;

// import { useEffect, useState } from 'react';
// import Item from '../Item/Item';
// import './CategoryLaptop.css';
// import { getProducts } from "../../asyncmock";
// import { useParams } from 'react-router-dom';

// const CategoryLaptop = ({ greeting }) => {
//     const [laptopProducts, setLaptopProducts] = useState([]);
//     const { category } = useParams(); // Obtener el parámetro 'category' de la URL

//     useEffect(() => {
//         const fetchLaptopProducts = async () => {
//             try {
//                 const allProducts = await getProducts();
//                 const filteredProducts = allProducts.filter(product => product.category === category);
//                 setLaptopProducts(filteredProducts);
//             } catch (error) {
//                 console.error('Error fetching Laptop products:', error);
//             }
//         };

//         fetchLaptopProducts();
//     }, [category]);

//     return (
//         <section className="categoryLaptop">
//             <h2>{greeting}</h2>
//             <h3 className="titleSection">Laptops</h3>
//             <section className="sectionLaptop">
//                 <div className="containerLaptop">
//                     {laptopProducts.map(product => (
//                         <Item key={product.id} {...product} />
//                     ))}
//                 </div>
//             </section>
//         </section>
//     );
// };

// export default CategoryLaptop;
