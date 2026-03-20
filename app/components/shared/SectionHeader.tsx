import type { LucideIcon } from 'lucide-react';

export interface SectionHeaderProps {
  title: string;
  icon: LucideIcon;
}

export default function SectionHeader({ title, icon: Icon }: SectionHeaderProps) {
  return (
    <h2 className="text-3xl font-bold font-sans text-[var(--color-text)] flex items-center gap-2">
      <Icon className="w-7 h-7 text-dark-secondary shrink-0" aria-hidden />
      {title}
    </h2>
  );
}
