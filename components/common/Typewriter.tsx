"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;      // typing speed
  deleteSpeed?: number;
  pause?: number;      // pause before deleting
};

export default function Typewriter({
  text,
  speed = 100,
  deleteSpeed = 50,
  pause = 1500,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
    } else if (!isDeleting && displayed.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length - 1));
      }, deleteSpeed);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, text, speed, deleteSpeed, pause]);

  return (
    <h3 className="font-heading text-base sm:text-xl md:text-xl lg:text-xl">
      {displayed}
      <span className="animate-pulse">|</span>
    </h3>
  );
}