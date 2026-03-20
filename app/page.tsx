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
import { CalendarCheck, CalendarClock } from 'lucide-react';
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
        <section id="events" className="pt-16 space-y-6">
          <SectionHeader title="Upcoming Events" icon={CalendarClock} />
          <UpcomingEvents
            events={eventsData.upcomingEvents ?? []}
            emptyMessage="No upcoming events. Stay tuned!"
          />
        </section>
        <section className="pt-8 space-y-6">
          <SectionHeader title="Past Events" icon={CalendarCheck} />
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
