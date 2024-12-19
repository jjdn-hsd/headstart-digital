import React from 'react';
import FormField from '@/components/ContactForm/FormField';
import { ContactFormData, ValidationErrors } from '@/types';

interface FormFieldsProps {
  formData: ContactFormData;
  errors: ValidationErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormFields: React.FC<FormFieldsProps> = ({ formData, errors, handleChange }) => {
  return (
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
    </div>
  );
};

export default FormFields;