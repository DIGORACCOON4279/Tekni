import "./ItemDetail.css";

const ItemDetail = ({id, reference, category, price, img, children}) => {
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
                    <p className="description"> <span className="titleDescription">Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum maxime hic minima sint ab dicta laboriosam, architecto voluptatibus voluptatem quidem deserunt corporis molestiae odit magni perspiciatis, necessitatibus voluptas rerum?</p>
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
