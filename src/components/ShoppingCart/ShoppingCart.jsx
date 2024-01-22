import Counter from "../Counter/Counter";
import "./ShoppingCart.css";

// Este componente cambiara reusando un solo compponente para que se renderize en shoppingCart

const ShoppingCart = () => {
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

            {/* Esta seccion es prueba y como quedara los componentes del shopping cart por producto */}

            <section className="shoppingProducts">
                <article className="productItem">
                    <section className="iconMenu">
                        <img className="productImage" src="/img/smartphone1.webp" alt="" />
                        <div className="iconOption">
                            <img className="icon" src="/img/trash.svg" alt="Trash icon" />
                            <img className="icon" src="/img/edit.svg" alt="Edit icon" />
                            <img className="icon" src="/img/share.svg" alt="share icon" />
                            <img className="icon" src="/img/heart.svg" alt="Herat icon" />
                        </div>
                    </section>
                    <p className="price">$799</p>
                    <div className="counterProduct">
                        <Counter stock={5} initial={1}/>
                    </div>
                    <p className="priceTotal">$799</p>
                </article>
                <article className="productItem">
                    <section className="iconMenu">
                        <img className="productImage" src="/img/laptop5.webp" alt="" />
                        <div className="iconOption">
                            <img className="icon" src="/img/trash.svg" alt="Trash icon" />
                            <img className="icon" src="/img/edit.svg" alt="Edit icon" />
                            <img className="icon" src="/img/share.svg" alt="share icon" />
                            <img className="icon" src="/img/heart.svg" alt="Herat icon" />
                        </div>
                    </section>
                    <p className="price">$1099</p>
                    <div className="counterProduct">
                        <Counter stock={5} initial={1}/>
                    </div>
                    <p className="priceTotal">$1099</p>
                </article>
                <article className="productItem">
                    <section className="iconMenu">
                        <img className="productImage"src="/img/tv2.webp" alt="" />
                        <div className="iconOption">
                            <img className="icon" src="/img/trash.svg" alt="Trash icon" />
                            <img className="icon" src="/img/edit.svg" alt="Edit icon" />
                            <img className="icon" src="/img/share.svg" alt="share icon" />
                            <img className="icon" src="/img/heart.svg" alt="Herat icon" />
                        </div>
                    </section>
                    <p className="price">$1599</p>
                    <div className="counterProduct">
                        <Counter stock={5} initial={1}/>
                    </div>
                    <p className="priceTotal">$1599</p>
                </article>
                <article className="productItem">
                    <section className="iconMenu">
                        <img className="productImage"src="/img/headset4.webp" alt="" />
                        <div className="iconOption">
                            <img className="icon" src="/img/trash.svg" alt="Trash icon" />
                            <img className="icon" src="/img/edit.svg" alt="Edit icon" />
                            <img className="icon" src="/img/share.svg" alt="share icon" />
                            <img className="icon" src="/img/heart.svg" alt="Herat icon" />
                        </div>
                    </section>
                    <p className="price">$179</p>
                    <div className="counterProduct">
                        <Counter stock={5} initial={1}/>
                    </div>
                    <p className="priceTotal">$179</p>
                </article>
                <article className="productItem">
                    <section className="iconMenu">
                        <img className="productImage" src="/img/headset11.webp" alt="" />
                        <div className="iconOption">
                            <img className="icon" src="/img/trash.svg" alt="Trash icon" />
                            <img className="icon" src="/img/edit.svg" alt="Edit icon" />
                            <img className="icon" src="/img/share.svg" alt="share icon" />
                            <img className="icon" src="/img/heart.svg" alt="Herat icon" />
                        </div>
                    </section>
                    <p className="price">$179</p>
                    <div className="counterProduct">
                        <Counter stock={5} initial={1}/>
                    </div>
                    <p className="priceTotal">$179</p>
                </article>
            </section>
            <section className="emptyCart">
                <p className="emptyCartWord">Empty shopping cart</p>
                <img className="emptyCartIcon"src="/img/trashEmpty.svg" alt="trash icon" />
            </section>
            <section className="totalProduct">
                <p className="sumTotal">Total <span className="numberTotal">...$2087</span></p>
                <button type="button" className="btnPaymentTotal">Secure checkout</button>
            </section>
        </section>
    )
}

export default ShoppingCart
