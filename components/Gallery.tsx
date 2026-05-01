"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroImages } from "@/lib/images";

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 760px)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(stripRef.current, {
        xPercent: -22,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const widths = [520, 380, 460, 420, 540, 380, 480, 420, 500];

  return (
    <section
      ref={ref}
      style={{
        padding: "100px 0 120px",
        overflow: "hidden",
        background: "linear-gradient(180deg, #08080C, var(--bg))",
      }}
    >
      <div className="container-x" style={{ padding: "0 40px", marginBottom: 36 }}>
        <div className="section-head reveal" style={{ marginBottom: 0 }}>
          <span className="eyebrow">Inside the Iconic Club</span>
          <h2 className="h-display">
            Real floor.
            <br />
            <span style={{ color: "var(--red)" }}>Real members.</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: 620 }}>
            Photographs from Fitness First Iconic, Saket — Select Citywalk.
          </p>
        </div>
      </div>
      <div ref={stripRef} style={{ display: "flex", gap: 18, padding: "0 40px", willChange: "transform" }}>
        {[...heroImages, ...heroImages.slice(0, 3)].map((src, i) => (
          <div
            key={i}
            style={{
              flex: `0 0 ${widths[i % widths.length]}px`,
              height: 480,
              borderRadius: 18,
              overflow: "hidden",
              position: "relative",
              background: "#0A0A0E",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              loading="lazy"
              referrerPolicy="no-referrer"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "contrast(1.06) saturate(0.85) brightness(0.85)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 60%, rgba(7,7,10,0.85))",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 18,
                left: 20,
                right: 20,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--display)",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--red)",
                  letterSpacing: "0.2em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--t2)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Saket · Iconic
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
