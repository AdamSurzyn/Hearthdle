import React from "react";
import { Link } from "react-router-dom";
import "../ui/playButton.scss";
const PlayButton = () => {
  return (
    <Link to="/hearthdleGame">
      <div className="play-button-container">
        <button className="play-button">
          <span>Play!</span>
        </button>
      </div>
    </Link>
  );
};

export default PlayButton;
