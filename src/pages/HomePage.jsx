import React from "react";
import Header from "../Components/HomePage/Header"
import Banner from "../Components/HomePage/Banner";
import CTA from "../Components/CTA/CTA";
import Footer from "../Components/Footer/Footer";
import ImageSlider from "../Components/ImageSlider/ImageSlider";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ImageSlider />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
