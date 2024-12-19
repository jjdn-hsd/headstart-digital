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
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-block mb-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 
          bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-light">
          About HeadStart Digital
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn}
        className="text-neutral-600 max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
      >
        We're a team of digital innovators, passionate about helping businesses thrive 
        in the digital age. With expertise across multiple industries and a data-driven 
        approach, we deliver results that matter.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          whileHover={{ translateY: -5 }}
          className="bg-white/80 p-8 rounded-xl border border-neutral-200
            hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-brand-primary mb-4">Our Mission</h3>
          <p className="text-neutral-600">
            To empower businesses with innovative digital solutions that drive growth 
            and create lasting impact.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ translateY: -5 }}
          className="bg-white/80 p-8 rounded-xl border border-neutral-200
            hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-brand-primary mb-4">Our Vision</h3>
          <p className="text-neutral-600">
            To be the leading force in digital transformation, setting new standards 
            for excellence and innovation.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutHeader;