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