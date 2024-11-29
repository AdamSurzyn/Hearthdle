import React from "react";
import Header from "../components/ui/header";
import Instruction from "../components/ui/instruction";
import PlayButton from "../components/ui/playButton";
import Footer from "../components/ui/footer";
import "./landing.scss";

const Landing = () => {
  return (
    <div className="landing-container">
      <Header />
      <Instruction />
      <PlayButton />
      <Footer />
    </div>
  );
};

export default Landing;
