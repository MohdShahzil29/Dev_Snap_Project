import React from "react";
import HeroSection from "./HeroSection";
import Product from "./Product";
import BrandStory from "./BrandStory";
import Newsletter from "./Newsletter";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Product />
      <BrandStory />
      <Newsletter />
    </div>
  );
};

export default HomePage;
