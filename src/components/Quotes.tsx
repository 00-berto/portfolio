"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { LanguagesIcon } from "lucide-react";

export interface Quote {
  content: string;
  englishTranslation?: string;
  author: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const friendQuotes: Quote[] = [
  {
    content: "non l'ho mai sentito però mi sembra bravo questo berto",
    englishTranslation: "never heard of this berto dude but he seems good",
    author: "berto",
  },
  {
    content: "come cazzo hai fatto berto è bellissima quest'app",
    englishTranslation: "berto how the fuck did you do it this app is awesome",
    author: "diego",
  },
  { content: "BRAVO BERTO ❤️❤️♾️♾️♾️♾️", author: "carlotta f." },
  { content: "berto hai spaccato godo", author: "carlotta c." },
  {
    content: "è fatta bene",
    englishTranslation: "it's pretty well made",
    author: "tiago",
  },
  {
    content:
      "tra tutti gli amici di tiago sei il più simpatico sei il più chill",
    englishTranslation:
      "out of all of tiago's friends you're the best one and the chillest one",
    author: "chiara",
  },
];

export default function Quotes({ quotes }: { quotes: Quote[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [preferTranslations, setPreferTranslations] = useState(true);

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
          "
          {preferTranslations
            ? (quotes[currentIndex].englishTranslation ??
              quotes[currentIndex].content)
            : quotes[currentIndex].content}
          "
        </div>
        <div className="text-sm font-semibold text-accent-foreground flex flex-row gap-2 items-center justify-start">
          {quotes[currentIndex].author}
          {quotes[currentIndex].englishTranslation && (
            <Tooltip>
              <TooltipTrigger
                asChild
                onClick={() => setPreferTranslations((prev) => !prev)}
              >
                <LanguagesIcon className={"size-4"} />
              </TooltipTrigger>
              <TooltipContent>
                {preferTranslations
                  ? "This quote was faithfully translated. Click here to show untranslated quotes."
                  : "This quote has an English translation. Click here to view it."}
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
