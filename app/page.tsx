import Navigation from './components/Navigation';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import NextEventCard from './components/NextEventCard';
import PastEventCard from './components/PastEventCard';
import MissionLogs from './components/MissionLogs';
import TeamSection from './components/TeamSection';
import CommunityPartners from './components/CommunityPartners';
import CallForSpeakers from './components/CallForSpeakers';
import CallForVolunteers from './components/CallForVolunteers';
import Sponsors from './components/Sponsors';
import ContactUs from './components/ContactUs';
import ContributorsSection from './components/ContributorsSection';
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
        <section id="about" className="pt-16">
          <About />
        </section>
        {/*Core  Team */}
        <section id="team" className="pt-16">
          <TeamSection />
        </section>
        {/* Main Bento Grid */}
        <section
          id="events"
          className="flex flex-wrap grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-6"
        >
          <NextEventCard />
          <PastEventCard/>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {/* Call for Speakers Section */}
            <CallForSpeakers />
            <CallForVolunteers />
          </div>
        </section>

        {/* Secondary Section: Past Logs & Team */}
        <section id="team" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MissionLogs />
          <TeamSection />
        </section>

        {/* Community Partners Section */}
        <section id="partners">
          <CommunityPartners />
        </section>

        {/* Sponsors Section */}
        <section id="sponsors">
          <Sponsors />
        </section>

        {/* Contributors Section */}
        <section id="contributors">
          <ContributorsSection />
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
