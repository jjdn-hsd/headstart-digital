import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, categories } from '@/constants';
import CategoryFilter from './CategoryFilter';
import ProjectGrid from './ProjectGrid';
import { fadeIn } from '@/utils/animations';

const Works: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <section id="works" className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Our Works
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and digital transformations
          </p>
        </motion.div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <ProjectGrid
          projects={projects}
          selectedCategory={selectedCategory}
        />
      </div>
    </section>
  );
};

export default Works;