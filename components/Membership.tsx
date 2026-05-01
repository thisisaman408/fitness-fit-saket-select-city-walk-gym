"use client";

import { ArrowIcon, Tag } from "./ui";

export function Membership({ onRequest }: { onRequest: () => void }) {
  const plans = [
    { plan: "6 months",  perks: "All zones · 20+ classes · Members lounge",            tag: "Most flexible", hot: false },
    { plan: "12 months", perks: "Everything in 6m + priority booking + guest passes",  tag: "Best value",    hot: true },
  ];
  return (
    <section id="membership" style={{ background: "#08080C" }}>
      <div className="container-x">
        <div
          className="glass reveal"
          style={{
            padding: "clamp(40px, 6vw, 80px)",
            borderRadius: 28,
            position: "relative",
            overflow: "hidden",
            background: `
              radial-gradient(800px 400px at 100% 0%, rgba(230,0,40,0.18), transparent 60%),
              radial-gradient(600px 300px at 0% 100%, rgba(230,0,40,0.10), transparent 60%),
              linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))
            `,
            border: "1px solid var(--stroke-hi)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 50,
              alignItems: "center",
            }}
          >
            <div>
              <span className="eyebrow">Membership</span>
              <h2 className="h-display" style={{ fontSize: "clamp(36px, 4.4vw, 64px)", marginTop: 18 }}>
                Premium membership.
                <br />
                <span style={{ color: "var(--red)" }}>Premium experience.</span>
              </h2>
              <p className="body-lg" style={{ marginTop: 22, maxWidth: 480 }}>
                6-month and 12-month plans available. Offers vary by club. Request the current Saket offer
                and trial availability — our team responds within the hour.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <button className="btn btn-primary" onClick={onRequest}>
                  Request Current Offer <ArrowIcon size={14} />
                </button>
                <button className="btn btn-secondary" onClick={onRequest}>
                  Talk to a coach
                </button>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {plans.map((p, i) => (
                <div
                  key={i}
                  style={{
                    padding: "22px 24px",
                    borderRadius: 16,
                    background: p.hot
                      ? "linear-gradient(135deg, rgba(230,0,40,0.16), rgba(230,0,40,0.04))"
                      : "rgba(0,0,0,0.3)",
                    border: `1px solid ${p.hot ? "rgba(230,0,40,0.5)" : "var(--stroke)"}`,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span
                      style={{
                        fontFamily: "var(--display)",
                        fontSize: 22,
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {p.plan}
                    </span>
                    <Tag tone={p.hot ? "red" : "mute"}>{p.tag}</Tag>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--t2)", marginTop: 8 }}>{p.perks}</p>
                  <div
                    style={{
                      marginTop: 14,
                      fontSize: 12,
                      color: "var(--t3)",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 99,
                        background: "var(--red)",
                        animation: "pulseRed 2s infinite",
                      }}
                    />
                    Current Saket offer · Request to view
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
