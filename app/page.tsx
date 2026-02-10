import Navigation from './components/Navigation';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import NextEventCard from './components/NextEventCard';
import PastEventCard from './components/PastEventCard';
// import MissionLogs from './components/MissionLogs';
import TeamSection from './components/TeamSection';
import CommunityPartners from './components/CommunityPartners';
import CallForEventCard from './components/CallForEventCard';
import { callForEvents } from './data/callForEvents';
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
        <section
          id="about-socials"
          className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-16"
        >
          <div className="col-span-full md:col-span-2 w-full flex flex-col h-full">
            <About />
          </div>

          {/* Social Links Section - Takes Right 50% */}
          <div className="col-span-full md:col-span-2 w-full flex flex-col h-full">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-dark-secondary" />
                Socials
              </h2>
              <div className="bg-dark-card rounded-3xl border border-dark-border p-6 md:p-8">
                <SocialLinks />
              </div>
            </div>
          </div>
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
          <div className="flex justify-center items-center">
            <NextEventCard />
            
          </div>

        </section>
        <section>
        <div className="flex items-center gap-3 mb-6">
            <CalendarCheck className="w-6 h-6 text-dark-secondary" />
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-[var(--color-text)]">
              Past Events
            </h2>
          </div>
          <PastEventCard/>
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
          <ContactUs />
        </section>
      </div>
    </>
  );
}