import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 150 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -150 },
};

const AnimateLayout = ({ children }): JSX.Element => (
  <div>
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
    >
      {children}
    </motion.div>
  </div>
);

export default AnimateLayout;
