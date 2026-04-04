import type { LucideIcon } from 'lucide-react';
import {
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  MessageCircle,
  Calendar,
} from 'lucide-react';

export const socialPlatforms: {
  name: string;
  icon: LucideIcon;
  url: string;
  color: string;
  description: string;
}[] = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://digitaldreamersden.in/linkedin',
    color: '#0077B5',
    description: 'Connect with us professionally',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://digitaldreamersden.in/instagram',
    color: '#E4405F',
    description: 'Follow our journey',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://digitaldreamersden.in/youtube',
    color: '#FF0000',
    description: 'Watch our content',
  },
  {
    name: 'X (Twitter)',
    icon: Twitter,
    url: 'https://digitaldreamersden.in/x',
    color: '#1DA1F2',
    description: 'Join the conversation',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://digitaldreamersden.in/whatsapp',
    color: '#25D366',
    description: 'Join our community',
  },
  {
    name: 'Luma Events',
    icon: Calendar,
    url: 'https://digitaldreamersden.in/luma',
    color: '#FF6B00',
    description: 'RSVP to events',
  },
];
