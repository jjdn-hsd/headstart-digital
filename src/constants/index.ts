import { TeamMember, Milestone, Industry, NavItemProps, ServiceCardProps, Project } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'CEO & Founder',
    bio: 'Digital marketing veteran with 15+ years of experience in building and scaling successful online businesses.',
    image: '/images/team/sarah.webp',
    social: {
      linkedin: 'https://linkedin.com/in/sarah-johnson',
      twitter: 'https://twitter.com/sarahjohnson'
    }
  },
  // Add more team members
];

export const milestones: Milestone[] = [
  {
    id: '1',
    year: '2018',
    title: 'Company Founded',
    description: 'HeadStart Digital was established with a vision to transform digital marketing.'
  },
  {
    id: '2',
    year: '2019',
    title: 'First Major Client',
    description: 'Partnered with a Fortune 500 company, marking our entry into enterprise solutions.'
  },
  // Add more milestones
];

// Industry page
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

// Navbar
export const NAV_ITEMS: NavItemProps[] = [
  { id: 'services', label: 'What We Offer', href: 'services' },
  { id: 'industries', label: 'Our Industries', href: 'industries' },
  { id: 'works', label: 'Our Works', href: 'works' },
  { id: 'about', label: 'About Us', href: 'about' },
  { id: 'contact', label: "Let's Talk", href: 'contact', isCTA: true },
];

// Services page
export const services: ServiceCardProps[] = [
  {
    icon: '/icons/strategy.svg',
    title: 'Digital Strategy',
    description: 'Data-driven strategies that align with your business goals and target audience for maximum impact.',
    href: '/services/digital-strategy',
  },
  {
    icon: '/icons/marketing.svg',
    title: 'Content Marketing',
    description: 'Engaging content that tells your story and connects with your audience across all platforms.',
    href: '/services/content-marketing',
  },
  {
    icon: '/icons/analytics.svg',
    title: 'Analytics & Insights',
    description: 'Advanced analytics and reporting to measure performance and drive continuous improvement.',
    href: '/services/analytics',
  },
];

// Works page
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