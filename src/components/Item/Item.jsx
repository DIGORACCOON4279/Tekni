import "./Item.css";

const Item = ({id, reference, category, price, img}) => {
    return (
        <div className="cardProduct">
            <img src={img} alt={category}/>
            <div className="description">
                <h3>{category}</h3>
                <p> ID: {id} </p>
                <p>{reference}<span>...${price}</span></p>
            </div>
            <button>View product</button>
        </div>
    )
}

export default Item
