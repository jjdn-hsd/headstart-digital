import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { NAV_ITEMS } from '@/constants';
import Logo from '@/components/Logo/Logo';
import MobileMenu from '../MobileMenu/MobileMenu';
import CTAButton from '../../../components/CTAButton/CTAButton';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`}>
      <div className={styles.container}>
        <div className="flex justify-between items-center h-24">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <React.Fragment key={item.id}>
                {item.isCTA ? (
                  <CTAButton to={item.href} isScrolled={isScrolled} />
                ) : (
                  <Link
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className={`
                      ${styles.navItem}
                      ${isScrolled ? styles.navItemScrolled : styles.navItemTransparent}
                    `}
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`
              md:hidden
              ${styles.mobileMenuButton}
              ${isScrolled ? styles.mobileMenuButtonScrolled : styles.mobileMenuButtonTransparent}
            `}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={handleMobileMenuClose}
        navItems={NAV_ITEMS} 
      />
    </nav>
  );
};

export default NavBar;