
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


            {quantityTotal === 0 ? (
                <>
                    <section className="emptyCartSection">
                        <div className="animationGif">
                            <div className="followBuying">
                                {/* <div className="emptyCartIcon"></div> */}
                                {/* <img src="../img/emptyBag.gif" alt="" className="emptyCartIcon" /> */}
                                <div className="noProducts">
                                    <img src="../img/emptyCart.svg" alt="" className="emptyCart" />
                                    <p className="emptyCartNoProducts">No products</p>
                                </div>
                            </div>
                        </div>
                        <Link to="./ItemListContainer" className="emptyCartLink" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>View products. Enjoy it!!! 🚀</Link>
                    </section>
                </>
            ) : (
                <>
                    <h3 className="title">ShoppingCart</h3>
                    <section className="shoppingItem">
                        <h3 className="categoryTitle">Item</h3>
                        <h3 className="categoryTitle">Pricing</h3>
                        <h3 className="categoryTitle">Quantity</h3>
                        <h3 className="categoryTitle">Total</h3>
                    </section>

                    <section className="shoppingProducts">
                        {cart.map(({ item, quantity }) => (
                            <CartItem key={item.id} item={item} quantity={quantity} onDelete={() => deleteProduct(item.id)} />
                        ))}
                    </section>
                    {quantityTotal > 0 && (
                    <section className="emptyCart">
                        <div className="emptySection">
                            <p className="emptyCartWord">Empty shopping cart</p>
                            <img className="emptyCartIcon" onClick={() => emptyCart()} src="/img/trashEmpty.svg" alt="trash icon" />
                        </div>
                        <Link to="./ItemListContainer" className="emptyCartLink" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>View products 🚀</Link>
                    </section>
                    )}
                    <section className="totalProduct">
                        <p className="sumTotal">Total <span className="numberTotal">...${total}</span></p>
                        <Link to="/checkout" className="btnPaymentTotal">Ending shopping</Link>
                    </section>
                </>
            )}

        </section>
    );
}

export default ShoppingCart;
