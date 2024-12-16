import { useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

export const useScrollProgress = (threshold = 100) => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { scrollYProgress, isVisible };
};