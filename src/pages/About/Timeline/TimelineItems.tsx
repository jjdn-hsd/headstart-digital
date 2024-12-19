import React from 'react';
import { Milestone } from '@/types';
import TimelineItem from './TimelineItem';

interface TimelineItemsProps {
  milestones: Milestone[];
}

const TimelineItems: React.FC<TimelineItemsProps> = ({ milestones }) => {
  return (
    <div className="relative">
      {/* Timeline vertical line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-light via-brand-light to-transparent opacity-20"></div>
      
      {milestones.map((milestone, index) => (
        <TimelineItem
          key={milestone.id}
          milestone={milestone}
          isLast={index === milestones.length - 1}
        />
      ))}
    </div>
  );
};

export default TimelineItems;