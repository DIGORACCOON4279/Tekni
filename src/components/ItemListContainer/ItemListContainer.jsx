
import {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const {idCategory} = useParams();

  useEffect(() => {

      const functionProducts = idCategory ? getProductsByCategory : getProducts;

      functionProducts(idCategory)
        .then(response => setProducts(response))
        .catch(error => console.log(error))

  }, [idCategory]);

  return (
      <section>
        <h2>⚡ Get 35%  off on all our devices this Black Friday!!! ⚡</h2>
        <ItemList products={products} />
      </section>
    )
}

export default ItemListContainer
