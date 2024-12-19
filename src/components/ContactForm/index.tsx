import React from 'react';
import { motion } from 'framer-motion';
import { useContactForm } from '../../hooks/useContactForm';
import FormField from './FormField';
import { fadeIn } from '@/utils/animations';

const ContactForm: React.FC = () => {
  const { formData, errors, isSubmitting, handleSubmit, handleChange } = useContactForm();

  return (
    <motion.form
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-neutral-50 p-8 rounded-lg shadow-lg"
      noValidate
    >
      <div className="space-y-6">
        <FormField
          label="Full Name"
          name="fullName"
          type="text"
          required
          value={formData.fullName}
          error={errors.fullName}
          onChange={handleChange}
          placeholder="John Doe"
        />

        <FormField
          label="Email Address"
          name="email"
          type="email"
          required
          value={formData.email}
          error={errors.email}
          onChange={handleChange}
          placeholder="john@example.com"
        />

        <FormField
          label="Company Name"
          name="companyName"
          type="text"
          required
          value={formData.companyName}
          error={errors.companyName}
          onChange={handleChange}
          placeholder="Your Company Ltd."
        />

        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          error={errors.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
          optional
        />

        <FormField
          label="Website URL"
          name="website"
          type="url"
          value={formData.website}
          error={errors.website}
          onChange={handleChange}
          placeholder="https://example.com"
          optional
        />

        <FormField
          label="How Can We Help?"
          name="message"
          type="textarea"
          required
          value={formData.message}
          error={errors.message}
          onChange={handleChange}
          placeholder="Tell us about your project and goals..."
          className="min-h-[150px]"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-primary text-neutral-50 py-3 px-6 rounded-md hover:bg-brand-dark transition-colors duration-300 disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;