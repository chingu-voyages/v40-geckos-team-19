import React from "react";
import Banner from "../Components/HomePage/Banner";
import CTA from "../Components/CTA/CTA";
import Footer from "../Components/Footer/Footer";
import ImageSlider from "../Components/ImageSlider/ImageSlider";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ImageSlider />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
