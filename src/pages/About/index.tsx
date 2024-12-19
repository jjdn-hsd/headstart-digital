import React from 'react';
import AboutHeader from './AboutHeader';
import Timeline from './Timeline';
import TeamGrid from './TeamGrid';
import { teamMembers, milestones } from '@/constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHeader />
        <Timeline milestones={milestones} />
        <TeamGrid members={teamMembers} />
      </div>
    </section>
  );
};

export default About;