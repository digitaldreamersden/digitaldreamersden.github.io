import { COMMUNITY_EMAIL } from '@/app/constants/contact';

export interface CallForEventCardData {
  title: string;
  description: string;
  formUrl: string;
  image: string;
}

export const callForEvents: CallForEventCardData[] = [
  {
    title: 'Call for Speakers',
    description:
      'D3 Community is hosting meetups!! Would you like to be a speaker at our meetups? Let us know with this form.',
    formUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSfRlbtegrypHBHw8sHVy_FEcIYLGBo6i5ZETeLxY6NFfSnYjw/viewform',
    image: '/callForEvents/callForSpeakers.jpeg',
  },
  {
    title: 'Call for Sponsors',
    description:
      'D3 Community is hosting meetups!! Would you like to be a sponsor at our meetups? Let us know with this form.',
    formUrl: `mailto:${COMMUNITY_EMAIL}`,
    image: '/callForEvents/callForSponsors.jpeg',
  },
];
