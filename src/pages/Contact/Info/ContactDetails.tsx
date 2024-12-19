import React from 'react';

const ContactDetails: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold text-brand-primary mb-2">Address</h4>
        <p className="text-neutral-700">
          123 Digital Avenue<br />
          Tech City, TC 12345
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-brand-primary mb-2">Business Hours</h4>
        <p className="text-neutral-700">
          Monday - Friday: 9:00 AM - 6:00 PM<br />
          Saturday - Sunday: Closed
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-brand-primary mb-2">Contact</h4>
        <p className="text-neutral-700">
          Phone: (123) 456-7890<br />
          Email: hello@headstartdigital.com
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;