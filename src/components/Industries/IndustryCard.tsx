import React from 'react';
import { motion } from 'framer-motion';
import { IndustryCardProps } from './types';
import { item } from '@/utils/animations';

const IndustryCard: React.FC<IndustryCardProps> = ({ industry, index }) => {
  return (
    <motion.div
      variants={item}
      className="bg-neutral-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48">
        <img
          src={industry.image}
          alt={industry.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-2xl font-bold text-neutral-50">{industry.name}</h3>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-2">
          {industry.expertise.map((item, i) => (
            <li key={i} className="flex items-center text-neutral-700">
              <svg
                className="w-4 h-4 mr-2 text-brand-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default IndustryCard;