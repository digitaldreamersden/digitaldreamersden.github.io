import Navigation from './components/Navigation';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EventCardCarousel from './components/EventCardCarousel';
import TeamSection from './components/TeamSection';
import CommunityPartners from './components/CommunityPartners';
import CallForEventCard from './components/CallForEventCard';
import { callForEvents } from './data/callForEvents';
import eventsData from './data/events';
import Sponsors from './components/Sponsors';
import ContactUs from './components/ContactUs';
import ContributorsSection from './components/ContributorsSection';
import { CalendarCheck, CalendarClock, Megaphone } from 'lucide-react';
import SocialLinks from './components/ContactUs/SocialLinks';
import { MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navigation />

      <div className="mx-auto space-y-8 mb-24">
        <Header />

        {/* Home */}
        <section id="home">
          <HeroSection />
        </section>
        {/*Core  Team */}
        <section id="team" className="pt-16">
          <TeamSection />
        </section>
        <section id="events">
          <div className="flex items-center gap-3 mb-6">
            <CalendarClock className="w-6 h-6 text-dark-secondary" />
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-[var(--color-text)]">
              Upcoming Events
            </h2>
          </div>
          <EventCardCarousel
            events={eventsData.upcomingEvents ?? []}
            variant="upcoming"
            ariaLabel="Upcoming Events Carousel"
            emptyMessage="No upcoming events. Stay tuned!"
          />
        </section>
        <section>
          <div className="flex items-center gap-3 mb-6">
            <CalendarCheck className="w-6 h-6 text-dark-secondary" />
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-[var(--color-text)]">
              Past Events
            </h2>
          </div>
          <EventCardCarousel
            events={eventsData.pastEvents ?? []}
            variant="past"
            ariaLabel="Past Events Carousel"
          />
        </section>


        {/* <section id="mission-logs" className="pt-16">
          <MissionLogs />
        </section> */}

        {/* Community Partners Section */}
        <section id="partners" className="pt-16">
          <CommunityPartners />
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="pt-16">
          <Sponsors />
        </section>

        {/* Contributors Section */}
        <section id="contributors" className="pt-16">
          <ContributorsSection />
        </section>
        {/* Call for events */}
        <section id="call-for-events" className="pt-16">
          <div className="flex items-center gap-3 mb-6">
            <Megaphone className="w-6 h-6 text-dark-secondary" />
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-[var(--color-text)]">
              Call for events
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {callForEvents.map((data) => (
              <CallForEventCard key={data.title} data={data} />
            ))}
          </div>
        </section>
        {/* Contact Us Section */}
        <section id="contact" className="pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Get in Touch - Left */}
            <ContactUs />
            
            {/* Socials - Right */}
            <div className="space-y-6 h-full flex flex-col">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-dark-secondary" />
                Socials
              </h2>
              <div className="bg-dark-card rounded-3xl border border-dark-border p-6 md:p-8 flex-1 flex-1">
                <SocialLinks />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}