
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({products}) => {
    return (
        <section className="cardContainer">

            {products.map(product => <Item key={product.id} {...product} />)}

        </section>
    )
}

export default ItemList
