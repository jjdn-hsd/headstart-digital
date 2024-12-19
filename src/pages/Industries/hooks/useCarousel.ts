import { useState, useEffect, useCallback, useRef } from 'react';

interface CarouselState {
  currentSlide: number;
  isPaused: boolean;
}

interface TouchState {
  startX: number;
  endX: number;
}

export const useCarousel = (totalSlides: number, autoRotateInterval = 2000) => {
  const [state, setState] = useState<CarouselState>({
    currentSlide: 0,
    isPaused: false
  });
  
  const touchState = useRef<TouchState>({
    startX: 0,
    endX: 0
  });

  const nextSlide = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentSlide: (prev.currentSlide + 1) % totalSlides
    }));
  }, [totalSlides]);

  const previousSlide = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentSlide: (prev.currentSlide - 1 + totalSlides) % totalSlides
    }));
  }, [totalSlides]);

  const setIsPaused = useCallback((isPaused: boolean) => {
    setState(prev => ({ ...prev, isPaused }));
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchState.current.startX = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchState.current.endX = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const difference = touchState.current.startX - touchState.current.endX;
    const threshold = 50;

    if (Math.abs(difference) > threshold) {
      if (difference > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }
  }, [nextSlide, previousSlide]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!state.isPaused) {
      interval = setInterval(nextSlide, autoRotateInterval);
    }

    return () => clearInterval(interval);
  }, [state.isPaused, nextSlide, autoRotateInterval]);

  return {
    currentSlide: state.currentSlide,
    isPaused: state.isPaused,
    setIsPaused,
    nextSlide,
    previousSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};