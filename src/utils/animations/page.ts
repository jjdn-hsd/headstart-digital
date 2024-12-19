// Page transition animations
export const pageTransition = {
  hidden: { opacity: 0, x: -200 },
  enter: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.7,
    }
  },
  exit: { 
    opacity: 0, 
    x: 200,
    transition: {
      duration: 0.5
    }
  },
};