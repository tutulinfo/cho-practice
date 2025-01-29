import React from "react";
import FilledButton from "./components/Global/FilledButton";
import OutlineButton from "./components/Global/OutlineButton";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <p className="">Test</p>
      <FilledButton label="Example" /> <br />
      <OutlineButton label="Example" />
    </div>
  );
};

export default HomePage;
