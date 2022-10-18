import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 1,
  },
};

const modalvariants = {
  hidden: {
    y: "-100vh",
    opacity: 1,
  },
  visible: {
    y: "300px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = ({ showModal, setShowModel }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          <motion.div className="modal" variants={modalvariants}>
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button onClick={() => setShowModel(false)}>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
