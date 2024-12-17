import { useState, useEffect } from 'react';

export const useLogoColor = () => {
  const [isHomeSection, setIsHomeSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section element
      const heroSection = document.getElementById('hero');
      if (!heroSection) return;

      // Get the hero section's position and dimensions
      const rect = heroSection.getBoundingClientRect();
      
      // Check if we're in the hero section (with a small buffer)
      const isInHeroSection = rect.top > -100 && rect.bottom > 0;
      
      setIsHomeSection(isInHeroSection);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isHomeSection };
};