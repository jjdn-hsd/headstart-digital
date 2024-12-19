import React from 'react';
import ContactForm from './Form/ContactForm';
import ContactInfo from './Info/ContactInfo';

const ContactContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default ContactContent;