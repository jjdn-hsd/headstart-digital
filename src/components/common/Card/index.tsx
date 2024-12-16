import React from 'react';
import { motion } from 'framer-motion';
import { CardProps } from './types';
import { transitions } from '@/utils/transitions';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : undefined}
      className={`
        bg-neutral-50 
        rounded-lg 
        shadow-lg 
        ${hover ? 'hover:shadow-xl' : ''} 
        ${transitions.default}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;