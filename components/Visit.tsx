"use client";

import { Clock, Mail, MapPin, Navigation } from "lucide-react";
import { IconBadge, PhoneIcon, SectionHead, WhatsAppIcon } from "./ui";
import { club } from "@/lib/data";

// Pin the actual gym (inside the mall, 5th–6th floor) rather than the mall building.
const MAP_SRC =
  "https://maps.google.com/maps?q=Fitness+First+Iconic+Saket+Select+Citywalk&t=&z=16&ie=UTF8&iwloc=&output=embed";
const MAP_LINK =
  "https://maps.google.com/?q=Fitness+First+Iconic+Saket+Select+Citywalk";

export function Visit({ waLink }: { waLink: string }) {
  return (
    <section
      id="visit"
      style={{
        background: "linear-gradient(180deg, #050507 0%, #08080C 100%)",
        position: "relative",
      }}
    >
      <div className="container-x">
        <SectionHead
          eyebrow="Visit the Club"
          title={
            <>
              Walk in to <span style={{ color: "var(--red)" }}>Select Citywalk</span>.
            </>
          }
          sub="On the 5th & 6th floor inside the New Delhi Dome. Mall parking covered. Lifts open from 6:30 AM."
        />

        <div
          className="reveal stack-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)",
            gap: 18,
            alignItems: "stretch",
          }}
        >
          {/* Map */}
          <div
            style={{
              position: "relative",
              minHeight: 380,
              borderRadius: 22,
              overflow: "hidden",
              border: "1px solid var(--stroke-hi)",
              background: "#0A0A0E",
              boxShadow: "0 30px 60px -20px rgba(230,0,40,0.25)",
            }}
          >
            <iframe
              title="Select Citywalk, Saket — Map"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                inset: 0,
                border: 0,
                filter: "grayscale(0.85) contrast(1.1) brightness(0.85)",
              }}
            />
            {/* red tint overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(230,0,40,0.18), transparent 70%)",
                mixBlendMode: "screen",
              }}
            />
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
              style={{
                position: "absolute",
                bottom: 22,
                left: 22,
                padding: "12px 18px",
                fontSize: 13,
                zIndex: 2,
              }}
            >
              <Navigation size={14} strokeWidth={2.4} /> Get Directions
            </a>
          </div>

          {/* Contact stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <ContactCard
              icon={<MapPin size={20} strokeWidth={2.2} />}
              label="Address"
              value={
                <>
                  The New Delhi Dome
                  <br />
                  5th &amp; 6th Floor, Select Citywalk
                  <br />
                  Saket District Centre, New Delhi 110017
                </>
              }
            />
            <ContactCard
              icon={<Clock size={20} strokeWidth={2.2} />}
              label="Opening Hours"
              value={
                <>
                  {club.hoursWeek}
                  <br />
                  {club.hoursSun}
                </>
              }
            />
            <ContactCard
              icon={<PhoneIcon size={20} />}
              label="Call the Club"
              value={
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <a href={`tel:${club.phone1}`} style={{ color: "var(--t1)", fontWeight: 600 }}>
                    {club.phone1}
                  </a>
                  <a href={`tel:${club.phone2}`} style={{ color: "var(--t1)", fontWeight: 600 }}>
                    {club.phone2}
                  </a>
                  <a
                    href={`tel:${club.phone3.replace(/\s/g, "")}`}
                    style={{ color: "var(--t1)", fontWeight: 600 }}
                  >
                    {club.phone3}
                  </a>
                </div>
              }
            />
            <ContactCard
              icon={<Mail size={20} strokeWidth={2.2} />}
              label="Email"
              value={
                <a href={`mailto:${club.email}`} style={{ color: "var(--t1)", fontWeight: 600 }}>
                  {club.email}
                </a>
              }
            />

            <a
              href={waLink}
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 14px 40px -10px rgba(37,211,102,0.55), inset 0 1px 0 rgba(255,255,255,0.18)",
                marginTop: 4,
                padding: "16px 22px",
              }}
            >
              <WhatsAppIcon size={18} /> Talk on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div
      className="glass glass-hover"
      style={{ padding: "20px 22px", display: "flex", gap: 16, alignItems: "flex-start" }}
    >
      <IconBadge size={42}>{icon}</IconBadge>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--red)",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: 14,
            color: "var(--t1)",
            marginTop: 8,
            lineHeight: 1.55,
            fontWeight: 500,
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}
