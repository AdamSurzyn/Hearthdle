import React from "react";
import { Link } from "react-router-dom";
import "../ui/playButton.scss";
const PlayButton = () => {
  return (
    <Link to="/hearthdleGame">
      <button className="image-button"></button>
    </Link>
  );
};

export default PlayButton;
