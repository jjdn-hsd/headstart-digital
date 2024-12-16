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
          <nav className="fixed top-16 inset-x-0 bg-neutral-50 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
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
                  } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
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