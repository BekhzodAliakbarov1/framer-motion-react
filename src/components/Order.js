import React, { useEffect } from "react";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModel }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModel(true);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [setShowModel]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container order"
      exit="exit"
    >
      <motion.h2
        exit={{
          y: -1000,
          opacity: 0,
        }}
      >
        Thank you for your order :)
      </motion.h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>

      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
