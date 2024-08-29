import React, { useState, useEffect } from "react";

export const useUnclick = (
  ref: React.MutableRefObject<HTMLDivElement | null>
) => {
  const handleClickOutside = (event: MouseEvent): void => {
    if (ref.current && !ref.current.contains(event?.target as Node)) {
      setShowResults(false);
    }
  };
  const [showResults, setShowResults] = useState<boolean>(false);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return { showResults, setShowResults };
};
