import React from 'react';
import { SectionProps } from '@/types';
import Container from '../Container';

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

  return (
    <section id={id} className={`py-20 ${bgClasses} ${className}`}>
      <Container maxWidth={containerWidth}>
        {children}
      </Container>
    </section>
  );
};

export default Section;