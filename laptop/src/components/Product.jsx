import React from "react";
import image1 from '../assets/1-min.jpg';
import image2 from '../assets/2-min.jpg';
import image3 from '../assets/3-min.jpg';
import image4 from '../assets/4-min.jpg';
import image5 from '../assets/5-min.jpg';
import image6 from '../assets/6-min.jpg';
import image7 from '../assets/7-min.jpg';
import image8 from '../assets/8-min.jpg';


const Product = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-center mb-16 tracking-wide">
          BESTSELLERS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Tech Nova",
              price: "$120",
              image: image1,
            },
            {
              name: "Pixel Core",
              price: "$135",
              image: image2,
            },
            {
              name: "Lumen Edge",
              price: "$95",
              image: image3,
            },
            {
              name: "VibeBook Pro",
              price: "$180",
              image: image4,
            },
            {
                name: "Quantum Zen",
                price: "$130",
                image: image5,
              },
              {
                name: "Neo Forge",
                price: "$100",
                image: image6,
              },
              {
                name: "Fusion Pulse",
                price: "$100",
                image: image7,
              },
              {
                name: "Strato Max",
                price: "$100",
                image: image8,
              },

          ].map((product, index) => (
            <div key={index} className="group">
              <div className="mb-4 overflow-hidden mt-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium mb-1">{product.name}</h3>
              {/* <p className="text-sm text-gray-600 font-sans mb-2">
                {product.description}
              </p> */}
              <div className="flex items-center justify-between">
                <span className="font-medium">{product.price}</span>
                <button className="bg-gray-900 text-white px-4 py-2 text-sm font-sans hover:bg-amber-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
