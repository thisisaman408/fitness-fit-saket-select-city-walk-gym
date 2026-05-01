"use client";

import { LogoMark, WhatsAppIcon } from "./ui";
import { club } from "@/lib/data";

export function Footer({ waLink }: { waLink: string }) {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--stroke)",
        background: "#050507",
        padding: "90px 40px 40px",
      }}
    >
      <div className="container-x" style={{ padding: 0 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 50,
            alignItems: "start",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <LogoMark height={42} />
              <div className="nav-name" style={{ fontSize: 16, paddingLeft: 14, borderLeft: "1px solid var(--stroke)" }}>
                Iconic<small>Saket · Citywalk</small>
              </div>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "var(--t2)",
                marginTop: 22,
                lineHeight: 1.6,
                maxWidth: 320,
              }}
            >
              India&apos;s first and only Fitness First Iconic club, inside Select Citywalk, Saket.
            </p>
            <a
              className="btn btn-secondary"
              href={waLink}
              target="_blank"
              rel="noopener"
              style={{ marginTop: 22, padding: "12px 18px", fontSize: 13 }}
            >
              <WhatsAppIcon size={14} /> Message us
            </a>
            <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
              {[
                { l: "Instagram", h: club.social.instagram },
                { l: "YouTube", h: club.social.youtube },
                { l: "Facebook", h: club.social.facebook },
                { l: "Twitter", h: club.social.twitter },
              ].map((s) => (
                <a
                  key={s.l}
                  href={s.h}
                  target="_blank"
                  rel="noopener"
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--t2)",
                    border: "1px solid var(--stroke)",
                    padding: "8px 12px",
                    borderRadius: 99,
                    transition: "all .2s",
                  }}
                >
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--red)",
              }}
            >
              Hours
            </h4>
            <p style={{ fontSize: 14, color: "var(--t1)", marginTop: 14, lineHeight: 1.8 }}>
              {club.hoursWeek}
              <br />
              {club.hoursSun}
            </p>
          </div>

          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--red)",
              }}
            >
              Visit
            </h4>
            <p style={{ fontSize: 14, color: "var(--t1)", marginTop: 14, lineHeight: 1.7 }}>
              The New Delhi Dome
              <br />
              5th &amp; 6th Floor, Select Citywalk
              <br />
              Saket District Centre, New Delhi 110017
            </p>
          </div>

          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--red)",
              }}
            >
              Phone
            </h4>
            <p style={{ fontSize: 14, color: "var(--t1)", marginTop: 14, lineHeight: 1.8 }}>
              <a href={`tel:${club.phone1}`} style={{ display: "block" }}>
                {club.phone1}
              </a>
              <a href={`tel:${club.phone2}`} style={{ display: "block" }}>
                {club.phone2}
              </a>
              <a href={`tel:${club.phone3.replace(/\s/g, "")}`} style={{ display: "block" }}>
                {club.phone3}
              </a>
            </p>
          </div>
        </div>

        <div className="divider" style={{ margin: "60px 0 28px" }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            fontSize: 11.5,
            color: "var(--t3)",
            letterSpacing: "0.06em",
          }}
        >
          <span>© 2026 — Concept demo.</span>
          <span style={{ maxWidth: 720, textAlign: "right", lineHeight: 1.5 }}>
            Concept redesign by Aman. Not affiliated with Fitness First. Built for demonstration purposes.
          </span>
        </div>
      </div>
    </footer>
  );
}
