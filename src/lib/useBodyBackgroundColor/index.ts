import { useLayoutEffect, useEffect } from "react";

// useLayoutEffect causes SSR warnings, so fall back to useEffect on server
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const useBodyBackgroundColor = (color: string) => {
  useIsomorphicLayoutEffect(() => {
    const prevBody = document.body.style.backgroundColor;
    const prevHtml = document.documentElement.style.backgroundColor;
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    const prevThemeColor = themeColorMeta?.getAttribute("content") ?? null;

    document.body.style.backgroundColor = color;
    document.documentElement.style.backgroundColor = color;
    themeColorMeta?.setAttribute("content", color);

    return () => {
      document.body.style.backgroundColor = prevBody;
      document.documentElement.style.backgroundColor = prevHtml;
      if (themeColorMeta && prevThemeColor !== null) {
        themeColorMeta.setAttribute("content", prevThemeColor);
      }
    };
  }, [color]);
};
