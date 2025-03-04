import React from "react";
import HeroSection from "./HomePage/HeroSection";
import Courses from "./components/Global/Courses";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8 space-y-4 md:space-y-0 md:space-x-16">
        <Courses />
      </div>
    </div>
  );
};

export default HomePage;
