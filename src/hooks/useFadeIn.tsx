import { useState, useEffect } from "react";

export const useFadeIn = (delay = 100, duration = 800) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
  };

  return style;
};
