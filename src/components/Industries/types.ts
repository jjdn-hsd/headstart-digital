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