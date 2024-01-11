
import Item from "../Item/Item";
import "./ItemList.css"

// Se hara un solo componente para los ProductCards en el momento lo realice asi
// para ver como van distribuidos e irlos organizando por categoria y precio

const ItemList = ({products}) => {
    return (

        // <main className="container">

            <section className="cardContainer">

                {products.map(product => <Item key={product.id} {...product} />)}

                {/* Estos ejercicios props me servirian para ña descripcion de los productos
                <Item img="https://primera-entrega-tekni.vercel.app/img/tv1.webp" title="SmartTV" reference="HNK-01" price="1599">
                    <p className="soldOut">SoldOut</p>
                </Item>
                <Item img="" title=""reference="" price=""/>
                <Item/>
                <Item/>
                <Item img="https://primera-entrega-tekni.vercel.app/img/smartphone4.webp" title="Smartphone" reference="NLX-04" price="799"/>
                <Item img="" title="" reference="" price="">
                    <p className="soldOut">SoldOut</p>
                </Item>
                <Item/> */}
            </section>

        // </main>
    )
}

export default ItemList
