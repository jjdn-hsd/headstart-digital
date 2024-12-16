import React from 'react';

interface CarouselControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="flex items-center justify-center mt-8 space-x-4">
      <button
        onClick={onPrevious}
        className="p-2 rounded-full bg-brand-primary text-neutral-50 hover:bg-brand-light transition-colors duration-200"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <div className="flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              currentSlide === index ? 'bg-brand-primary' : 'bg-neutral-400'
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        className="p-2 rounded-full bg-brand-primary text-neutral-50 hover:bg-brand-light transition-colors duration-200"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default CarouselControls;