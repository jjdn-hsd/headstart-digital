import { TeamMember, Milestone } from '@/types';

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