import "./ItemDetail.css";

const ItemDetail = ({id, reference, category, price, img, features, compatibility, updates, children}) => {
    return (
        <article className="cardItem">
            <figure className="imgCounter">
                <img className="image" src={img} alt={category} />
            </figure>
            <section className="categoryInfo">
                <div className="titleRating">
                    <h3 className="category"> {category} </h3>
                    <img className="rating" src="/img/rating.svg" alt="Rating start"/>
                </div>
                <div className="info">
                    <p className="id"> ID: {id} </p>
                    <p className="reference"> {reference} <span className="price"> ...${price} </span></p>
                    <div className="description">
                        <p className="title">Description:</p>
                        <section className="descriptionProduct">
                            <p className="features"><span>Key Features: </span>{features}</p>
                            <p className="compatibility"><span>Connectivity and Compatibility: </span>{compatibility}</p>
                            <p className="compatibility"><span>Operating System and Updates:  </span>{updates}</p>
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
