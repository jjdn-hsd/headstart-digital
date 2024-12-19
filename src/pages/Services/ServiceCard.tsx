import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCardProps } from '@/types';

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, href }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-neutral-50 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <div className="w-12 h-12 mb-4 text-brand-primary">
        <img src={icon} alt={title} className="w-full h-full" />
      </div>
      <h3 className="text-xl font-semibold text-neutral-900 mb-3">{title}</h3>
      <p className="text-neutral-700 mb-4">{description}</p>
      <a
        href={href}
        className="inline-flex items-center text-brand-primary hover:text-brand-light transition-colors duration-200"
      >
        Learn More
        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  );
};

export default ServiceCard;