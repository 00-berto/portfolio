import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function AnimatedImage() {
  const images: string[] = ["/memoji.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  const variants = {
    initial: { opacity: 0, x: 5 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -5 },
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
        <img
          src={images[currentIndex]}
          alt={"image"}
          className={"size-64 aspect-square object-cover select-none"}
          draggable={false}
        />
      </motion.div>
    </AnimatePresence>
  );
}
