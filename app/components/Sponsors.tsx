import { Award } from 'lucide-react';
import Image from 'next/image';
import CardSkeleton from './shared/CardSkeleton';
import sponsors from '@/app/data/sponsorsData';
import { getAssetPath } from '@/app/utils/paths';

export default function Sponsors() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold flex items-center gap-2">
        <Award className="w-6 h-6 text-dark-secondary" />
        Sponsors
      </h2>

      <div className="flex flex-wrap gap-4 md:gap-7">
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
      </div>
    </div>
  );
}
