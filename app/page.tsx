import Navigation from './components/Navigation';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SocialLinksBar from './components/SocialLinksBar';
import PastEventsAccordion from './components/PastEventsAccordion';
import UpcomingEvents from './components/UpcomingEvents';
import TeamSection from './components/TeamSection';
import CommunityPartners from './components/CommunityPartners';
import CallForEventCard from './components/CallForEventCard';
import { callForEvents } from './data/callForEvents';
import eventsData from './data/events';
import Sponsors from './components/Sponsors';
import ContributorsSection from './components/ContributorsSection';
import Footer from './components/Footer';
import { CalendarCheck, CalendarClock, Megaphone } from 'lucide-react';

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
              <div key={encodeURIComponent(data.title)} className="w-full md:w-1/2 lg:w-1/3">
                <CallForEventCard
                  data={data}
                />
              </div>
            ))}
          </div>
        </section>
        </section>

        {/* Events */}
        <section id="events" className="pt-16">
          <div className="flex items-center gap-3 mb-6">
            <CalendarClock className="w-6 h-6 text-dark-secondary" />
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-[var(--color-text)]">
              Upcoming Events
            </h2>
          </div>
          <UpcomingEvents
            events={eventsData.upcomingEvents ?? []}
            emptyMessage="No upcoming events. Stay tuned!"
          />
        </section>
        <section className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <CalendarCheck className="w-6 h-6 text-dark-secondary" />
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-[var(--color-text)]">
              Past Events
            </h2>
          </div>
          <PastEventsAccordion events={eventsData.pastEvents ?? []} />
        </section>

        {/* Sponsors */}
        <section id="sponsors" className="pt-16">
          <Sponsors />
        </section>

        {/* Community Partners */}
        <section id="partners" className="pt-16">
          <CommunityPartners />
        </section>

        {/* Core Team */}
        <section id="team" className="pt-16">
          <TeamSection />
        </section>

        {/* Contributors */}
        <section id="contributors" className="pt-16">
          <ContributorsSection />
        </section>
      </div>

      <Footer />
    </>
  );
}
