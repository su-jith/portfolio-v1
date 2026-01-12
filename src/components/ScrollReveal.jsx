import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }} // Starts small, faded, and slightly lower
      whileInView={{ opacity: 1, scale: 1, y: 0 }} // Pops up to normal size/position
      viewport={{ once: true, margin: "-50px" }} // Trigger slightly before it hits the center
      transition={{ 
        duration: 0.6, 
        delay: delay, 
        ease: [0.22, 1, 0.36, 1] // A smooth "out-expo" ease for a premium feel
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;