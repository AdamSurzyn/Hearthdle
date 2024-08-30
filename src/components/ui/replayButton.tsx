import React from "react";

// Define the props type for the component
interface ReplayButtonProps {
  onReset: () => void;
}

// Create the functional component with props type
export const ReplayButton: React.FC<ReplayButtonProps> = ({ onReset }) => {
  // Handle button click to toggle the replay state
  return <button onClick={onReset}>Replay?</button>;
};
