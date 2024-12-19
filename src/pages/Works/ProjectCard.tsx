import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCardProps } from '@/types';
import { item } from '@/utils/animations';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      variants={item}
      className="bg-neutral-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-0 right-0 bg-brand-primary text-neutral-50 px-3 py-1 text-sm">
          {project.completionYear}
        </div>
      </div>
      <div className="p-6">
        <div className="mb-3">
          <span className="text-sm text-brand-primary font-medium">
            {project.client} • {project.industry}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">
          {project.title}
        </h3>
        <p className="text-neutral-700 mb-4">
          {project.description}
        </p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-neutral-900 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-brand-primary bg-opacity-10 text-brand-primary px-2 py-1 rounded-md text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {project.results && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-neutral-900 mb-2">Key Results</h4>
            <div className="grid grid-cols-2 gap-2">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-neutral-100 p-2 rounded-md"
                >
                  <div className="text-brand-primary font-bold">{result.value}</div>
                  <div className="text-sm text-neutral-700">{result.metric}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        <button className="inline-flex items-center text-brand-primary hover:text-brand-light transition-colors duration-200">
          View Case Study
          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;