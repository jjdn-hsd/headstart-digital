import React from 'react';
import HeroContent from './HeroContent';
import ScrollIndicator from './ScrollIndicator';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-brand-primary to-brand-dark">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <HeroContent />
      <ScrollIndicator />
    </section>
  );
};
