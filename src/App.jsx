import Advertising from "./components/Advertising/Advertising";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Advantages from "./components/Advantages/Advantages";
import Smartphone from "./components/Smartphone/Smartphone";
import Headset from "./components/Headset/Headset";
import SmartTvs from "./components/SmartTvs/SmartTvs";
import Laptops from "./components/Laptops/Laptops";
import NewGeneration from "./components/NewGeneration/NewGeneration";
import TheBestSellers from "./components/TheBestSellers/TheBestSellers";
import ArrowUp from "./components/ArrowUp/ArrowUp";
import WhiteLine from "./components/WhiteLine/WhiteLine";
import HeroSection from "./components/HeroSection/HeroSection";
import Body from "./components/Body/Body";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <Body/>
      <NavBar/>
      <Advertising/>
      <ItemDetailContainer/>
      <ItemListContainer greeting=" ⚡ Get 35%  off on all our devices this Black Friday!!! ⚡."/>
      <HeroSection/>
      <ArrowUp/>
      <WhiteLine/>
      <TheBestSellers/>
      <NewGeneration/>
      <Laptops/>
      <SmartTvs/>
      <Headset/>
      <Smartphone/>
      <Advantages />
      <Footer />
    </>
  )
}

export default App
