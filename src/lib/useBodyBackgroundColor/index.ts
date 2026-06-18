import { useEffect } from "react";

export const useBodyBackgroundColor = (color: string) => {
  useEffect(() => {
    const prevBody = document.body.style.backgroundColor;
    const prevHtml = document.documentElement.style.backgroundColor;
    document.body.style.backgroundColor = color;
    document.documentElement.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundColor = prevBody;
      document.documentElement.style.backgroundColor = prevHtml;
    };
  }, [color]);
};
