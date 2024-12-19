import { Project } from './types';

export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web-design', label: 'Web Design' },
  { id: 'mobile-apps', label: 'Mobile Apps' },
  { id: 'branding', label: 'Branding' },
  { id: 'e-commerce', label: 'E-commerce' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'FashionHub E-commerce Redesign',
    client: 'FashionHub',
    industry: 'Retail',
    description: 'Complete redesign of a fashion retailer\'s e-commerce platform with focus on mobile-first design, performance optimization, and seamless checkout experience.',
    image: '/images/works/fashion-hub.webp',
    category: 'e-commerce',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Shopify'],
    completionYear: 2023,
    results: [
      { metric: 'Conversion Rate', value: '+45%' },
      { metric: 'Mobile Sales', value: '+60%' },
      { metric: 'Page Load Time', value: '-65%' }
    ]
  },
  {
    id: '2',
    title: 'HealthConnect Mobile App',
    client: 'HealthConnect',
    industry: 'Healthcare',
    description: 'Patient engagement mobile app enabling secure messaging, appointment scheduling, and real-time health monitoring with healthcare providers.',
    image: '/images/works/health-connect.webp',
    category: 'mobile-apps',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'HIPAA Compliance'],
    completionYear: 2023,
    results: [
      { metric: 'Patient Engagement', value: '+75%' },
      { metric: 'Appointment No-shows', value: '-40%' }
    ]
  },
  {
    id: '3',
    title: 'TechCorp Brand Evolution',
    client: 'TechCorp Solutions',
    industry: 'Technology',
    description: 'Complete brand identity redesign including logo, visual language, and digital presence for a leading tech solutions provider.',
    image: '/images/works/techcorp.webp',
    category: 'branding',
    technologies: ['Adobe Creative Suite', 'Brand Strategy', 'Motion Design'],
    completionYear: 2023,
    results: [
      { metric: 'Brand Recognition', value: '+85%' },
      { metric: 'Social Engagement', value: '+120%' }
    ]
  }
];