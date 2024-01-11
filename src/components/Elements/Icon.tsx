import { icons } from 'lucide-react';

interface IconProps {
  name: string;
  color?: string;
  size?: number;
}

export const Icon = ({ name, color, size }: IconProps) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};
