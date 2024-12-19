// Common transition configurations
export const transitions = {
  default: 'transition-all duration-300',
  fast: 'transition-all duration-200',
  slow: 'transition-all duration-500',
  spring: 'transition-all duration-500 ease-out',
  bounce: 'transition-all duration-500 ease-in-out',
  hover: {
    scale: 'hover:scale-105 transition-transform duration-300',
    opacity: 'hover:opacity-80 transition-opacity duration-300',
    colors: 'transition-colors duration-300',
    all: 'transition-all duration-300 ease-in-out',
  },
} as const;

// Motion variants for consistent animations
export const motionVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  scale: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 },
  },
} as const;