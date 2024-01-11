import {useState, useEffect} from "react";
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
      <section>
        <h2>{greeting}</h2>
        <ItemList products={products} />
      </section>
    )
}

export default ItemListContainer
