
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({products}) => {
    return (

        // <main className="container">

            <section className="cardContainer">

                {products.map(product => <Item key={product.id} {...product} />)}

            </section>

        // </main>
    )
}

export default ItemList
