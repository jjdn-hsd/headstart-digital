import React from 'react';
import { motion } from 'framer-motion';
import { useContactForm } from '@/hooks/useContactForm';
import { fadeIn } from '@/utils/animations';
import FormFields from './FormFields';
import SubmitButton from './SubmitButton';

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
      <FormFields
        formData={formData}
        errors={errors}
        handleChange={handleChange}
      />
      <SubmitButton isSubmitting={isSubmitting} />
    </motion.form>
  );
};

export default ContactForm;