import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

const ScrollIndicator: React.FC = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
    >
      <Link
        to="services"
        smooth={true}
        duration={500}
        className="animate-bounce cursor-pointer"
      >
        <svg
          className="w-6 h-6 text-neutral-50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </Link>
    </motion.div>
  );
};

export default ScrollIndicator;