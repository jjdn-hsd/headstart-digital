import React from 'react';
import { motion } from 'framer-motion';
import { Industry } from '../types';

interface IndustryCardProps {
  industry: Industry;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  return (
    <motion.div 
      className="w-full max-w-2xl mx-auto p-4"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-neutral-50 rounded-lg p-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-center mb-4">
          <img
            src={industry.icon}
            alt={`${industry.name} icon`}
            className="w-16 h-16"
          />
        </div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3 text-center">
          {industry.name}
        </h3>
        <p className="text-neutral-700 mb-6 text-center">
          {industry.description}
        </p>
        <div className="flex justify-center">
          <a
            href={`/industries/${industry.id}`}
            className="inline-flex items-center text-brand-primary hover:text-brand-light transition-colors duration-200"
          >
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default IndustryCard;