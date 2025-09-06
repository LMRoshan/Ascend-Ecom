import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Category from "../components/Categories";
import { firstThreeCards } from "../Data/CategoryData";
import BestSeller from "../components/BestSeller";
import Review from "../components/Review";
import Footer from "../components/Footer";

const Home = () => {
  

  return (
    <div>
      <Navbar />
      <Banner />
      <Category cards={firstThreeCards} buttonVisibility={true}/>
      <BestSeller />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
