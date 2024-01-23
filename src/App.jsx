import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Body from "./components/Body/Body";
import NavBar from "./components/NavBar/NavBar";
import ArrowUp from "./components/ArrowUp/ArrowUp";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/Error404/Error404";

const App = () => {
  console.log
  return (
    <>
      <BrowserRouter>
        <Body/>
        <NavBar/>
        <ArrowUp/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App


