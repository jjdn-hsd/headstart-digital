import React from 'react';
import { motion } from 'framer-motion';
import { Milestone } from '@/types';
import TimelineHeader from './TimelineHeader';
import TimelineItems from './TimelineItems';
import { container } from '@/utils/animations';

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
      <TimelineHeader />
      <TimelineItems milestones={milestones} />
    </motion.div>
  );
};

export default Timeline;