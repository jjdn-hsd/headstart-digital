import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

interface Category {
  id: string;
  label: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-4 mb-8"
    >
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${
            selectedCategory === category.id
              ? 'bg-brand-primary text-neutral-50'
              : 'bg-transparent text-neutral-400 hover:text-neutral-50'
          }`}
        >
          {category.label}
        </button>
      ))}
    </motion.div>
  );
};

export default CategoryFilter;