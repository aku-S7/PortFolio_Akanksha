import { motion } from "framer-motion";

const ScrollAnimationWrapper = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }} // Starts slightly smaller
      whileInView={{ opacity: 1, scale: 1 }} // Fades in and scales to normal size
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // Ensures animation runs only once
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
