import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember as TeamMemberType } from '@/types';
import { item } from '@/utils/animations';
import TeamMemberImage from './TeamMember/TeamMemberImage';
import TeamMemberInfo from './TeamMember/TeamMemberInfo';

interface TeamMemberProps {
  member: TeamMemberType;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <motion.div
      variants={item}
      className="text-center group"
    >
      <TeamMemberImage member={member} />
      <TeamMemberInfo member={member} />
    </motion.div>
  );
};

export default TeamMember;