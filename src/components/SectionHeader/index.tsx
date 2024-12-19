import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeaderProps } from '@/types';
import { fadeIn } from '@/utils/animations';
import { defaultViewport } from '@/utils/viewport';

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  className = '',
  titleColor = 'text-neutral-900',
  descriptionColor = 'text-neutral-700',
}) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className={`text-3xl font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl mx-auto ${descriptionColor}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;