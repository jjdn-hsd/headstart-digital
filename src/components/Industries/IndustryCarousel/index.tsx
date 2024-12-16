import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IndustryCard from './IndustryCard';
import CarouselControls from './CarouselControls';
import { useCarousel } from './useCarousel';
import { Industry } from '../types';

interface IndustryCarouselProps {
  industries: Industry[];
}

const IndustryCarousel: React.FC<IndustryCarouselProps> = ({ industries }) => {
  const totalSlides = industries.length;
  const {
    currentSlide,
    setIsPaused,
    nextSlide,
    previousSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useCarousel(totalSlides);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="relative w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={industries[currentSlide].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <IndustryCard industry={industries[currentSlide]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <CarouselControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={previousSlide}
        onNext={nextSlide}
      />
    </div>
  );
};

export default IndustryCarousel;