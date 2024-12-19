import React from 'react';
import ContactForm from '../../components/ContactForm/index';
import ContactInfo from './ContactInfo';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-50 mb-4">Let's Talk</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Ready to start your digital transformation? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;