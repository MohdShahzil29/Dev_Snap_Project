"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Menu */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href={'/'} className="text-2xl font-bold text-blue-600 cursor-pointer">JobPortal</Link>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-blue-600 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex ml-10 space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Jobs
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Companies
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Career Resources
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="!rounded-button whitespace-nowrap cursor-pointer"
            >
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
              Sign Up
            </Button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">
                Jobs
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">
                Companies
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">
                Career Resources
              </a>
            </nav>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" className="w-full !rounded-button">
                Sign In
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full !rounded-button">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
