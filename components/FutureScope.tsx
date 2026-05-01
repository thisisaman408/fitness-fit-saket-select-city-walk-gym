"use client";

import { SectionHead } from "./ui";
import { futureScope } from "@/lib/data";

export function FutureScope() {
  return (
    <section>
      <div className="container-x">
        <SectionHead
          eyebrow="Roadmap"
          title={
            <>
              Built as a pilot.
              <br />
              <span style={{ color: "var(--red)" }}>Ready to scale.</span>
            </>
          }
          sub="Start with this Saket landing page. Bolt on systems as the funnel proves itself."
        />
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 12,
          }}
        >
          {futureScope.map((f, i) => (
            <div
              key={i}
              style={{
                padding: "24px 22px",
                background: "var(--surface)",
                border: "1px solid var(--stroke)",
                borderRadius: 14,
                transition: "all .3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(230,0,40,0.4)";
                e.currentTarget.style.background =
                  "linear-gradient(135deg, rgba(230,0,40,0.06), transparent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--stroke)";
                e.currentTarget.style.background = "var(--surface)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
                <span style={{ height: 1, flex: 1, background: "var(--stroke)" }} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--display)",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  marginTop: 16,
                  lineHeight: 1.25,
                }}
              >
                {f.t}
              </h3>
              <p style={{ fontSize: 13, color: "var(--t2)", marginTop: 8, lineHeight: 1.5 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
