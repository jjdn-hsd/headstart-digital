import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import ContactSocial from './ContactSocial';
import ContactDetails from './ContactDetails';

const ContactInfo: React.FC = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-neutral-50 p-8 rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-bold text-neutral-900 mb-6">Get in Touch</h3>
      <ContactDetails />
      <ContactSocial />
    </motion.div>
  );
};

export default ContactInfo;