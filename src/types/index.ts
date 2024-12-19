export interface NavItem {
  id: string;
  label: string;
  href: string;
  isCTA?: boolean;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

export interface WorkCard {
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Industry {
  name: string;
  description: string;
  icon: string;
}
// About page
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

// Button component 
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant style */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Make button full width */
  fullWidth?: boolean;
  /** Show loading spinner */
  isLoading?: boolean;
  /** Additional CSS classes */
  className?: string;
}

// Card component
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

// Container component
export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'full';
}

// Section component
export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'light' | 'dark' | 'primary';
  containerWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'full';
}

// SectionHeader component
export interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  titleColor?: string;
  descriptionColor?: string;
}