import React from 'react';
import { motion } from 'framer-motion';
import { useContactForm } from './hooks/useContactForm';
import { fadeIn } from '@/utils/animations';

const budgetRanges = [
  { value: '', label: 'Select Budget Range' },
  { value: '5000-10000', label: '$5,000 - $10,000' },
  { value: '10000-25000', label: '$10,000 - $25,000' },
  { value: '25000-50000', label: '$25,000 - $50,000' },
  { value: '50000+', label: '$50,000+' }
];

const ContactForm: React.FC = () => {
  const {
    formData,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleFileChange
  } = useContactForm();

  return (
    <motion.form
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-neutral-50 p-8 rounded-lg shadow-lg"
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md shadow-sm ${
              errors.fullName ? 'border-red-500' : 'border-neutral-300'
            }`}
            required
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
          )}
        </div>

        {/* Add more form fields following the same pattern */}
        
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