
import {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";

// import { getProducts, getProductsByCategory } from "../../asyncmock";

import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, where, query } from "firebase/firestore";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {idCategory} = useParams();

    useEffect( () => {
      const myProducts = idCategory ? query(collection(db, "products"), where ("idCat", "==", idCategory)) : collection(db, "products");

      getDocs(myProducts)
      .then(response => {
        const newProducts = response.docs.map(doc =>{
          const data =doc.data();
          return {id: doc.id, ...data};
        })
        setProducts(newProducts);
      })
      .catch(error => console.log("Inconsistencia ", error))

    }, [idCategory])

  // Esto funcionaba con asynmock

  // useEffect(() => {

  //     const functionProducts = idCategory ? getProductsByCategory : getProducts;

  //     functionProducts(idCategory)
  //       .then(response => setProducts(response))
  //       .catch(error => console.log(error))

  // }, [idCategory]);

  return (
      <section>
        <h2>⚡ Get 35%  off on all our devices this Black Friday!!! ⚡</h2>

        <ItemList products={products} />
      </section>
    )
}

export default ItemListContainer



