import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import SectionHeader from './SectionHeader';

export type SectionCardGridSpacing = 'compact' | 'comfortable';

const spacingClass: Record<SectionCardGridSpacing, string> = {
  compact: 'space-y-6',
  comfortable: 'space-y-8',
};

export interface SectionCardGridProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  /** Vertical gap between heading and card row */
  spacing?: SectionCardGridSpacing;
  gridClassName?: string;
}

export default function SectionCardGrid({
  title,
  icon,
  children,
  spacing = 'comfortable',
  gridClassName = 'flex flex-wrap justify-center md:justify-start gap-6 md:gap-7',
}: SectionCardGridProps) {
  return (
    <div className={spacingClass[spacing]}>
      <SectionHeader title={title} icon={icon} />
      <div className={gridClassName}>{children}</div>
    </div>
  );
}
