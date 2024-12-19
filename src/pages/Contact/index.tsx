import React from 'react';
import ContactHeader from './ContactHeader';
import ContactContent from './ContactContent';
import Section from '@/components/Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" background="light">
      <ContactHeader />
      <ContactContent />
    </Section>
  );
};

export default Contact;