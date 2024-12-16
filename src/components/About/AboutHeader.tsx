import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

const AboutHeader: React.FC = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-neutral-900 mb-4">
        About HeadStart Digital
      </h2>
      <p className="text-neutral-700 max-w-2xl mx-auto mb-8">
        We're a team of digital innovators, passionate about helping businesses thrive in the digital age. With expertise across multiple industries and a data-driven approach, we deliver results that matter.
      </p>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-brand-primary mb-2">Our Mission</h3>
          <p className="text-neutral-700">
            To empower businesses with innovative digital solutions that drive growth and create lasting impact.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brand-primary mb-2">Our Vision</h3>
          <p className="text-neutral-700">
            To be the leading force in digital transformation, setting new standards for excellence and innovation.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutHeader;