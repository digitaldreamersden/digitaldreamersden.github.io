export interface PastEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  status: string;
  link: string;
  venue: string;
  image: string;
}

export interface UpcomingEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  status: string;
  rsvpUrl?: string;
  venue: string;
  image: string;
}

export interface EventsData {
  pastEvents: PastEvent[];
  upcomingEvents: UpcomingEvent[];
}

const eventsData: EventsData = {
  pastEvents: [
    {
      id: "workshop-1",
      date: "2026-01-31",
      title: "Digital Dreamers Den (D3) X Lyzr",
      description: "Agentic AI Workshop",
      status: "completed",
      link: "https://d3community.in/workshop-1",
      venue: "Yuniq, Chennai",
      image: "/events/workshop-1.jpeg"
    },
    {
      id: "meetup-5",
      date: "2024-10-20",
      title: "Meetup 5",
      description: "Advanced topics in full-stack development and AI integration.",
      status: "completed",
      link: "https://d3community.in/meetup-5",
      venue: "Yuniq, Chennai",
      image: "/events/event-5.jpeg"
    },
    {
      id: "meetup-4",
      date: "2024-09-18",
      title: "Meetup 4",
      description: "Building scalable applications with modern frameworks.",
      status: "completed",
      link: "https://d3community.in/meetup-4",
      venue: "Yuniq, Chennai",
      image: "/events/event-4.jpg"
    },
    {
      id: "meetup-3",
      date: "2024-08-12",
      title: "Meetup 3",
      description: "Deep dive into React and Next.js best practices.",
      status: "completed",
      link: "https://d3community.in/meetup-3",
      venue: "Kissflow, Chennai",
      image: "/events/event-3.jpeg"
    },
    {
      id: "meetup-2",
      date: "2024-07-08",
      title: "Meetup 2",
      description: "Introduction to AI tools for developers.",
      status: "completed",
      link: "https://d3community.in/meetup-2",
      venue: "ZOOMINFO,Perungudi",
      image: "/events/event-2.jpeg"
    },
    {
      id: "meetup-1",
      date: "2024-06-05",
      title: "Meetup 1",
      description: "Kickoff event - Building the D3 Community.",
      status: "completed",
      link: "https://d3community.in/meetup-1",
      venue: "Community Center, Bangalore",
      image: "/events/event-1.jpeg"
    }
  ],
  upcomingEvents: [
    {
      id: "Agentic AI",
      date: "2026-01-31",
      title: "Digital Dreamers Den (D3) X Lyzr Workshop #1",
      description: "Agentic AI Workshop",
      status: "upcoming",
      rsvpUrl: "https://luma.com/9bi67aqa",
      venue: "Yuniq, Chennai",
      image: "/events/comingsoon.png"
    }
  ]
};

export default eventsData;

