"use client";
import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false); // Default to false

  useEffect(() => {
    if (typeof window === "undefined") return; // Guard for SSR

    const media = window.matchMedia(query);
    setMatches(media.matches); // Initialize state

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};
