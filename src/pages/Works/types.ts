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