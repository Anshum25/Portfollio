import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 2500;
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= 101) {
        current = 100;
        clearInterval(timer);
        setIsVisible(false); // Trigger exit animation locally
        setTimeout(onComplete, 800); // 800ms gives time for Framer Motion exit animation to finish
      }
      setProgress(Math.floor(current));
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-beige"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div 
            className="absolute bottom-0 left-0 w-full bg-dark origin-bottom" 
            style={{ height: `${progress}%`, transition: 'height 0.1s linear' }} 
          />
          <div className="relative z-10 flex items-end gap-1 text-beige mix-blend-difference pb-20">
            <span className="heading-ultra text-[clamp(6rem,16vw,14rem)] leading-none">{progress}</span>
            <span className="heading-ultra text-[clamp(3rem,8vw,7rem)] leading-none mb-2 md:mb-6">%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
