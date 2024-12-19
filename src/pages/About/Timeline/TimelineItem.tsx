import React from 'react';
import { motion } from 'framer-motion';
import { Milestone } from '@/types';
import { timelineItem } from '@/utils/animations';

interface TimelineItemProps {
  milestone: Milestone;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ milestone, isLast }) => {
  return (
    <motion.div
      variants={timelineItem}
      className="flex gap-6 mb-8 group"
    >
      {/* Year marker */}
      <div className="relative flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-light to-brand-primary 
            flex items-center justify-center z-10 shadow-lg shadow-brand-primary/10
            group-hover:shadow-brand-primary/20 transition-all duration-300"
        >
          <span className="text-sm font-bold text-white">{milestone.year}</span>
        </motion.div>
        {!isLast && (
          <div className="absolute top-12 h-full w-0.5 bg-gradient-to-b from-brand-primary/30 to-transparent" />
        )}
      </div>

      {/* Content */}
      <motion.div
        whileHover={{ scale: 1.02, translateX: 5 }}
        className="flex-1 bg-white/90 p-6 rounded-xl border border-neutral-200/50
          backdrop-blur-sm transition-all duration-300 group-hover:bg-white
          hover:border-brand-primary/20 hover:shadow-lg hover:shadow-brand-primary/5"
      >
        <h4 className="text-xl font-semibold text-brand-primary mb-3 
          group-hover:text-brand-primary transition-colors duration-300">
          {milestone.title}
        </h4>
        <p className="text-neutral-600 leading-relaxed 
          group-hover:text-neutral-700 transition-colors duration-300">
          {milestone.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;