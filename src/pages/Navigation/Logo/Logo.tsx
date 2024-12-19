import React from 'react';
import { useLogoColor } from './useLogoColor';
import styles from './Logo.module.css';

const Logo: React.FC = () => {
  const { isHomeSection } = useLogoColor();

  return (
    <div className="flex-shrink-0">
      <img 
        src="/logo.svg" 
        alt="HeadStart Digital Logo" 
        className={`h-16 w-auto transition-colors duration-300 ${
          isHomeSection ? styles.logoLight : styles.logoDark
        }`}
      />
    </div>
  );
};

export default Logo;