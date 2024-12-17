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