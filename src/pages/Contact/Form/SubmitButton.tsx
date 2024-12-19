import React from 'react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-brand-primary text-neutral-50 py-3 px-6 rounded-md 
        hover:bg-brand-dark transition-colors duration-300 disabled:opacity-50 mt-6"
    >
      {isSubmitting ? 'Sending...' : 'Send Message'}
    </button>
  );
};

export default SubmitButton;