import "./ItemDetail.css";

const ItemDetail = ({id, reference, category, price, img, features, compatibility, updates, children}) => {
    return (
        <article className="cardItem">
            <figure className="imgCounter">
                <img className="image" src={img} alt={category} />
            </figure>
            <section className="categoryInfo">
                <h3 className="category"> {category} </h3>
                <div className="info">
                    <p className="id"> ID: {id} </p>
                    <p className="reference"> {reference} <span className="price"> ...${price} </span></p>

                    <div className="description">
                        <p className="title">Description:</p>
                        <section className="descriptionProduct">
                            <p className="features"><span>Features: </span>{features}</p>
                            <p className="compatibility"><span>Compatibility: </span>{compatibility}</p>
                            <p className="compatibility"><span>Updates: </span>{updates}</p>
                        </section>
                    </div>

                </div>
                <div className="add">
                    {children}
                    <button className="addToCart">Add to cart</button>
                </div>
            </section>
        </article>
    )
}

export default ItemDetail
