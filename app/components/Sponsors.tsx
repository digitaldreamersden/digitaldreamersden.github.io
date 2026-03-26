import { Award } from 'lucide-react';
import Image from 'next/image';
import CardSkeleton from './shared/CardSkeleton';
import SectionCardGrid from './shared/SectionCardGrid';
import sponsors from '@/app/data/sponsorsData';
import { getAssetPath } from '@/app/utils/paths';

export default function Sponsors() {
  return (
    <SectionCardGrid title="Sponsors" icon={Award} spacing="compact">
      {sponsors.map((sponsor, index) => (
        <CardSkeleton key={index} url={sponsor.url} fixedBg={sponsor.fixedBg}>
          <div className="absolute -top-6 -left-6 -right-6 -bottom-6 p-4">
            <Image
              src={getAssetPath(sponsor.image)}
              alt="Sponsor logo"
              fill
              className="object-contain"
            />
          </div>
        </CardSkeleton>
      ))}
    </SectionCardGrid>
  );
}
