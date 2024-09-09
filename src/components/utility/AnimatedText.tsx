import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText:React.FC = () => {
  const words = ["Innovate", "Transform", "Elevate"];
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-full"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-600 flex flex-col items-center">
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            className="mb-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};


export default AnimatedText;