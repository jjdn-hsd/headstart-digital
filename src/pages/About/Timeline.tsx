import React from 'react';
import { motion } from 'framer-motion';
import { Milestone } from '@/types';
import { container, item } from '@/utils/animations';

interface TimelineProps {
  milestones: Milestone[];
}

const Timeline: React.FC<TimelineProps> = ({ milestones }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-3xl mx-auto mb-16"
    >
      <h3 className="text-2xl font-bold text-center text-neutral-900 mb-8">Our Journey</h3>
      <div className="relative">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            variants={item}
            className="flex gap-4 mb-8"
          >
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-brand-primary"></div>
              {index !== milestones.length - 1 && (
                <div className="w-0.5 h-full bg-brand-primary opacity-20"></div>
              )}
            </div>
            <div className="flex-1">
              <div className="bg-neutral-50 p-4 rounded-lg shadow-lg">
                <span className="text-brand-primary font-bold">{milestone.year}</span>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">{milestone.title}</h4>
                <p className="text-neutral-700">{milestone.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;