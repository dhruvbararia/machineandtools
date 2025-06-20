// src/hooks/useViewportHeight.ts

import { useState, useEffect } from "react";

export function useViewportHeight() {
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const updateVh = () => {
      const newVh = window.innerHeight * 0.01;
      setVh(newVh);
      document.documentElement.style.setProperty("--vh", `${newVh}px`);
    };

    updateVh();
    window.addEventListener("resize", updateVh);
    window.addEventListener("orientationchange", updateVh);

    return () => {
      window.removeEventListener("resize", updateVh);
      window.removeEventListener("orientationchange", updateVh);
    };
  }, []);

  return vh;
}