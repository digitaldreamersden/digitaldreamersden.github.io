import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find My Team | Digital Dreamers Den (D3)',
  description: 'Find your team — Digital Dreamers Den',
  alternates: {
    canonical: '/findmyteam',
  },
  openGraph: {
    url: '/findmyteam',
    title: 'Find My Team | Digital Dreamers Den (D3)',
    description: 'Find your team — Digital Dreamers Den',
  },
  twitter: {
    title: 'Find My Team | Digital Dreamers Den (D3)',
    description: 'Find your team — Digital Dreamers Den',
  },
};

const IFRAME_SRC = 'https://digitaldreamersden.github.io/d3-leader-board/?v=2';

export default function FindMyTeamPage() {
  return (
    <div className="fixed inset-0 m-0 h-dvh w-full overflow-hidden bg-dark-bg">
      <iframe
        src={IFRAME_SRC}
        title="Digital Dreamers Den"
        className="block h-full w-full border-0"
        allow="fullscreen"
      />
    </div>
  );
}
