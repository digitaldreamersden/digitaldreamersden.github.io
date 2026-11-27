import Link from 'next/link';
import Navigation from './components/Navigation';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SocialLinksBar from './components/SocialLinksBar';
import PastEventsAccordion from './components/PastEventsAccordion';
import AttendeeTestimonials from './components/AttendeeTestimonials';
import UpcomingEvents from './components/UpcomingEvents';
import TeamSection from './components/TeamSection';
import CommunityPartners from './components/CommunityPartners';
import CallForEventCard from './components/CallForEventCard';
import { callForEvents } from './data/callForEvents';
import eventsData from './data/events';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import { ArrowRight, CalendarCheck, CalendarClock } from 'lucide-react';
import SectionHeader from './components/shared/SectionHeader';

export default function Home() {
  return (
    <>
      <Navigation />

      <div className="mx-auto space-y-8 mb-24">
        <Header />

        {/* Home */}
        <section id="home" className="space-y-6">
          <HeroSection />
          <SocialLinksBar />
          {/* Call for events */}
          <section id="call-for-events">
            <div className="flex flex-col md:flex-row justify-center gap-6">
              {callForEvents.map((data) => (
                <div
                  key={encodeURIComponent(data.title)}
                  className="w-full md:w-1/2 lg:w-1/3"
                >
                  <CallForEventCard data={data} />
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* Events */}
        <div id="events" className="pt-16 flex flex-col lg:flex-row lg:items-start gap-8">
          <section className="space-y-6 lg:shrink-0">
            <SectionHeader title="Upcoming Events" icon={CalendarClock} />
            <UpcomingEvents
              events={eventsData.upcomingEvents ?? []}
              emptyMessage="No upcoming events. Stay tuned!"
            />
          </section>
          <section className="space-y-6 lg:flex-1 lg:min-w-0 overflow-hidden">
            <SectionHeader title="Past Events" icon={CalendarCheck} />
            <PastEventsAccordion events={eventsData.pastEvents ?? []} />
          </section>
        </div>

        <AttendeeTestimonials />

        {/* Sponsors */}
        <section id="sponsors" className="pt-16">
          <Sponsors />
        </section>

        {/* Community Partners */}
        <section id="partners" className="pt-16">
          <CommunityPartners />
        </section>

        {/* Core Team */}
        <section id="team" className="pt-16 space-y-6">
          <TeamSection />
          <div className="flex justify-center pt-2">
            <Link
              href="/contributors"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:scale-105 border border-dark-border bg-dark-card text-dark-text hover:border-dark-primary text-sm sm:text-base group"
            >
              <span>Meet our Contributors</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
