import { useState, useCallback } from 'react';

export const useIndustryCarousel = (totalSlides: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  return {
    currentSlide,
    nextSlide,
    prevSlide
  };
};