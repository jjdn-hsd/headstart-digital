import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

const ServiceHeader: React.FC = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-neutral-900 mb-4">
        What We Offer
      </h2>
      <p className="text-neutral-700 max-w-2xl mx-auto">
        We provide comprehensive digital marketing solutions tailored to your business needs. Our data-driven approach ensures measurable results and sustainable growth.
      </p>
    </motion.div>
  );
};

export default ServiceHeader;