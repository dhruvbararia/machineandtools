// src/hooks/useResponsive.ts
import { useState, useEffect } from "react";

interface BreakpointValues {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLarge: boolean;
  width: number;
}

export function useResponsive(): BreakpointValues {
  const [breakpoints, setBreakpoints] = useState<BreakpointValues>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLarge: false,
    width: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setBreakpoints({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024 && width < 1280,
        isLarge: width >= 1280,
        width,
      });
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoints;
}