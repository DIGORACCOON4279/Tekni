import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryHeadset from "./components/CategoryHeadset/CategoryHeadset";
import CategorySmartphone from "./components/CategorySmartphone/CategorySmartphone";
import CategoryLaptop from "./components/CategoryLaptop/CategoryLaptop";
import CategorySmartTv from "./components/CategorySmartTv/CategorySmartTv";
import Home from "./components/Home/Home";
// import Error404 from "./components/Error404/Error404";



// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import Advantages from "./components/Advantages/Advantages";
// import Smartphone from "./components/Smartphone/Smartphone";
// import Headset from "./components/Headset/Headset";
// import SmartTvs from "./components/SmartTvs/SmartTvs";
// import Laptops from "./components/Laptops/Laptops";
// import NewGeneration from "./components/NewGeneration/NewGeneration";
// import TheBestSellers from "./components/TheBestSellers/TheBestSellers";
// import ArrowUp from "./components/ArrowUp/ArrowUp";
// import WhiteLine from "./components/WhiteLine/WhiteLine";
// import HeroSection from "./components/HeroSection/HeroSection";
import Body from "./components/Body/Body";
import NavBar from "./components/NavBar/NavBar";
import ArrowUp from "./components/ArrowUp/ArrowUp";
import Footer from "./components/Footer/Footer";

// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Body />
        <NavBar/>
        <Routes>
            <Route path="/categoryHeadset" element={<CategoryHeadset/>}/>
            <Route path="/categorySmartphone" element={<CategorySmartphone/>}/>
            <Route path="/categoryLaptop" element={<CategoryLaptop/>}/>
            <Route path="/categorySmartTv" element={<CategorySmartTv/>}/>
            <Route path="/home" element={<Home/>}/>
            {/* Error404 se le da un enlace para retomar el home
            <Route path="*" element={<h2 className="construction">Under construction</h2>}/> */}
          </Routes>
          <ArrowUp/>
          <Footer />
      </BrowserRouter>



      {/* <CategoryHeadset greeting=" ⚡ Get 35%  off on all our devices this Black Friday!!! ⚡."/> */}
      {/* <CategorySmartphone greeting=" ⚡ Get 35%  off on all our devices this Black Friday!!! ⚡." /> */}
      {/* <CategoryLaptop greeting=" ⚡ Get 35%  off on all our devices this Black Friday!!! ⚡." /> */}
      {/* <CategorySmartTv greeting=" ⚡ Get 35%  off on all our devices this Black Friday!!! ⚡."/> */}
      {/* <ItemDetailContainer greeting=" ⚡ Get 35%  off on all our devices this Black Friday!!! ⚡." /> */}
      {/* <ItemListContainer greeting=" ⚡ Get 35%  off on all our devices this Black Friday!!! ⚡."/> */}


      {/* <WhiteLine/> */}
      {/* <TheBestSellers/> */}
      {/* <NewGeneration/> */}
      {/* <Laptops/> */}
      {/* <Headset/> */}
      {/* <SmartTvs /> */}
      {/* <Smartphone/> */}
      {/* <Advantages /> */}

    </>
  )
}

export default App
