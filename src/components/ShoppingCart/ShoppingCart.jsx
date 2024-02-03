// import Counter from "../Counter/Counter";
// import CartItem from "../CartItem/CartItem";
// import { Link } from "react-router-dom";
// import { CartContext } from "../../context/CartContext";
// import { useContext } from "react";
// import "./ShoppingCart.css";

// // Este componente cambiara reusando un solo componente para que se renderize en shoppingCart
// // Agregar stock e initial desde Counter, class Context

// const ShoppingCart = () => {

//     const {cart, emptyCart, total, quantityTotal} = useContext(CartContext);

//     // Esto me lo muestra si no hay nada

//     // if(quantityTotal === 0) {
//     //     return (
//     //         <>
//     //             <h2>No products</h2>
//     //             <Link to="./ItemListContainer"> View products </Link>
//     //         </>
//     //     )
//     // }



//     return (



//         <section className="shoppingCartSection">
//             {/* {

//                 cart.map(product => <CartItem key={product.id} {...product} />)

//             } */}

//             {/* <h3> Total: $ {total} </h3>
//             <button onClick={() => emptyCart()}> Empty cart</button>
//             <Link to="/checkout"> Ending purchase </Link> */}


//             <label htmlFor="cartWidget">
//                 <img className="close" src="/img/close.svg" alt="" />
//             </label>
//             <h3 className="title">ShoppingCart</h3>
//             <section className="shoppingItem">
//                 <h3 className="categoryTitle">Item</h3>
//                 <h3 className="categoryTitle">Pricing</h3>
//                 <h3 className="categoryTitle">Quantity</h3>
//                 <h3 className="categoryTitle">Total</h3>
//             </section>

//             {/* Esta seccion es prueba y como quedara los componentes del shopping cart por producto */}

//             <section className="shoppingProducts">

//                 <article className="productItem">
//                     <section className="iconMenu">
//                         <img className="productImage" src="/img/smartphone1.webp" alt="" />
//                         <div className="iconOption">
//                             <img className="icon" src="/img/trash.svg" alt="Trash icon" />
//                             <img className="icon" src="/img/edit.svg" alt="Edit icon" />
//                             <img className="icon" src="/img/share.svg" alt="share icon" />
//                             <img className="icon" src="/img/heart.svg" alt="Herat icon" />
//                         </div>
//                     </section>
//                     <p className="price">$799</p>
//                     <div className="counterProduct">


//                     </div>
//                     <p className="priceTotal">$799</p>
//                 </article>

//                 <article className="productItem">
//                     <section className="iconMenu">
//                         <img className="productImage" src="/img/laptop5.webp" alt="" />
//                         <div className="iconOption">
//                             <img className="icon" src="/img/trash.svg" alt="Trash icon" />
//                             <img className="icon" src="/img/edit.svg" alt="Edit icon" />
//                             <img className="icon" src="/img/share.svg" alt="share icon" />
//                             <img className="icon" src="/img/heart.svg" alt="Herat icon" />
//                         </div>
//                     </section>
//                     <p className="price">$1099</p>
//                     <div className="counterProduct">


//                     </div>
//                     <p className="priceTotal">$1099</p>
//                 </article>
//                 <article className="productItem">
//                     <section className="iconMenu">
//                         <img className="productImage"src="/img/tv2.webp" alt="" />
//                         <div className="iconOption">
//                             <img className="icon" src="/img/trash.svg" alt="Trash icon" />
//                             <img className="icon" src="/img/edit.svg" alt="Edit icon" />
//                             <img className="icon" src="/img/share.svg" alt="share icon" />
//                             <img className="icon" src="/img/heart.svg" alt="Herat icon" />
//                         </div>
//                     </section>
//                     <p className="price">$1599</p>
//                     <div className="counterProduct">


//                     </div>
//                     <p className="priceTotal">$1599</p>
//                 </article>
//                 <article className="productItem">
//                     <section className="iconMenu">
//                         <img className="productImage"src="/img/headset4.webp" alt="" />
//                         <div className="iconOption">
//                             <img className="icon" src="/img/trash.svg" alt="Trash icon" />
//                             <img className="icon" src="/img/edit.svg" alt="Edit icon" />
//                             <img className="icon" src="/img/share.svg" alt="share icon" />
//                             <img className="icon" src="/img/heart.svg" alt="Herat icon" />
//                         </div>
//                     </section>
//                     <p className="price">$179</p>
//                     <div className="counterProduct">
//                     </div>
//                     <p className="priceTotal">$179</p>
//                 </article>
//                 <article className="productItem">
//                     <section className="iconMenu">
//                         <img className="productImage" src="/img/headset11.webp" alt="" />
//                         <div className="iconOption">
//                             <img className="icon" src="/img/trash.svg" alt="Trash icon" />
//                             <img className="icon" src="/img/edit.svg" alt="Edit icon" />
//                             <img className="icon" src="/img/share.svg" alt="share icon" />
//                             <img className="icon" src="/img/heart.svg" alt="Herat icon" />
//                         </div>
//                     </section>
//                     <p className="price">$179</p>
//                     <div className="counterProduct">
//                     </div>
//                     <p className="priceTotal">$179</p>
//                 </article>
//             </section>

//             <section className="emptyCart">
//                 <p className="emptyCartWord">Empty shopping cart</p>
//                 <img className="emptyCartIcon" onClick={() => emptyCart()} src="/img/trashEmpty.svg" alt="trash icon" />
//             </section>
//             <section className="totalProduct">
//                 <p className="sumTotal">Total <span className="numberTotal">...${total}</span></p>
//                 <Link to="/checkout" className="btnPaymentTotal"> Ending shopping </Link>


//             </section>
//         </section>

//     )
// }

// export default ShoppingCart




// Este es el que sirve

// import CartItem from "../CartItem/CartItem";
// import { Link } from "react-router-dom";
// import { CartContext } from "../../context/CartContext";
// import { useContext } from "react";
// import "./ShoppingCart.css";

// // Este componente cambiara reusando un solo componente para que se renderize en shoppingCart
// // Agregar stock e initial desde Counter, class Context

// const ShoppingCart = () => {

//     const {cart, emptyCart, total, quantityTotal, deleteProduct} = useContext(CartContext);

//     // Esto me lo muestra si no hay nada

//     // if(quantityTotal === 0) {
//     //     return (
//     //         <>
//     //             <h2>No products</h2>
//     //             <Link to="./ItemListContainer"> View products </Link>
//     //         </>
//     //     )
//     // }


//     return (



//         <section className="shoppingCartSection">


//             {/* <h3> Total: $ {total} </h3>
//             <button onClick={() => emptyCart()}> Empty cart</button>
//             <Link to="/checkout"> Ending purchase </Link> */}


//             <label htmlFor="cartWidget">
//                 <img className="close" src="/img/close.svg" alt="" />
//             </label>
//             <h3 className="title">ShoppingCart</h3>
//             <section className="shoppingItem">
//                 <h3 className="categoryTitle">Item</h3>
//                 <h3 className="categoryTitle">Pricing</h3>
//                 <h3 className="categoryTitle">Quantity</h3>
//                 <h3 className="categoryTitle">Total</h3>
//             </section>

//             {/* Esta seccion es prueba y como quedara los componentes del shopping cart por producto */}

//             <section className="shoppingProducts">

//             {/* Con cuanlquiera de los dos funciona */}

//             {cart.map(({ item, quantity }) => (

//                 <CartItem key={item.id} item={item} quantity={quantity} onDelete={() => deleteProduct(item.id)} />

//             ))}

//             {/* {

//                 cart.map(product => <CartItem key={product.id} {...product} />)

//             } */}

//                 {/* <article className="productItem">
//                     <section className="iconMenu">
//                         <img className="productImage" src="/img/headset11.webp" alt="" />
//                         <div className="iconOption">
//                             <img className="icon" src="/img/trash.svg" alt="Trash icon" />
//                             <img className="icon" src="/img/edit.svg" alt="Edit icon" />
//                             <img className="icon" src="/img/share.svg" alt="share icon" />
//                             <img className="icon" src="/img/heart.svg" alt="Herat icon" />
//                         </div>
//                     </section>
//                     <p className="price">$179</p>
//                     <div className="counterProduct">
//                     </div>
//                     <p className="priceTotal">$179</p>
//                 </article> */}


//             </section>

//             <section className="emptyCart">
//                 <p className="emptyCartWord">Empty shopping cart</p>
//                 <img className="emptyCartIcon" onClick={() => emptyCart()} src="/img/trashEmpty.svg" alt="trash icon" />
//             </section>
//             <section className="totalProduct">
//                 <p className="sumTotal">Total <span className="numberTotal">...${total}</span></p>
//                 <Link to="/checkout" className="btnPaymentTotal"> Ending shopping </Link>


//             </section>
//         </section>

//     )
// }

// export default ShoppingCart









// import CartItem from "../CartItem/CartItem";
// import { Link } from "react-router-dom";
// import { CartContext } from "../../context/CartContext";
// import { useContext } from "react";
// import "./ShoppingCart.css";

// const ShoppingCart = () => {
//     const { cart, emptyCart, total, quantityTotal, deleteProduct } = useContext(CartContext);

//     return (
//         <section className="shoppingCartSection">
//             <label htmlFor="cartWidget">
//                 <img className="close" src="/img/close.svg" alt="" />
//             </label>
//             <h3 className="title">ShoppingCart</h3>
//             <section className="shoppingItem">
//                 <h3 className="categoryTitle">Item</h3>
//                 <h3 className="categoryTitle">Pricing</h3>
//                 <h3 className="categoryTitle">Quantity</h3>
//                 <h3 className="categoryTitle">Total</h3>
//             </section>

//             {quantityTotal === 0 ? (
//                 <div className="emptyCart">
//                     <p className="emptyCartWord">No products</p>
//                     <Link to="./ItemListContainer" className="emptyCartLink">View products</Link>
//                 </div>
//             ) : (
//                 <section className="shoppingProducts">
//                     {cart.map(({ item, quantity }) => (
//                         <CartItem key={item.id} item={item} quantity={quantity} onDelete={() => deleteProduct(item.id)} />
//                     ))}
//                 </section>
//             )}

//             <section className="totalProduct">
//                 <p className="sumTotal">Total <span className="numberTotal">...${total}</span></p>
//                 <Link to="/checkout" className="btnPaymentTotal">Ending shopping</Link>
//             </section>
//         </section>
//     );
// }

// export default ShoppingCart



// Este es el que mas ha servido

// Con este funciona igual a de abajo, pero abre otra ventana en el navegador



// import CartItem from "../CartItem/CartItem";
// import { Link } from "react-router-dom";
// import { CartContext } from "../../context/CartContext";
// import { useContext } from "react";
// import "./ShoppingCart.css";

// const ShoppingCart = () => {
//     const { cart, emptyCart, total, quantityTotal, deleteProduct } = useContext(CartContext);

//     return (
//         <section className="shoppingCartSection">
//             <label htmlFor="cartWidget">
//                 <img className="close" src="/img/close.svg" alt="" />
//             </label>
//             <h3 className="title">ShoppingCart</h3>
//             <section className="shoppingItem">
//                 <h3 className="categoryTitle">Item</h3>
//                 <h3 className="categoryTitle">Pricing</h3>
//                 <h3 className="categoryTitle">Quantity</h3>
//                 <h3 className="categoryTitle">Total</h3>
//             </section>

//             {quantityTotal === 0 ? (
//                 <div className="emptyCart">
//                     <p className="emptyCartWord">No products</p>
//                     <Link to="./ItemListContainer" target="_blank" className="emptyCartLink">View products</Link>
//                 </div>
//             ) : (
//                 <>
//                     <section className="shoppingProducts">
//                         {cart.map(({ item, quantity }) => (
//                             <CartItem key={item.id} item={item} quantity={quantity} onDelete={() => deleteProduct(item.id)} />
//                         ))}
//                     </section>

//                 </>
//             )}

//             <section className="emptyCart">
//                 <p className="emptyCartWord">Empty shopping cart</p>
//                 <img className="emptyCartIcon" onClick={() => emptyCart()} src="/img/trashEmpty.svg" alt="trash icon" />
//             </section>


//             <section className="totalProduct">
//                 <p className="sumTotal">Total <span className="numberTotal">...${total}</span></p>
//                 <Link to="/checkout" className="btnPaymentTotal">Ending shopping</Link>
//             </section>
//         </section>
//     );
// }

// export default ShoppingCart



// Con este se va directo a la seccion pero tiene que darle cerrar al shoppingCart


import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "./ShoppingCart.css";

const ShoppingCart = () => {
    const { cart, emptyCart, total, quantityTotal, deleteProduct } = useContext(CartContext);

    return (
        <section className="shoppingCartSection">
            <label htmlFor="cartWidget">
                <img className="close" src="/img/close.svg" alt="" />
            </label>
            <h3 className="title">ShoppingCart</h3>
            <section className="shoppingItem">
                <h3 className="categoryTitle">Item</h3>
                <h3 className="categoryTitle">Pricing</h3>
                <h3 className="categoryTitle">Quantity</h3>
                <h3 className="categoryTitle">Total</h3>
            </section>

            {quantityTotal === 0 ? (
                <div className="emptyCart">
                    <p className="emptyCartWord">No products</p>
                    <Link to="./ItemListContainer" className="emptyCartLink" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>View products</Link>
                </div>
            ) : (
                <>
                    <section className="shoppingProducts">
                        {cart.map(({ item, quantity }) => (
                            <CartItem key={item.id} item={item} quantity={quantity} onDelete={() => deleteProduct(item.id)} />
                        ))}
                    </section>

                    <section className="emptyCart">
                        <p className="emptyCartWord">Empty shopping cart</p>
                        <img className="emptyCartIcon" onClick={() => emptyCart()} src="/img/trashEmpty.svg" alt="trash icon" />
                    </section>
                </>
            )}

            <section className="totalProduct">
                <p className="sumTotal">Total <span className="numberTotal">...${total}</span></p>
                <Link to="/checkout" className="btnPaymentTotal">Ending shopping</Link>
            </section>
        </section>
    );
}

export default ShoppingCart
