import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Button from '../common/Button/Button';
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
      <Link to="contact" smooth={true} duration={500}>
        <Button variant="secondary" size="large">
          Get Started
        </Button>
      </Link>
      
      <Link to="services" smooth={true} duration={500}>
        <Button variant="outline" size="large">
          Learn More
        </Button>
      </Link>
    </motion.div>
  );
};

export default HeroButtons;