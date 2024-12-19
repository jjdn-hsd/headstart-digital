import React from 'react';
import { TeamMember } from '@/types';
import { motion } from 'framer-motion';

interface SocialLinksProps {
  social: TeamMember['social'];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ social }) => {
  return (
    <div className="flex gap-3">
      {social.linkedin && (
        <motion.a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm
            hover:bg-white/20 transition-all duration-300
            ring-1 ring-white/30 hover:ring-white/50"
        >
          <svg 
            className="w-5 h-5 text-white transition-colors duration-300" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </motion.a>
      )}
      {social.twitter && (
        <motion.a
          href={social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm
            hover:bg-white/20 transition-all duration-300
            ring-1 ring-white/30 hover:ring-white/50"
        >
          <svg 
            className="w-5 h-5 text-white transition-colors duration-300" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
          </svg>
        </motion.a>
      )}
    </div>
  );
};

export default SocialLinks;