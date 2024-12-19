import React from 'react';
import { motion } from 'framer-motion';
import IndustryCarousel from './IndustryCarousel';
import { industries } from './constants';
import { fadeIn } from '@/utils/animations';

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-neutral-50 mb-4">
            Industries We Serve
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            We have deep expertise across various industries, delivering tailored solutions that drive success.
          </p>
        </motion.div>

        <IndustryCarousel industries={industries} />
      </div>
    </section>
  );
};

export default Industries;