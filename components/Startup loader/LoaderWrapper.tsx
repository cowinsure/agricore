"use client";
import { useEffect, useState } from "react";
import PrimaryLoader from "./PrimaryLoader";

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem("seenLoader");

    if (!hasSeenLoader) {
      setLoading(true); // show loader

      const timer = setTimeout(() => {
        setClosing(true); // start exit animation

        setTimeout(() => {
          setLoading(false); // remove loader
          sessionStorage.setItem("seenLoader", "true"); // mark as seen
        }, 700); // match your exit animation duration
      }, 3000); // loader duration

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <div className={loading ? "hidden" : "block"}>{children}</div>

      {loading && <PrimaryLoader isClosing={closing} />}
    </>
  );
}
