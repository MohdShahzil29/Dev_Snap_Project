import React from "react";
import storyImage from "../assets/story.jpg";

const BrandStory = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src={storyImage}
              alt="Our Craft"
              className="w-full h-[500px] object-cover object-top"
            />
          </div>
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-3xl mb-6 tracking-wide">OUR STORY</h2>
            <p className="text-gray-700 mb-6 font-sans leading-relaxed">
              Since 2005, we’ve been building high-performance laptops that
              blend power, precision, and sleek design. Our engineers handpick
              top-tier components—from cutting-edge processors to vivid 4K
              displays.
            </p>
            <p className="text-gray-700 mb-8 font-sans leading-relaxed">
              Each laptop is crafted with care and tested for durability in our
              state-of-the-art lab. We believe a laptop is more than a
              device—it’s a gateway to creativity, productivity, and connection
              in today’s fast-paced digital world.
            </p>
            <button className="border border-gray-900 text-gray-900 px-8 py-3 font-sans font-medium tracking-wide hover:bg-gray-900 hover:text-white transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
