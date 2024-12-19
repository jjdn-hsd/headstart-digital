import { Industry } from './types';

export const industries: Industry[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Transforming patient care through innovative digital solutions. We help healthcare providers streamline operations and enhance patient engagement.',
    icon: '/icons/healthcare.svg',
    services: [
      'Patient Portal Development',
      'Medical Practice Marketing',
      'Healthcare Analytics'
    ]
  },
  {
    id: 'finance',
    name: 'Financial Services',
    description: 'Empowering financial institutions with secure, scalable digital solutions that enhance customer experience and operational efficiency.',
    icon: '/icons/finance.svg',
    services: [
      'Digital Banking Solutions',
      'FinTech Integration',
      'Secure Payment Systems'
    ]
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    description: 'Creating seamless shopping experiences that drive conversions. We help retailers thrive in the digital marketplace.',
    icon: '/icons/retail.svg',
    services: [
      'E-commerce Development',
      'Inventory Management',
      'Customer Analytics'
    ]
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Accelerating innovation for technology companies. We deliver cutting-edge solutions that keep you ahead of the competition.',
    icon: '/icons/technology.svg',
    services: [
      'Product Development',
      'Cloud Solutions',
      'Tech Consulting'
    ]
  }
];