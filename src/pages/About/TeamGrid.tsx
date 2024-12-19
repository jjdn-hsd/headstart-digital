import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember as TeamMemberType } from '@/types';
import TeamMember from './TeamMember';
import { container } from '@/utils/animations';

interface TeamGridProps {
  members: TeamMemberType[];
}

const TeamGrid: React.FC<TeamGridProps> = ({ members }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
        {members.map(member => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </motion.div>
  );
};

export default TeamGrid;