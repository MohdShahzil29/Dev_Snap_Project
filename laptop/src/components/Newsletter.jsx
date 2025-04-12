import React from "react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl mb-4 tracking-wide">JOIN OUR WORLD</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8 font-sans">
          Join us for exclusive offers, first looks at new laptops, and
          personalized tech updates
        </p>

        <div className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 border-none focus:ring-1 focus:ring-amber-700 outline-none text-sm"
          />
          <button className="bg-gray-900 text-white px-6 py-3 font-sans font-medium tracking-wide hover:bg-amber-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
