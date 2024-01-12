
import Item from "../Item/Item";
import "./ItemList.css";

// Se hara un solo componente para los ProductCards en el momento lo realice asi
// para ver como van distribuidos e irlos organizando por categoria y precio

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
