import React from 'react';
import { Link } from 'react-scroll';
import { MobileMenuProps } from './types';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles/NavBar.module.css';

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navItems }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="fixed inset-0 bg-neutral-900 bg-opacity-50" />
          <nav className={styles['mobile-menu']}>
            <div className="px-4 pt-3 pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className={`
                    ${styles['mobile-menu-item']}
                    ${item.isCTA ? styles['mobile-menu-item-cta'] : styles['mobile-menu-item-default']}
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;