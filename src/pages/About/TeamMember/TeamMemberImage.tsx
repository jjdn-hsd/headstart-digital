import React from 'react';
import { TeamMember } from '@/types';
import SocialLinks from './SocialLinks';

interface TeamMemberImageProps {
  member: TeamMember;
}

const TeamMemberImage: React.FC<TeamMemberImageProps> = ({ member }) => {
  return (
    <div className="relative mb-6 group">
      {/* Image Container with Glow Effect */}
      <div className="relative w-48 h-48 mx-auto">
        {/* Animated Glow Background */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
          bg-gradient-to-r from-brand-light/30 to-brand-primary/30 blur-2xl
          transform group-hover:scale-110 transition-all duration-500" />
        
        {/* Image Frame */}
        <div className="relative w-full h-full rounded-full overflow-hidden
          ring-2 ring-brand-primary/20 group-hover:ring-4 group-hover:ring-brand-primary/50
          transform transition-all duration-500 ease-out">
          {/* Profile Image */}
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transform transition-transform 
              duration-700 ease-out group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b 
            from-transparent via-brand-primary/20 to-brand-primary/80
            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Social Links Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transform 
          group-hover:translate-y-0 translate-y-4 transition-all duration-300">
          <SocialLinks social={member.social} />
        </div>
      </div>
    </div>
  );
};

export default TeamMemberImage;