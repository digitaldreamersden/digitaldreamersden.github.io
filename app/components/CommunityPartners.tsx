import { Handshake } from 'lucide-react';
import Image from 'next/image';
import CardSkeleton from './shared/CardSkeleton';
import SectionCardGrid from './shared/SectionCardGrid';
import { communityPartners } from '@/app/data/communityPartners';
import { getAssetPath } from '@/app/utils/paths';

export default function CommunityPartners() {
  return (
    <SectionCardGrid title="Community Partners" icon={Handshake} spacing="compact">
      {communityPartners.map((partner, index) => (
        <CardSkeleton key={index} url={partner.url} fixedBg={partner.fixedBg}>
          <div className="absolute -top-6 -left-6 -right-6 -bottom-6 p-4">
            <Image
              src={getAssetPath(partner.logo)}
              alt="Community partner logo"
              fill
              className="object-contain"
            />
          </div>
        </CardSkeleton>
      ))}
    </SectionCardGrid>
  );
}
