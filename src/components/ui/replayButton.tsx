import React from "react";

// Define the props type for the component
interface ReplayButtonProps {
  isReplay: boolean;
  setIsReplay: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the functional component with props type
export const ReplayButton: React.FC<ReplayButtonProps> = ({
  isReplay,
  setIsReplay,
}) => {
  // Handle button click to toggle the replay state
  const handleClick = () => {
    setIsReplay(!isReplay);
  };

  return <button onClick={handleClick}>Replay?</button>;
};
