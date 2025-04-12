"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import heroBanner from '@/assets/Hero2.jpg'

const HeroSection = () => {
    const [jobSearch, setJobSearch] = useState("");
    const [locationSearch, setLocationSearch] = useState("");
  return (
    <section className="relative">
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={heroBanner.src}
        alt="Hero Background"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold text-white mb-4">
          Find Your Dream Job Today
        </h1>
        <p className="text-xl text-blue-100 mb-8">
          Connect with over 20,000+ employers and discover opportunities
          that match your skills and aspirations.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="job-search"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Job Title or Keywords
              </label>
              <div className="relative">
                <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 "></i>
                <Input
                  id="job-search"
                  type="text"
                  placeholder="e.g. Frontend Developer"
                  value={jobSearch}
                  onChange={(e) => setJobSearch(e.target.value)}
                  className="pl-10 border-gray-300 w-[20rem] md:w-[15rem] lg:w-[32rem]"
                />
              </div>
            </div>
          </div>
          <Button className=" bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer mt-2">
            <i className="fa-solid fa-magnifying-glass mr-2"></i>
            Find Jobs
          </Button>
        </div>

        <div className="mt-8 flex items-center">
          <span className="text-blue-100 mr-4">Popular searches:</span>
          <div className="flex flex-wrap gap-2">
            {[
              "Remote",
              "Engineering",
              "Marketing",
              "Part-time",
              "Entry Level",
            ].map((tag) => (
              <Badge
                key={tag}
                className="bg-white/20 hover:bg-white/30 text-white cursor-pointer whitespace-nowrap"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection