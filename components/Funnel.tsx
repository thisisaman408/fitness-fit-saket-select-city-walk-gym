"use client";

import { IconBadge, SectionHead } from "./ui";
import { funnel } from "@/lib/data";
import { funnelIconByStep } from "@/lib/programIcons";

export function Funnel() {
  return (
    <section style={{ background: "linear-gradient(180deg, #08080C, #050507)" }}>
      <div className="container-x">
        <SectionHead
          eyebrow="The Business Case"
          title={
            <>
              Built to turn <span style={{ color: "var(--red)" }}>attention</span> into appointments.
            </>
          }
          sub="Every missed click is a missed membership conversation. This page is the funnel — fast, mobile-first, conversation-led."
        />
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 14,
            position: "relative",
          }}
        >
          {funnel.map((f, i) => {
            const Icon = funnelIconByStep[f.step];
            const last = i === funnel.length - 1;
            return (
              <div
                key={i}
                style={{
                  padding: "26px 24px 28px",
                  borderRadius: 18,
                  background: last
                    ? "linear-gradient(180deg, rgba(230,0,40,0.18), rgba(230,0,40,0.04))"
                    : "var(--surface)",
                  border: `1px solid ${last ? "rgba(230,0,40,0.5)" : "var(--stroke)"}`,
                  position: "relative",
                  minHeight: 240,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <IconBadge size={40} active={last}>
                    {Icon && <Icon size={18} strokeWidth={2.2} />}
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
                    {f.step}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    color: "var(--t3)",
                    textTransform: "uppercase",
                    marginTop: 16,
                  }}
                >
                  {f.metric}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 18,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    marginTop: 6,
                    lineHeight: 1.2,
                  }}
                >
                  {f.t}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: "var(--t2)", marginTop: 8 }}>
                  {f.d}
                </p>
                <div style={{ marginTop: "auto", paddingTop: 16 }}>
                  <div style={{ height: 3, borderRadius: 99, background: "var(--stroke)", overflow: "hidden" }}>
                    <div
                      style={{
                        width: `${((i + 1) / funnel.length) * 100}%`,
                        height: "100%",
                        background: "var(--red)",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="reveal"
          style={{
            marginTop: 50,
            padding: "24px 28px",
            borderLeft: "3px solid var(--red)",
            background: "rgba(230,0,40,0.04)",
            borderRadius: "0 12px 12px 0",
            maxWidth: 720,
          }}
        >
          <p style={{ fontSize: 17, fontWeight: 500, color: "var(--t1)", lineHeight: 1.5 }}>
            &quot;Every missed click is a missed membership conversation.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
