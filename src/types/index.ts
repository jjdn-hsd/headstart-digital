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