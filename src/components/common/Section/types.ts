export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'light' | 'dark' | 'primary';
  containerWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'full';
}