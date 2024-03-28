import React from "react";
import { Link } from "react-router-dom";
import "../ui/playButton.scss";
import playImage from "../../assets/playButton.png";
const PlayButton = () => {
  return (
    <Link to="/hearthdleGame">
      <i>
        <img src={playImage} alt="Play"></img>
      </i>
    </Link>
  );
};

export default PlayButton;
