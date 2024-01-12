import "./ItemDetail.css";

const ItemDetail = ({id, reference, category, price, img}) => {
    return (
        <article>
            <h3 className="category"> {category} </h3>
            <p className="id"> ID: {id} </p>
            <p className="reference"> {reference} <span className="price"> ...${price} </span></p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum maxime hic minima sint ab dicta laboriosam, architecto voluptatibus voluptatem quidem deserunt corporis molestiae odit magni perspiciatis, necessitatibus voluptas rerum?</p>
            <img src={img} alt={category} />
        </article>
    )
}

export default ItemDetail
