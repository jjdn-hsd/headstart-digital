import React from 'react';
import AboutHeader from './AboutHeader';
import Timeline from './Timeline';
import TeamGrid from './TeamGrid';
import { teamMembers, milestones } from '@/constants';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-gradient-to-b from-neutral-50 to-neutral-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-light/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-primary/5 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHeader />
        <Timeline milestones={milestones} />
        <TeamGrid members={teamMembers} />
      </div>
    </section>
  );
};

export default About;