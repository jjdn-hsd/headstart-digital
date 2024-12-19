import React from 'react';
import { Link } from 'react-scroll';
import styles from './CTAButton.module.css';

interface CTAButtonProps {
  to: string;
  isScrolled: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ to, isScrolled }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className={`
        ${styles.ctaButton}
        ${isScrolled ? styles.scrolled : styles.transparent}
      `}
    >
      Let's Talk
    </Link>
  );
};

export default CTAButton;