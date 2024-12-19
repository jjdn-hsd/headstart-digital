import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

const ContactHeader: React.FC = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-neutral-900 mb-4">Let's Talk</h2>
      <p className="text-neutral-700 max-w-2xl mx-auto">
        Ready to start your digital transformation? Get in touch with us today.
      </p>
    </motion.div>
  );
};

export default ContactHeader;