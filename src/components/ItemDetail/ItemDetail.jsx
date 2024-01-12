import "./ItemDetail.css";

const ItemDetail = ({id, reference, category, price, img, children}) => {
    return (
        <article className="cardItem">
            <section className="imgCounter">
                <img className="image" src={img} alt={category} />
                {children}
            </section>
            <section className="categoryInfo">
                <h3 className="category"> {category} </h3>
                <div className="info">
                    <p className="id"> ID: {id} </p>
                    <p className="reference"> {reference} <span className="price"> ...${price} </span></p>
                </div>
                <p className="description"> Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum maxime hic minima sint ab dicta laboriosam, architecto voluptatibus voluptatem quidem deserunt corporis molestiae odit magni perspiciatis, necessitatibus voluptas rerum?</p>
            </section>

        </article>
    )
}

export default ItemDetail
