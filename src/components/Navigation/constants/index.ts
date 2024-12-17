import { NavItemProps } from '../types';

export const NAV_ITEMS: NavItemProps[] = [
  { id: 'services', label: 'What We Offer', href: 'services' },
  { id: 'industries', label: 'Our Industries', href: 'industries' },
  { id: 'works', label: 'Our Works', href: 'works' },
  { id: 'about', label: 'About Us', href: 'about' },
  { id: 'contact', label: "Let's Talk", href: 'contact', isCTA: true },
];