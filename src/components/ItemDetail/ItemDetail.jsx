import "./ItemDetail.css";

const ItemDetail = ({id, reference, category, price, img, children}) => {
    return (
        <article>
            <h3 className="category"> {category} </h3>
            <p className="id"> ID: {id} </p>
            <p className="reference"> {reference} <span className="price"> ...${price} </span></p>
            <img src={img} alt={category} />
            {children}
            <p className="description"> Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum maxime hic minima sint ab dicta laboriosam, architecto voluptatibus voluptatem quidem deserunt corporis molestiae odit magni perspiciatis, necessitatibus voluptas rerum?</p>
        </article>
    )
}

export default ItemDetail
