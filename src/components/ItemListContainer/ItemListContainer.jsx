import {useState, useEffect} from "react";
import Footer from "../Footer/Footer";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { getProducts } from "../../asyncmock";

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    getProducts()
      .then(response => setProducts(response))
  }, [])

  return (
    // No aparece en pantalla al dar click a products
      <section>
        <h2>{greeting}</h2>
        <ItemList products={products} />
        <Footer/>
      </section>
    )
}

export default ItemListContainer
