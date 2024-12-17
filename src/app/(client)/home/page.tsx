"use client";

import HeroSection from "./HeroSection";
import SpaWellnessSection from "./SpaWellnessSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="h-[160px]"></div>
      <SpaWellnessSection />
      <div className="h-[160px]"></div>
      <div className="lg:w-2/3 lg:px-0 padding-main m-auto">
        <p className="lg:text-3xl md:text-2xl text-xl text-center ">
          This is the gate of Mediterranean spirit. A new hospitality concept
          where inspiration and privacy come as the luxury of staying by the
          luminous sea at the vibrant Santa Eulalia.
        </p>
      </div>
      <div className="h-[160px]"></div>
    </>
  );
};

export default Home;
