import React from 'react';
import { Link } from 'react-scroll';
import { useLogoColor } from '../../hooks/useLogoColor';
import styles from './Logo.module.css';

const Logo: React.FC = () => {
  const { isHomeSection } = useLogoColor();

  return (
    <Link
      to="hero"
      smooth={true}
      duration={500}
      className="flex-shrink-0 cursor-pointer"
      aria-label="Go to home"
    >
      <img 
        src="/logo.svg" 
        alt="HeadStart Digital Logo" 
        className={`h-16 w-auto transition-colors duration-300 ${
          isHomeSection ? styles.logoLight : styles.logoDark
        }`}
      />
    </Link>
  );
};

export default Logo;