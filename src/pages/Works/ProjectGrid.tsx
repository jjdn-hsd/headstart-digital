import React from 'react';
import { motion } from 'framer-motion';
import { ProjectGridProps } from '@/types';
import ProjectCard from './ProjectCard';
import { container } from '@/utils/animations';

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, selectedCategory }) => {
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {filteredProjects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
};

export default ProjectGrid;