// Navigation page
export interface NavItemProps {
  id: string;
  label: string;
  href: string;
  isCTA?: boolean;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItemProps[];
}

export interface CTAButtonProps {
  to: string;
  isScrolled: boolean;
}

export interface LogoProps {
  className?: string;
}

// Services page
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

// Industry page
export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: string[];
}

export interface IndustryCardProps {
  industry: Industry;
  index: number;
}

// Contact page
export interface ContactFormData {
  fullName: string;
  email: string;
  companyName: string;
  phone: string;
  website: string;
  message: string;
}

export interface ValidationErrors {
  [key: string]: string;
}

// Services page
export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface ServicesProps {
  services: ServiceCardProps[];
}

// Works page
export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  image: string;
  category: 'all' | 'web-design' | 'mobile-apps' | 'branding' | 'e-commerce';
  technologies: string[];
  completionYear: number;
  results?: {
    metric: string;
    value: string;
  }[];
}

export interface ProjectCardProps {
  project: Project;
}

export interface ProjectGridProps {
  projects: Project[];
  selectedCategory: string;
}