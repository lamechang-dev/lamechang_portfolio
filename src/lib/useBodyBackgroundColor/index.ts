import { useEffect } from "react";

export const useBodyBackgroundColor = (color: string) => {
  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundColor = prev;
    };
  }, [color]);
};
