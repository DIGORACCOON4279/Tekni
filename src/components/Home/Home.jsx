
import Advantages from "../Advantages/Advantages";
import Smartphone from "../Smartphone/Smartphone";
import SmartTvs from "../SmartTvs/SmartTvs";
import Headset from "../Headset/Headset";
import Laptops from "../Laptops/Laptops";
import NewGeneration from "../NewGeneration/NewGeneration";
import TheBestSellers from "../TheBestSellers/TheBestSellers";
import WhiteLine from "../WhiteLine/WhiteLine";
import HeroSection from "../HeroSection/HeroSection";
import "./Home.css";

const Home = () => {
  return (
    <div>
        <h2>⚡ Get 35%  off on all our devices this Black Friday!!! ⚡</h2>
        <HeroSection />
        <WhiteLine/>
        <TheBestSellers/>
        <NewGeneration/>
        <Laptops/>
        <Headset/>
        <SmartTvs />
        <Smartphone/>
        <Advantages />
    </div>
  )
}

export default Home
