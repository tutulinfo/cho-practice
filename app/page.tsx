import React from "react";
import FilledButton from "./components/Global/FilledButton";
import OutlineButton from "./components/Global/OutlineButton";
import Header from "./components/Global/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <p className="">Test</p>
      <FilledButton label="Example" /> <br />
      <OutlineButton label="Example" />
    </div>
  );
};

export default HomePage;
