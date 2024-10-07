import React, { useState, useEffect } from "react";

export const useUnclick = (
  ref: React.MutableRefObject<HTMLDivElement | null>
) => {
  const [showResults, setShowResults] = useState<boolean>(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event?.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return { showResults, setShowResults };
};
