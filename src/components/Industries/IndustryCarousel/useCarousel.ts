import { useState, useEffect, useCallback, useRef } from 'react';

export const useCarousel = (totalSlides: number, autoRotateInterval = 2000) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const difference = touchStartX.current - touchEndX.current;
    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isPaused) {
      interval = setInterval(nextSlide, autoRotateInterval);
    }

    return () => clearInterval(interval);
  }, [isPaused, nextSlide, autoRotateInterval]);

  return {
    currentSlide,
    isPaused,
    setIsPaused,
    nextSlide,
    previousSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};