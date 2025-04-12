import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import image1 from '@/assets/1.jpg'
import image2 from '@/assets/2.png'
import image3 from '@/assets/3.png'
import image4 from '@/assets/4.png'
import image5 from '@/assets/5.png'
import image6 from '@/assets/6.png'


const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      salary: "$120,000 - $150,000",
      type: "Full-time",
      logo: image1.src,
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateLabs",
      location: "New York, NY",
      salary: "$110,000 - $140,000",
      type: "Full-time",
      logo: image2.src,
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "DesignWave",
      location: "Remote",
      salary: "$90,000 - $120,000",
      type: "Remote",
      logo: image3.src,
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataDrive",
      location: "Boston, MA",
      salary: "$130,000 - $160,000",
      type: "Full-time",
      logo: image4.src,
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudNine",
      location: "Austin, TX",
      salary: "$115,000 - $145,000",
      type: "Full-time",
      logo: image5.src,
    },
    {
      id: 6,
      title: "Marketing Specialist",
      company: "GrowthGenius",
      location: "Chicago, IL",
      salary: "$75,000 - $95,000",
      type: "Part-time",
      logo: image6.src,
    },
  ];
  
const FeaturedJobs = () => {
  return (
    <section className="py-16 bg-gray-50 ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Featured Jobs
          </h2>
          <p className="text-gray-600">Handpicked opportunities for you</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredJobs.map((job) => (
          <Card
            key={job.id}
            className="overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-12 h-12 rounded-md mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-gray-600">{job.company}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-500">
                  <i className="fa-solid fa-location-dot w-5 text-center mr-2"></i>
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <i className="fa-solid fa-money-bill-wave w-5 text-center mr-2"></i>
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <i className="fa-solid fa-briefcase w-5 text-center mr-2"></i>
                  <span>{job.type}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <Badge
                  variant="outline"
                  className="bg-blue-50 text-blue-700 border-blue-200"
                >
                  New
                </Badge>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
                  Apply Now
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
          Browse All Jobs
          <i className="fa-solid fa-arrow-right ml-2"></i>
        </Button>
      </div>
    </div>
  </section>
  )
}

export default FeaturedJobs