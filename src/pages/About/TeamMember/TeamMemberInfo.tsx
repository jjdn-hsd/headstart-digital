import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '@/types';

interface TeamMemberInfoProps {
  member: TeamMember;
}

const TeamMemberInfo: React.FC<TeamMemberInfoProps> = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative px-4"
    >
      {/* Name with Gradient Effect */}
      <h4 className="text-2xl font-semibold mb-2">
        <span className="bg-gradient-to-r from-neutral-800 to-neutral-600 
          bg-clip-text text-transparent group-hover:from-brand-primary 
          group-hover:to-brand-light transition-all duration-300">
          {member.name}
        </span>
      </h4>

      {/* Position with Color Transition */}
      <p className="text-brand-primary mb-3 font-medium tracking-wide
        group-hover:text-brand-light transition-colors duration-300">
        {member.position}
      </p>

      {/* Bio with Fade Effect */}
      <p className="text-neutral-600 leading-relaxed max-w-sm mx-auto
        group-hover:text-neutral-700 transition-colors duration-300">
        {member.bio}
      </p>

      {/* Animated Underline */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2
        w-0 group-hover:w-24 h-0.5 transition-all duration-500 ease-out
        bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
    </motion.div>
  );
};

export default TeamMemberInfo;