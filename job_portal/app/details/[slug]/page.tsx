import React from "react";
import { Button } from "@/components/ui/button";

const jobDetails = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    logo: "https://readdy.ai/api/search-image?query=modern%20minimalist%20tech%20company%20logo%20with%20blue%20gradient%20on%20white%20background%2C%20professional%20corporate%20identity%2C%20clean%20design%2C%20simple%20geometric%20shape%2C%20high%20quality%20digital%20art&width=100&height=100&seq=1&orientation=squarish",
    description:
      "As a Senior Frontend Developer, you will be responsible for building and maintaining our web applications. You should have a strong understanding of JavaScript, React, and modern frontend development practices.",
  },
];

const JobDetails = () => {
  const job = jobDetails[0];

  return (
    <div className="mt-8 mb-8 bg-white px-4 py-10 flex justify-center">
      <div className="w-full max-w-3xl space-y-6">
        {/* Company + Title */}
        <div className="flex items-center space-x-4">
          <img
            src={job.logo}
            alt={job.company}
            className="w-20 h-20 rounded-md object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold">{job.title}</h1>
            <p className=" text-lg">{job.company}</p>
          </div>
        </div>

        {/* Job Meta */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <p>
            <span className="font-semibold">Location:</span> {job.location}
          </p>
          <p>
            <span className="font-semibold">Type:</span> {job.type}
          </p>
          <p>
            <span className="font-semibold">Salary:</span> {job.salary}
          </p>
        </div>

        {/* Description */}
        <div className="text-base leading-relaxed">
          <h2 className="text-xl font-semibold mb-2">Job Description</h2>
          <p>{job.description}</p>
        </div>

        {/* Apply Button */}
        <div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2 rounded-xl cursor-pointer">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
