import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

const TimelineHeader: React.FC = () => {
  return (
    <motion.div
      variants={fadeIn}
      className="text-center mb-16"
    >
      <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent 
        bg-gradient-to-r from-brand-light via-brand-primary to-brand-light">
        Our Journey
      </h3>
      <div className="flex justify-center items-center gap-4">
        <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-brand-light to-transparent" />
        <span className="text-brand-light font-medium px-4 py-1 rounded-full 
          bg-brand-light/10 border border-brand-light/20">
          Since 2018
        </span>
        <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-brand-light to-transparent" />
      </div>
    </motion.div>
  );
};

export default TimelineHeader;