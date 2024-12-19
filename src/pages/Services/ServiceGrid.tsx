import React from 'react';
import { motion } from 'framer-motion';
import { container, item } from '@/utils/animations';
import ServiceCard from './ServiceCard';
import { ServiceCardProps } from '@/types';

interface ServiceGridProps {
  services: ServiceCardProps[];
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {services.map((service) => (
        <motion.div key={service.title} variants={item}>
          <ServiceCard {...service} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServiceGrid;