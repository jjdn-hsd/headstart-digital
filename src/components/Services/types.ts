export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface ServicesProps {
  services: ServiceCardProps[];
}