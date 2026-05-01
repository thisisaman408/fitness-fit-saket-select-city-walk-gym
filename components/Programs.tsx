"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowIcon, IconBadge, SectionHead } from "./ui";
import { programs } from "@/lib/data";
import { programIconByCode } from "@/lib/programIcons";

export function Programs({ onCustomPlan }: { onCustomPlan: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".program-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.07,
        ease: "power3.out",
        immediateRender: false, // don't pre-apply opacity:0 so anchor jumps still show cards
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const total = programs.length + 1; // 7 programs + 1 CTA = 8 (perfect 4-col grid)

  return (
    <section
      id="programs"
      ref={sectionRef}
      style={{ background: "linear-gradient(180deg, var(--bg) 0%, #0A0A0F 100%)" }}
    >
      <div className="container-x">
        <SectionHead
          eyebrow="Program Matrix"
          title={
            <>
              Train for the way <span style={{ color: "var(--red)" }}>you move.</span>
            </>
          }
          sub="Seven proven training systems. Stack them, sequence them, or work one to mastery."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 1,
            background: "var(--stroke)",
            border: "1px solid var(--stroke)",
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          {programs.map((p, i) => {
            const Icon = programIconByCode[p.code];
            const active = hover === i;
            return (
              <div
                key={i}
                className="program-card"
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                style={{
                  background: active
                    ? "linear-gradient(180deg, rgba(230,0,40,0.08), rgba(230,0,40,0.02))"
                    : "var(--bg-elev)",
                  padding: "32px 30px 32px",
                  position: "relative",
                  cursor: "pointer",
                  transition: "background .35s",
                  minHeight: 280,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <IconBadge size={44} active={active}>
                    {Icon && <Icon size={20} strokeWidth={2.2} />}
                  </IconBadge>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span
                      style={{
                        fontFamily: "var(--display)",
                        fontSize: 12,
                        fontWeight: 700,
                        color: active ? "var(--red)" : "var(--t3)",
                        letterSpacing: "0.18em",
                      }}
                    >
                      {p.code}
                    </span>
                    <span
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 99,
                        border: `1px solid ${active ? "var(--red)" : "var(--stroke-hi)"}`,
                        display: "grid",
                        placeItems: "center",
                        color: active ? "var(--red)" : "var(--t2)",
                        transition: "all .3s",
                        transform: active ? "rotate(0deg)" : "rotate(-30deg)",
                      }}
                    >
                      <ArrowIcon size={11} />
                    </span>
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 24,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    marginTop: 26,
                    lineHeight: 1.1,
                  }}
                >
                  {p.t}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--t2)", marginTop: 12 }}>
                  {p.d}
                </p>
                <div style={{ flex: 1 }} />
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    height: 2,
                    width: active ? "100%" : "24%",
                    background: "var(--red)",
                    transition: "width .5s cubic-bezier(.2,.8,.2,1)",
                  }}
                />
              </div>
            );
          })}

          {/* 8th cell — CTA card to fill grid */}
          <button
            className="program-card"
            onClick={onCustomPlan}
            style={{
              background:
                "linear-gradient(160deg, rgba(230,0,40,0.22), rgba(230,0,40,0.05) 60%, rgba(230,0,40,0.02))",
              padding: "32px 30px 32px",
              position: "relative",
              cursor: "pointer",
              minHeight: 280,
              display: "flex",
              flexDirection: "column",
              border: 0,
              textAlign: "left",
              color: "inherit",
              fontFamily: "inherit",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <IconBadge size={44} active>
                {programIconByCode["08"] &&
                  (() => {
                    const Icon = programIconByCode["08"];
                    return <Icon size={20} strokeWidth={2.2} />;
                  })()}
              </IconBadge>
              <span
                style={{
                  fontFamily: "var(--display)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--red)",
                  letterSpacing: "0.18em",
                }}
              >
                FOR YOU
              </span>
            </div>
            <h3
              style={{
                fontFamily: "var(--display)",
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginTop: 26,
                lineHeight: 1.1,
              }}
            >
              Build Your Plan
              <br />
              <span style={{ color: "var(--red)" }}>with a coach.</span>
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--t1)", marginTop: 12 }}>
              Not sure where to start? Book a 20-min consult — we&apos;ll map your goals to the
              right programs.
            </p>
            <div style={{ flex: 1 }} />
            <span
              className="btn btn-primary"
              style={{ alignSelf: "flex-start", marginTop: 18, padding: "12px 18px", fontSize: 13 }}
            >
              Talk to a Coach <ArrowIcon size={12} />
            </span>
            <div
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                height: 2,
                width: "100%",
                background: "var(--red)",
              }}
            />
          </button>
        </div>
        <div style={{ marginTop: 18, fontSize: 12, color: "var(--t3)", textAlign: "center" }}>
          {total} ways to train · all included with membership
        </div>
      </div>
    </section>
  );
}
