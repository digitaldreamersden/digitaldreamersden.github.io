import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail, ShieldCheck } from 'lucide-react';
import Navigation from '@/app/components/Navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { getAssetPath } from '@/app/utils/paths';

export const metadata: Metadata = {
  title: 'Code of Conduct | Digital Dreamers Den (D3)',
  description:
    'Code of Conduct and community guidelines for Digital Dreamers Den (D3) events, webinars, and gatherings.',
  alternates: {
    canonical: '/coc',
  },
  openGraph: {
    url: '/coc',
    title: 'Code of Conduct | Digital Dreamers Den (D3)',
    description:
      'Code of Conduct and community guidelines for Digital Dreamers Den (D3) events, webinars, and gatherings.',
  },
  twitter: {
    title: 'Code of Conduct | Digital Dreamers Den (D3)',
    description:
      'Code of Conduct and community guidelines for Digital Dreamers Den (D3) events, webinars, and gatherings.',
  },
};

export default function CodeOfConductPage() {
  return (
    <>
      <Navigation />

      <div className="mx-auto space-y-8 mb-24 max-w-4xl">
        <Header />

        <div className="pt-4 space-y-6">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-dark-muted hover:text-dark-text transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>

          <div className="rounded-bento border border-dark-border bg-dark-card p-6 md:p-10 lg:p-12 relative overflow-hidden shadow-sm">
            {/* Logo Container */}
            {/* <div className="flex justify-center mb-6">
              <Image
                src={getAssetPath('/full_logo.png')}
                alt="Digital Dreamers Den (D3) Logo"
                width={280}
                height={129}
                className="max-w-[240px] md:max-w-[280px] h-auto rounded-xl"
                priority
              />
            </div> */}

            <div className="text-center space-y-3 mb-8">
              {/* Island: Community Guidelines kept in yellow/orange */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-dark-border bg-dark-card text-xs font-semibold text-dark-secondary">
                <ShieldCheck className="w-3.5 h-3.5 text-dark-secondary" />
                <span>Community Guidelines</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-heading text-[#004aad] dark:text-white tracking-tight">
                Code of Conduct
              </h1>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {/* Message from the Organizers */}
              <div className="pt-2">
                <h2 className="text-xl md:text-2xl font-bold text-heading text-[#004aad] dark:text-white mb-4 pb-2 border-b border-dark-border/60">
                  Message from the Organizers
                </h2>
                <div className="space-y-4 text-dark-muted text-sm md:text-base leading-relaxed">
                  <p>
                    We invite you to join events organized by Digital Dreamers Den
                    (D3), our youtube livestreams, and other community gatherings
                    in a spirit of curiosity, friendliness, open-mindedness, and
                    respect.
                  </p>

                  <p>
                    Digital Dreamers Den (D3) is a community for collaboration, for
                    building free and open events/conferences on AI and Full-Stack
                    Engineering, and to ensure the quality of such conversations,
                    there are certain rules that we, and you, are expected to
                    follow.
                  </p>

                  <p>
                    All attendees, speakers, sponsors and volunteers at our events
                    are required to agree with the following code of conduct. We
                    expect cooperation from all participants to help ensure a safe
                    environment for everybody.
                  </p>
                </div>
              </div>

              {/* The Short Version */}
              <div className="pt-6">
                <h2 className="text-xl md:text-2xl font-bold text-heading text-[#004aad] dark:text-white mb-4 pb-2 border-b border-dark-border/60">
                  The Short Version
                </h2>
                <div className="space-y-4 text-dark-muted text-sm md:text-base leading-relaxed">
                  <p>
                    Digital Dreamers Den (D3) is dedicated to providing a
                    harassment-free experience for everyone, regardless of
                    gender, gender identity and expression, age, sexual
                    orientation, disability, physical appearance, body size,
                    race, ethnicity, religion (or lack thereof), or technology
                    choices.
                  </p>

                  <p>
                    We do not tolerate harassment of participants, volunteers,
                    sponsors or anyone else associated with the community in any
                    form. Sexual language and imagery is not appropriate for any
                    of our events, including talks, webinars, and other online
                    media.
                  </p>

                  <p>
                    Participants violating these rules may be sanctioned or
                    expelled at the discretion of the foundation. If you feel
                    uncomfortable or harassed at any of our events or
                    communication channels, please report it to the community
                    team using the procedures mentioned in the Code of Conduct.
                  </p>
                </div>
              </div>

              {/* The Not So Short Version */}
              <div className="pt-6">
                <h2 className="text-xl md:text-2xl font-bold text-heading text-[#004aad] dark:text-white mb-4 pb-2 border-b border-dark-border/60">
                  The Not So Short Version
                </h2>
                <div className="space-y-4 text-dark-muted text-sm md:text-base leading-relaxed">
                  <p>
                    Harassment includes but is not limited to offensive verbal
                    or non-verbal comments related to gender, gender identity
                    and expression, age, sexual orientation, disability,
                    physical appearance, body size, race, ethnicity, religion,
                    technology choices, sexual images in public spaces,
                    deliberate intimidation, stalking, following, harassing
                    photography or recording, sustained disruption of the event,
                    inappropriate physical contact, and unwelcome sexual
                    attention.
                  </p>

                  <p>
                    Participants asked to stop any such behaviour are expected
                    to comply immediately.
                  </p>

                  <p>
                    If a participant engages in harassing behaviour, the Digital
                    Dreamers Den (D3) team may take any action they deem
                    appropriate, including warning the offender or expulsion from
                    the event.
                  </p>

                  <p>
                    The code of conduct and anti-harassment policies apply to
                    everyone participating in the event including sponsors,
                    judges, mentors, volunteers, organisers, and Digital
                    Dreamers Den (D3) team staff. Regardless of the event being a
                    virtual or online-only event, we expect participants to
                    adhere to these rules at all avenues, online and offline
                    alike.
                  </p>
                </div>
              </div>

              {/* Reporting Code of Conduct Violations */}
              <div className="pt-6">
                <h2 className="text-xl md:text-2xl font-bold text-heading text-[#004aad] dark:text-white mb-4 pb-2 border-b border-dark-border/60">
                  Reporting Code of Conduct Violations
                </h2>
                <p className="text-dark-muted text-sm md:text-base leading-relaxed mb-4">
                  If you are being harassed, notice that someone else is being
                  harassed, or come across a violation of the code of conduct,
                  please contact a volunteer/organiser immediately.
                </p>

                <div className="rounded-xl border border-dark-border bg-dark-card p-5 md:p-6 my-5 shadow-sm space-y-2">
                  <p className="text-dark-text/90 text-sm md:text-base">
                    Participants can email{' '}
                    <a
                      href="mailto:digitaldreamersdenofficial@gmail.com"
                      className="text-[#004aad] font-semibold hover:underline underline-offset-2 break-all"
                    >
                      digitaldreamersdenofficial@gmail.com
                    </a>{' '}
                    for any reports or queries.
                  </p>
                  <p className="text-dark-text font-bold text-sm md:text-base">
                    All reporters will remain anonymous.
                  </p>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-heading text-[#004aad] dark:text-white mt-6 mb-3">
                  Special Incidents
                </h3>
                <p className="text-dark-muted text-sm md:text-base leading-relaxed mb-4">
                  If you are uncomfortable reporting your situation to volunteers
                  or core team members at the community directly in case of
                  emergency, direct contact details for COC Wing are listed
                  below:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="rounded-xl border border-dark-border bg-dark-card hover:bg-dark-card-hover p-5 transition-all shadow-sm space-y-1.5">
                    <div className="font-semibold text-heading text-[#004aad] dark:text-white text-base">
                      Aravind Kumar J
                    </div>
                    <a
                      href="mailto:aravind2808@gmail.com"
                      className="inline-flex items-center gap-2 text-sm text-dark-muted hover:text-heading hover:text-[#004aad] dark:hover:text-white transition-colors break-all"
                    >
                      <Mail className="w-4 h-4 shrink-0 text-heading text-[#004aad] dark:text-white" />
                      <span>aravind2808@gmail.com</span>
                    </a>
                  </div>

                  <div className="rounded-xl border border-dark-border bg-dark-card hover:bg-dark-card-hover p-5 transition-all shadow-sm space-y-1.5">
                    <div className="font-semibold text-heading text-[#004aad] dark:text-white text-base">
                      Sahithya B A
                    </div>
                    <a
                      href="mailto:sahithyabalasubramaniam@gmail.com"
                      className="inline-flex items-center gap-2 text-sm text-dark-muted hover:text-heading hover:text-[#004aad] dark:hover:text-white transition-colors break-all"
                    >
                      <Mail className="w-4 h-4 shrink-0 text-heading text-[#004aad] dark:text-white" />
                      <span>sahithyabalasubramaniam@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="text-center my-8">
                <Link
                  href="/"
                  className="inline-block px-6 py-3 rounded-xl font-bold text-white transition-all hover:shadow-lg hover:scale-105"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  Visit Digital Dreamers Den (D3)
                </Link>
              </div>

              {/* Credit Section */}
              <div className="rounded-xl border border-dark-border bg-dark-card p-5 md:p-6 my-8 shadow-sm space-y-2">
                <h3 className="text-base font-bold text-heading text-[#004aad] dark:text-white">
                  Credit
                </h3>
                <p className="text-xs md:text-sm text-dark-muted leading-relaxed">
                  Portions of this Code of Conduct are based on the example code
                  of conduct from the{' '}
                  <a
                    href="https://mlh.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#004aad] hover:underline font-medium"
                  >
                    MLH policies
                  </a>
                  , created by Major League Hacking, under a Creative Commons
                  attribution-ShareAlike 4.0 International Public License &amp;
                  the code of conduct of{' '}
                  <a
                    href="https://fossunited.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#004aad] hover:underline font-medium"
                  >
                    FOSS United
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
