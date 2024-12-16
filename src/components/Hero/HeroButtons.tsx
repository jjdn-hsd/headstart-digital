import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

const HeroButtons: React.FC = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.4 }}
      className="flex flex-col sm:flex-row justify-center gap-4"
    >
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="bg-neutral-50 text-brand-primary px-8 py-3 rounded-full font-semibold hover:bg-brand-light hover:text-neutral-50 transition-colors duration-300"
      >
        Get Started
      </Link>
      <Link
        to="services"
        smooth={true}
        duration={500}
        className="border-2 border-neutral-50 text-neutral-50 px-8 py-3 rounded-full font-semibold hover:bg-neutral-50 hover:text-brand-primary transition-colors duration-300"
      >
        Learn More
      </Link>
    </motion.div>
  );
};

export default HeroButtons;