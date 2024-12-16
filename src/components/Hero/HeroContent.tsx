import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '@/utils/animations';
import HeroButtons from './HeroButtons';

const HeroContent: React.FC = () => {
  return (
    <div className="relative z-10 text-center text-neutral-50 px-4 sm:px-6 lg:px-8">
      <motion.h1
        variants={slideUp}
        initial="hidden"
        animate="visible"
        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
      >
        Transform Your Digital Presence
      </motion.h1>
      
      <motion.p
        variants={slideUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto"
      >
        Strategic digital marketing solutions that drive growth and deliver results
      </motion.p>
      
      <HeroButtons />
    </div>
  );
};

export default HeroContent;