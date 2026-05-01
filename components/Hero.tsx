"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowIcon, FloatStat, PhoneIcon, WhatsAppIcon } from "./ui";
import { HeroCanvas } from "./HeroCanvas";
import { heroBackdrop } from "@/lib/images";
import { club } from "@/lib/data";

export function Hero({ onTrial, waLink }: { onTrial: () => void; waLink: string }) {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(photoRef.current, {
        yPercent: 18,
        scale: 1.08,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 0.6 },
      });
      gsap.to(titleRef.current, {
        yPercent: -8,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 0.6 },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: "100vh",
        padding: 0,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div ref={photoRef} style={{ position: "absolute", inset: "-5% 0", zIndex: 0, willChange: "transform" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroBackdrop}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            filter: "contrast(1.12) saturate(0.7) brightness(0.5)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(95deg, rgba(7,7,10,0.96) 0%, rgba(7,7,10,0.78) 40%, rgba(7,7,10,0.5) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(60% 80% at 80% 50%, rgba(230,0,40,0.32), transparent 60%)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      <HeroCanvas />

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 220,
          background: "linear-gradient(180deg, transparent, var(--bg))",
          zIndex: 2,
        }}
      />

      <div
        className="container-x hero-inner"
        style={{ position: "relative", zIndex: 3, padding: "140px 40px 100px", width: "100%" }}
      >
        <div ref={titleRef} className="reveal in" style={{ maxWidth: 820 }}>
          <span className="eyebrow" style={{ color: "#FF5570" }}>
            India&apos;s first Fitness First Iconic club
          </span>
          <h1
            className="h-display"
            style={{ fontSize: "clamp(48px, 8.5vw, 124px)", marginTop: 22, lineHeight: 0.92 }}
          >
            Fitness First
            <br />
            <span style={{ color: "var(--red)" }}>Iconic</span>, Saket.
          </h1>
          <p className="body-lg" style={{ marginTop: 28, maxWidth: 560, fontSize: 19 }}>
            India&apos;s first and only Fitness First Iconic club, built across 20,000 sq ft inside Select Citywalk.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap" }}>
            <button className="btn btn-primary" onClick={onTrial}>
              Claim 1-Day Free Trial <ArrowIcon size={14} />
            </button>
            <a
              className="btn btn-primary"
              href={waLink}
              target="_blank"
              rel="noopener"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow:
                  "0 14px 40px -10px rgba(37,211,102,0.55), inset 0 1px 0 rgba(255,255,255,0.18)",
              }}
            >
              <WhatsAppIcon size={16} /> Talk on WhatsApp
            </a>
            <a className="btn btn-secondary" href={`tel:${club.phone1}`}>
              <PhoneIcon size={14} /> {club.phone1}
            </a>
          </div>

          <div
            className="reveal"
            style={{
              marginTop: 56,
              display: "flex",
              gap: 32,
              flexWrap: "wrap",
              fontSize: 12,
              color: "var(--t3)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            <span>
              <span style={{ color: "var(--red)" }}>●</span>&nbsp;&nbsp;Open today · 6:30 — 22:00
            </span>
            <span>5th &amp; 6th Floor · Select Citywalk</span>
            <span>4.5 ★ · 2,800+ reviews</span>
          </div>
        </div>

        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }} className="hide-mobile">
          <FloatStat v="20,000" u="sq ft" l="Iconic floorplate" x="62%" y="22%" delay={0.4} />
          <FloatStat v="7" u="zones" l="Purpose-built" x="74%" y="48%" delay={0.7} />
          <FloatStat v="20+" u="formats" l="Group classes" x="58%" y="72%" delay={1.0} />
        </div>
      </div>
    </section>
  );
}
