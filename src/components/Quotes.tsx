"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

export interface Quote {
  content: string;
  author: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const friendQuotes: Quote[] = [
  {
    content: "non l'ho mai sentito però mi sembra bravo questo berto",
    author: "berto",
  },
  {
    content: "come cazzo hai fatto berto è bellissima quest'app",
    author: "diego",
  },
  { content: "BRAVO BERTO ❤️❤️♾️♾️♾️♾️", author: "carlotta f." },
  { content: "berto hai spaccato godo", author: "carlotta c." },
  { content: "che figo alb è fatta benissimo 💤💤", author: "as ★" },
  { content: "è fatta bene", author: "tiago" },
];

export default function Quotes({ quotes }: { quotes: Quote[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  const variants = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
        className="flex flex-col sm:w-2/3 w-full gap-1"
      >
        <div className="font-extrabold text-foreground leading-6">
          "{quotes[currentIndex].content}"
        </div>
        <div className="text-sm font-semibold text-accent-foreground">
          {quotes[currentIndex].author}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
