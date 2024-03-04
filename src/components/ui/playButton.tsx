import React from "react";
import { Link } from "react-router-dom";
const PlayButton = () => {
  return (
    <Link to="/hearthdleGame">
      <button>Play!</button>
    </Link>
  );
};

export default PlayButton;
