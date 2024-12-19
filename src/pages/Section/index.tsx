import React from 'react';
import { SectionProps } from '@/types';

const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  background = 'light',
  containerWidth = 'xl',
}) => {
  const bgClasses = {
    light: 'bg-neutral-50',
    dark: 'bg-neutral-900',
    primary: 'bg-brand-primary',
  }[background];

  const containerClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
  }[containerWidth];

  return (
    <section id={id} className={`py-20 ${bgClasses} ${className}`}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${containerClasses}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;