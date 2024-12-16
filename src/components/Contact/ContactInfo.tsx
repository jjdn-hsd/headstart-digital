import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

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
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-brand-primary mb-2">Address</h4>
          <p className="text-neutral-700">
            123 Digital Avenue<br />
            Tech City, TC 12345
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-brand-primary mb-2">Business Hours</h4>
          <p className="text-neutral-700">
            Monday - Friday: 9:00 AM - 6:00 PM<br />
            Saturday - Sunday: Closed
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-brand-primary mb-2">Contact</h4>
          <p className="text-neutral-700">
            Phone: (123) 456-7890<br />
            Email: hello@headstartdigital.com
          </p>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="text-brand-primary hover:text-brand-light transition-colors duration-200">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          {/* Add more social media icons */}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;