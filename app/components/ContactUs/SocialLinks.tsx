"use client";

import { Linkedin, Instagram, Youtube, Twitter, MessageCircle, Calendar, Mail } from "lucide-react";

const socialPlatforms = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://d3community.in/linkedin",
    color: "#0077B5",
    description: "Connect with us professionally"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://d3community.in/instagram",
    color: "#E4405F",
    description: "Follow our journey"
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://d3community.in/youtube",
    color: "#FF0000",
    description: "Watch our content"
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    url: "https://d3community.in/x",
    color: "#000000",
    description: "Join the conversation"
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://d3community.in/whatsapp",
    color: "#25D366",
    description: "Join our community"
  },
  {
    name: "Luma Events",
    icon: Calendar,
    url: "https://d3community.in/luma",
    color: "#FF6B00",
    description: "RSVP to events"
  }
];

export default function SocialLinks() {
  return (
    <div>
      {/* Social Links Grid - 3 per row on desktop, 2 per row on mobile */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {socialPlatforms.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-3 p-5 rounded-xl bg-dark-card-hover border border-dark-border hover:border-dark-primary transition-all duration-300 overflow-hidden"
              aria-label={`${platform.name} - ${platform.description}`}
            >
              {/* Gradient Background on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${platform.color}22 0%, ${platform.color}11 100%)` }}
              />

              {/* Icon */}
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative z-10"
                style={{ 
                  background: 'var(--color-card)',
                  border: '2px solid var(--color-border)'
                }}
              >
                <Icon 
                  className="w-7 h-7 transition-colors duration-300 text-dark-muted group-hover:text-dark-text" 
                  style={{ 
                    color: `var(--color-text-muted)`,
                  }}
                />
              </div>

              {/* Platform Name */}
              <div className="text-center relative z-10">
                <p className="font-semibold text-sm text-dark-text group-hover:text-dark-primary transition-colors duration-300">
                  {platform.name}
                </p>
                <p className="text-xs text-dark-muted mt-1">
                  {platform.description}
                </p>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div 
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
                  }}
                />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
