import type { Variants } from "motion";
import { motion } from "motion/react";
import { CircleIcon, SquareIcon, StarIcon, TriangleIcon } from "lucide-react";

export default function LandingShapes() {
  const variants: Variants = {
    initial: { opacity: 0, scale: 0, rotate: -90 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0, rotate: 90 },
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
      <motion.div
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
        className={"size-full relative select-none"}
      >
        <motion.div
          variants={variants}
          className="absolute sm:-right-20 -right-10 sm:-top-20 -top-10 flex items-center justify-center"
        >
          <StarIcon className={"stroke-[4] text-red-400 size-12"} />
        </motion.div>
        <motion.div
          variants={variants}
          className="absolute sm:-right-30 -right-14 top-0 bottom-8 flex items-center justify-center"
        >
          <CircleIcon className={"stroke-[4] text-pink-400 size-12"} />
        </motion.div>
        <motion.div
          variants={variants}
          className="absolute sm:-right-20 -right-10 sm:-bottom-20 -bottom-10 flex items-center justify-center"
        >
          <SquareIcon
            className={"stroke-[4] rotate-12 text-purple-400 size-12"}
          />
        </motion.div>
        <motion.div
          variants={variants}
          className="absolute sm:-bottom-32 -bottom-20 left-0 right-0 flex items-center justify-center"
        >
          <TriangleIcon
            className={"stroke-[4] rotate-180 text-indigo-400 size-12"}
          />
        </motion.div>
        <motion.div
          variants={variants}
          className="absolute sm:-left-20 -left-10 sm:-bottom-20 -bottom-10 flex items-center justify-center"
        >
          <CircleIcon className={"stroke-[4] text-blue-400 size-12"} />
        </motion.div>
        <motion.div
          variants={variants}
          className="absolute sm:-left-32 -left-16 sm:top-24 top-0 bottom-0 flex items-center justify-center"
        >
          <StarIcon
            className={"stroke-[4] -rotate-45 text-green-400 size-12"}
          />
        </motion.div>
        <motion.div
          variants={variants}
          className="absolute sm:-left-28 -left-10 sm:-top-16 -top-8 flex items-center justify-center"
        >
          <TriangleIcon
            className={"stroke-[4] -rotate-30 text-yellow-400 size-12"}
          />
        </motion.div>
        <motion.div
          variants={variants}
          className="absolute sm:-top-32 -top-24 left-0 sm:right-8 right-0 flex items-center justify-center"
        >
          <SquareIcon
            className={"stroke-[4] rotate-30 text-orange-400 size-12"}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
