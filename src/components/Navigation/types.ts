export interface NavItemProps {
  id: string;
  label: string;
  href: string;
  isCTA?: boolean;
}

export interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItemProps[];
}