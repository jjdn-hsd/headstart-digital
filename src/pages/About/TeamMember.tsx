import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember as TeamMemberType } from '@/types';
import { item } from '@/utils/animations';

interface TeamMemberProps {
  member: TeamMemberType;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <motion.div
      variants={item}
      className="text-center"
    >
      <div className="relative mb-4 group">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-primary bg-opacity-0 group-hover:bg-opacity-75 rounded-full transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
            {member.social.linkedin && (
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-50 hover:text-brand-light">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            )}
            {member.social.twitter && (
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-neutral-50 hover:text-brand-light">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
      <h4 className="text-xl font-semibold text-neutral-900">{member.name}</h4>
      <p className="text-brand-primary mb-2">{member.position}</p>
      <p className="text-neutral-700">{member.bio}</p>
    </motion.div>
  );
};

export default TeamMember;