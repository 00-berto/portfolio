import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function AnimatedSubtitle() {
  const titles: string[] = [
    "artista",
    "designer",
    //"developer",
    "amico",
    "sticky note lover",
    "goated driver",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [titles.length]);

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
      >
        <div className="sm:text-4xl text-2xl text-foreground font-black">
          {titles[currentIndex]}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
