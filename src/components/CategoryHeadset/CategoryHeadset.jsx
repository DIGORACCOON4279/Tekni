
// CategoryHeadset.jsx

// import { useEffect, useState } from 'react';
// import Item from '../Item/Item';
// import './CategoryHeadset.css';
// import { getProducts } from "../../asyncmock";
// import { useParams } from 'react-router-dom';

// const CategoryHeadset = ({ greeting }) => {
//     const [headsetProducts, setHeadsetProducts] = useState([]);
//     const { category } = useParams(); // Obtener el parámetro 'category' de la URL

//     useEffect(() => {
//         const fetchHeadsetProducts = async () => {
//             try {
//                 const allProducts = await getProducts();
//                 const filteredProducts = allProducts.filter(product => product.category === category);
//                 setHeadsetProducts(filteredProducts);
//             } catch (error) {
//                 console.error('Error fetching Headset products:', error);
//             }
//         };

//         fetchHeadsetProducts();
//     }, [category]);

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

// export default CategoryHeadset;





// import './CategoryHeadset.css';
// import { useParams } from 'react-router-dom';



// const CategoryHeadset = () => {
//     const { id } = useParams();

//     return (
//         <section className="categoryHeadset">
//             <h3 className="titleSection">Headset</h3>
//             <section className="sectionHeadset">
//                 <div className="containerHeadset">
//                     {/* {headsetProducts.map(product => (
//                         <Item key={product.id} {...product} />
//                     ))} */}
//                     <h4>Mirando el producto ID: {id}</h4>
//                 </div>
//             </section>
//         </section>
//     );
// };

// export default CategoryHeadset;
