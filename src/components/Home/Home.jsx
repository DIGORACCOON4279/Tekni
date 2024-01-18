// import Footer from "../Footer/Footer";


import ArrowUp from "../ArrowUp/ArrowUp";

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
    <>
        <HeroSection />
        <WhiteLine/>
        <TheBestSellers/>
        <NewGeneration/>
        <Laptops/>
        <Headset/>
        <SmartTvs />
        <Smartphone/>
        <Advantages />
        <ArrowUp/>
        {/* <Footer /> */}

    </>
  )
}

export default Home
