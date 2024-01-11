import { icons } from 'lucide-react';

interface IconProps {
  name: string;
  color?: string;
  size?: number;
}

export const Icon = ({ name, color, size }: IconProps) => {
  const LucideIcon = icons[name as keyof typeof icons];

  return <LucideIcon color={color} size={size} />;
};
