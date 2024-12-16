import React from 'react';
import { Link } from 'react-scroll';
import { MobileMenuProps } from './types';
import { motion, AnimatePresence } from 'framer-motion';

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
          <nav className="fixed top-24 inset-x-0 bg-neutral-50 shadow-lg"> {/* Adjusted top position */}
            <div className="px-4 pt-3 pb-4 space-y-2"> {/* Adjusted padding */}
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className={`${
                    item.isCTA
                      ? 'bg-brand-primary text-neutral-50 hover:bg-brand-dark'
                      : 'text-neutral-700 hover:text-brand-primary'
                  } block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200`} /* Adjusted padding */
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