import React, { useState, useEffect } from 'react';
import { IoIosCart } from "react-icons/io";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" font-serif">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider">PRISM</div>

          <nav className="hidden md:flex items-center space-x-8">
            {['HOME', 'COLLECTIONS', 'BESTSELLERS', 'ABOUT', 'CONTACT'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium tracking-wide hover:text-amber-700 transition-colors cursor-pointer"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <button className="text-lg hover:text-amber-700 transition-colors cursor-pointer">
              <i className="fas fa-search"></i>
            </button>
            <button className="text-lg relative hover:text-amber-700 transition-colors cursor-pointer">
              <i className="fas fa-shopping-bag"></i>
              <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs rounded-full w-8 h-8 flex items-center justify-center">
              <IoIosCart size={18}/>
              </span>
            </button>
            <button className="md:hidden text-lg hover:text-amber-700 transition-colors cursor-pointer">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
