import React from "react";
import heroSectionImahe from "../assets/hero1-min.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroSectionImahe}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 h-full flex items-center relative z-10">
        <div className="max-w-lg text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-4 leading-tight">
            Performance You Can Trust
          </h1>
          <p className="text-lg md:text-xl mb-8 font-sans">
            Where design meets performance — built to impress and inspire
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 font-sans font-medium tracking-wide hover:bg-amber-700 hover:text-white transition-colors !rounded-button whitespace-nowrap cursor-pointer">
            SHOP COLLECTION
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
