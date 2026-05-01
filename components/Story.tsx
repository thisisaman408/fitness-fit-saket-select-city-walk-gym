"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClubPhoto, IconBadge, SectionHead, Tag } from "./ui";
import { storyCards } from "@/lib/data";
import { storyImages } from "@/lib/images";
import { storyIconByTitle } from "@/lib/programIcons";

export function Story() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(max-width: 900px)");
    const onChange = () => setIsMobile(m.matches);
    onChange();
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    gsap.registerPlugin(ScrollTrigger);
    const track = trackRef.current;
    const pin = pinRef.current;
    if (!track || !pin) return;
    const ctx = gsap.context(() => {
      const distance = () => track.scrollWidth - window.innerWidth + 80;
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          pin: true,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.6,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const cards = track.querySelectorAll(".story-card");
            if (!cards.length) return;
            const idx = Math.min(cards.length - 1, Math.round(self.progress * (cards.length - 1)));
            setActive(idx);
          },
        },
      });
    }, pin);
    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section id="story" style={{ position: "relative", background: "var(--bg)" }}>
      <div style={{ padding: "140px 0 40px" }}>
        <div className="container-x" style={{ padding: "0 40px" }}>
          <SectionHead
            eyebrow="The Iconic Standard"
            title={
              <>
                Not a gym.
                <br />A <em style={{ fontStyle: "normal", color: "var(--red)" }}>training club</em>.
              </>
            }
            sub="Eight purpose-built zones across 20,000 sq ft. Every square foot designed to make you stronger, faster, calmer."
          />
        </div>
      </div>

      <div
        ref={pinRef}
        style={{
          height: isMobile ? "auto" : "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          ref={trackRef}
          className="no-scrollbar"
          style={{
            display: "flex",
            gap: 28,
            padding: isMobile ? "20px 24px 40px" : "0 40px",
            willChange: "transform",
            ...(isMobile
              ? {
                  overflowX: "auto",
                  scrollSnapType: "x mandatory",
                  WebkitOverflowScrolling: "touch",
                  width: "100%",
                }
              : { width: "max-content" }),
          }}
        >
          {storyCards.map((c, i) => (
            <div
              key={i}
              className="story-card glass"
              style={{
                flex: `0 0 ${isMobile ? "300px" : "420px"}`,
                scrollSnapAlign: "center",
                padding: 0,
                overflow: "hidden",
                transition: "transform .5s, border-color .5s, box-shadow .5s, opacity .5s",
                transform: active === i ? "scale(1)" : "scale(0.94)",
                opacity: active === i ? 1 : 0.55,
                borderColor: active === i ? "rgba(230,0,40,0.5)" : "var(--stroke)",
                boxShadow:
                  active === i
                    ? "0 40px 80px -30px rgba(230,0,40,0.55), 0 0 0 1px rgba(230,0,40,0.25)"
                    : "none",
              }}
            >
              <div style={{ position: "relative" }}>
                <ClubPhoto src={storyImages[c.t]} height={300} />
                <div style={{ position: "absolute", top: 16, left: 16 }}>
                  <Tag>{c.tag}</Tag>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 14,
                    right: 16,
                    fontFamily: "var(--display)",
                    fontSize: 13,
                    color: "#fff",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textShadow: "0 2px 12px rgba(0,0,0,0.6)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")} / 08
                </div>
              </div>
              <div style={{ padding: "22px 26px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <IconBadge size={40} active={active === i}>
                    {(() => {
                      const Icon = storyIconByTitle[c.t];
                      return Icon ? <Icon size={18} strokeWidth={2.2} /> : null;
                    })()}
                  </IconBadge>
                  <h3
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: 26,
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {c.t}
                  </h3>
                </div>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--t2)", marginTop: 12 }}>
                  {c.d}
                </p>
              </div>
            </div>
          ))}
          <div style={{ flex: "0 0 40px" }} />
        </div>

        {!isMobile && (
          <div
            style={{
              position: "absolute",
              bottom: 32,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 6,
              pointerEvents: "none",
            }}
          >
            {storyCards.map((_, i) => (
              <span
                key={i}
                style={{
                  width: active === i ? 32 : 8,
                  height: 3,
                  borderRadius: 2,
                  background: active === i ? "var(--red)" : "rgba(255,255,255,0.18)",
                  transition: "all .35s",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
