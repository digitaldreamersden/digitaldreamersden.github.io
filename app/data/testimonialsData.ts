export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  content: string;
  avatarType: 'image' | 'initials' | 'anonymous';
  avatarUrl?: string;
  initials?: string;
  gradient?: string;
  role?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Tamilventhan B R',
    rating: 5,
    content:
      'The discussions were practical and engaging, especially the way the speakers and participants openly shared their knowledge. The friendly environment and networking opportunities made the events more valuable and enjoyable.\n\nOverall, the experience helped me gain new insights, improve my understanding of current trends, and connect with like-minded people in the community.',
    avatarType: 'initials',
    avatarUrl: '',
    initials: 'TBR',
  },
  {
    id: 'testimonial-2',
    name: 'Arutselvan S',
    rating: 5,
    content: 'Good Insightful',
    avatarType: 'initials',
    initials: 'AS',
    gradient: 'linear-gradient(135deg, #f97316, #f59e0b)',
  },
  {
    id: 'testimonial-3',
    name: 'Kathirvel Rajmohan',
    rating: 5,
    content:
      "The event is good, Everytime when I attend digital dreamer den event, I will gain more knowledge in tech and trending tech stack. I'm able to get network with lots of tech professionals.",
    avatarType: 'initials',
    initials: 'KR',
    gradient: 'linear-gradient(135deg, #6366f1, #3b82f6)',
  },
  {
    id: 'testimonial-4',
    name: 'Praveen R',
    rating: 5,
    content:
      'Thanks for shortlisting, this is my first event to be part of digital dreamer den. Had a great experience about building Ai agent by thirumurgan and followed with a rapid fire activity to apply the lesson into real time projects. \nThanks for making this day productive to D3 team and community',
    avatarType: 'initials',
    initials: 'PR',
    gradient: 'linear-gradient(135deg, #10b981, #14b8a6)',
  },
  {
    id: 'testimonial-5',
    name: 'Karthikbalan Subramanian',
    rating: 5,
    content: 'Nice one',
    avatarType: 'initials',
    initials: 'KS',
    gradient: 'linear-gradient(135deg, #f97316, #f59e0b)',
  },
  {
    id: 'testimonial-6',
    name: 'Kaniska P',
    rating: 5,
    content:
      'Great vibes and the activity really put us into the perspective and I got to meet a lot of wonderful people. It was very interactive and everyone got acknowledged. It was a great exposure into Agentic AI',
    avatarType: 'initials',
    initials: 'KP',
    gradient: 'linear-gradient(135deg, #f97316, #f59e0b)',
  },
  {
    id: 'testimonial-7',
    name: 'Nivas P',
    rating: 4,
    content:
      'The Event was good and the Activity session made the event more better and good networking.',
    initials: 'NP',
    gradient: 'linear-gradient(135deg, #10b981, #14b8a6)',
    avatarType: 'initials',
  },
  {
    id: 'testimonial-8',
    name: 'Madhu Priya  Mani',
    rating: 4,
    content: 'Good community...good platform to learn here',
    avatarType: 'initials',
    initials: 'MP',
    gradient: 'linear-gradient(135deg, #6366f1, #3b82f6)',
  },
  {
    id: 'testimonial-9',
    name: 'Ragunath',
    rating: 5,
    content: 'Awesome',
    avatarType: 'initials',
    initials: 'R',
    gradient: 'linear-gradient(135deg, #10b981, #14b8a6)',
  },
  {
    id: 'testimonial-10',
    name: 'Muthukumar',
    rating: 4,
    content: 'It\'s very gud experience. Its my 1st D3 event. I hope they will continue in future.',
    avatarType: 'initials',
    initials: 'M',
    gradient: 'linear-gradient(135deg, #f97316, #f59e0b)',
  },
];

export default testimonialsData;
