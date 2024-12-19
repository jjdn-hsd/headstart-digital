import React from 'react';
import { services } from './constants';
import ServiceHeader from './ServiceHeader';
import ServiceGrid from './ServiceGrid';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceHeader />
        <ServiceGrid services={services} />
      </div>
    </section>
  );
};

export default Services;