import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({id, reference, category, price, img}) => {
    return (
        <div className="cardProduct">
            <img src={img} alt={category}/>
            <div className="description">
                <div className="titleRating">
                    <h3>{category}</h3>
                    <img className="rating" src="/img/rating.svg" alt="Rating star"  />
                </div>
                <p> ID: {id} </p>
                <p>{reference}<span>...${price}</span></p>
            </div>
            <Link to={`/item/${id}`} className="ctaDetailProduct">View product</Link>
            {/* <button>View product</button> */}
        </div>
    )
}

export default Item
