"use client";

import { Award, Calendar } from "lucide-react";
import { IconBadge, SectionHead, Tag } from "./ui";
import { coaches } from "@/lib/data";
import { trainers } from "@/lib/images";
import { coachIconByNumber } from "@/lib/programIcons";

export function Coaches() {
  return (
    <section style={{ background: "#08080C" }}>
      <div className="container-x">
        <SectionHead
          eyebrow="Coach Credibility"
          title={
            <>
              Certified coaches
              <br />
              for every goal.
            </>
          }
          sub="Six specialisations under one roof. International certification, in-house assessment, weekly review."
        />

        {/* Trainer cards */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            marginBottom: 60,
          }}
        >
          {trainers.map((t, i) => (
            <div key={i} className="glass glass-hover" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ position: "relative", aspectRatio: "4 / 5", background: "#0A0A0E" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.src}
                  alt={t.name}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 20%",
                    filter: "contrast(1.12) saturate(0.9) brightness(0.85)",
                  }}
                />
                {/* Duotone red wash */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(230,0,40,0.18) 0%, rgba(7,7,10,0.0) 30%, rgba(7,7,10,0.96) 100%)",
                    mixBlendMode: "multiply",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(120% 80% at 80% 10%, rgba(230,0,40,0.28), transparent 60%)",
                    mixBlendMode: "screen",
                  }}
                />

                {/* Top badges */}
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    right: 14,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Tag>0{i + 1}</Tag>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "5px 10px",
                      borderRadius: 99,
                      background: "rgba(0,0,0,0.55)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      border: "1px solid var(--stroke-hi)",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--t1)",
                    }}
                  >
                    <Award size={11} strokeWidth={2.5} color="#FF5570" /> {t.cert}
                  </span>
                </div>

                {/* Bottom info */}
                <div style={{ position: "absolute", bottom: 18, left: 18, right: 18 }}>
                  <div
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#fff",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.1,
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginTop: 8,
                      fontSize: 11,
                      color: "var(--t2)",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    <span style={{ color: "var(--red)" }}>Personal Trainer</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                      <Calendar size={11} strokeWidth={2.4} /> {t.years}+ yrs
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ padding: "16px 20px 20px" }}>
                <p style={{ fontSize: 13, color: "var(--t2)", lineHeight: 1.55 }}>{t.spec}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Specialisation cards */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
            gap: 16,
          }}
        >
          {coaches.map((c, i) => {
            const Icon = coachIconByNumber[c.n];
            return (
              <div key={i} className="glass glass-hover" style={{ padding: "30px 28px 28px", position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <IconBadge size={48} active>
                    {Icon && <Icon size={22} strokeWidth={2.2} />}
                  </IconBadge>
                  <span
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "var(--t3)",
                      letterSpacing: "0.18em",
                    }}
                  >
                    SPEC · {c.n}
                  </span>
                  <div style={{ height: 1, flex: 1, background: "var(--stroke)" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 22,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    marginTop: 22,
                    lineHeight: 1.15,
                  }}
                >
                  {c.t}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--t2)", marginTop: 12 }}>
                  {c.d}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
