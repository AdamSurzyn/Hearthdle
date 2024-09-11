import React from "react";
import "./replayButton.scss";
// Define the props type for the component
interface ReplayButtonProps {
  onReset: () => void;
}

// Create the functional component with props type
export const ReplayButton: React.FC<ReplayButtonProps> = ({ onReset }) => {
  // Handle button click to toggle the replay state
  return (
    <div className="replay-button-container">
      <button className="replay-button" onClick={onReset}>
        <span>Replay?</span>
      </button>
    </div>
  );
};
