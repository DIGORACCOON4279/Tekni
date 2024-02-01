import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Body from "./components/Body/Body";
import NavBar from "./components/NavBar/NavBar";
import ArrowUp from "./components/ArrowUp/ArrowUp";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/Error404/Error404";
// import ShoppingCart from "./components/ShoppingCart/ShoppingCart";


const App = () => {
  console.log
  return (
    <>
      <BrowserRouter>
          <CartProvider>
              <Body/>
              <NavBar/>
              <ArrowUp/>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/category/:idCategory" element={<ItemListContainer />} />
                  <Route path="/item/:idItem" element={<ItemDetailContainer />} />
                  <Route path="*" element={<Error404 />} />
                  <Route path="/itemListContainer" element={<ItemListContainer/>}/>
                  <Route path="/shoppingCart" element={<h2> Coming soon shoppingCart  </h2>}/>
              </Routes>
              {/* <ShoppingCart/> */}
              <Footer />
          </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App


