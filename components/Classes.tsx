"use client";

import { SectionHead } from "./ui";
import { classes } from "@/lib/data";

export function Classes() {
  const items = [...classes, ...classes];
  return (
    <section style={{ padding: "140px 0", overflow: "hidden" }}>
      <div className="container-x" style={{ padding: "0 40px" }}>
        <SectionHead
          eyebrow="Class Energy"
          title="The room moves with you."
          sub="20+ formats from the Les Mills catalogue, plus signature programming. Always in rotation, always live-scored."
        />
      </div>

      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "marquee 38s linear infinite",
          willChange: "transform",
        }}
      >
        {items.map((c, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(56px, 9vw, 130px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.18)",
              paddingInline: 32,
              display: "inline-block",
            }}
          >
            {c}{" "}
            <span style={{ color: "var(--red)", WebkitTextStroke: "0" }}>✦</span>
          </span>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "marquee 28s linear infinite reverse",
          willChange: "transform",
          marginTop: 4,
        }}
      >
        {items.map((c, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(56px, 9vw, 130px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: i % 3 === 0 ? "var(--red)" : "var(--t1)",
              paddingInline: 32,
              display: "inline-block",
              opacity: i % 3 === 0 ? 1 : 0.85,
            }}
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}
