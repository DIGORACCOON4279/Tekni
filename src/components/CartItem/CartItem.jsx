import "./CartItem.css";

const CartItem = ( { item, quantity, onDelete }) => {

    return (
        <article className="productItem">
            <section className="iconMenu">
                <div className="productFeatures">
                    <img className="productImage" src={item.img} alt={item.category} />
                </div>
                <div className="iconOption">
                    <div className="features">
                        <p className="category">{item.category}</p>
                        <p className="reference">{item.reference}</p>
                    </div>
                    <img className="rating" src="/img/rating.svg" alt="Rating star"  />
                    <div className="icons">
                        <img className="icon" src="/img/trash.svg"  alt="Trash icon" onClick={onDelete}/>
                    </div>
                </div>
            </section>
            <p className="price">${item.price}</p>
            <div className="counterProduct">{quantity}</div>
            <p className="priceTotal">${item.price * quantity}</p>
        </article>
    );
};

export default CartItem;

