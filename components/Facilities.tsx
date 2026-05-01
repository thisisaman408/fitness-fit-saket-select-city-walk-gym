"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHead } from "./ui";
import { facilities } from "@/lib/data";
import { facilityIcons } from "@/lib/images";

export function Facilities() {
  const [lit, setLit] = useState<number[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            facilities.forEach((_, i) => {
              setTimeout(() => setLit((prev) => [...prev, i]), 120 + i * 90);
            });
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="facilities">
      <div className="container-x">
        <SectionHead
          eyebrow="Inside the Club"
          title={
            <>
              Everything a premium club{" "}
              <span style={{ color: "var(--red)" }}>should have</span>.
            </>
          }
          sub="No upsells. No paywalls behind doors. Your membership unlocks every floor of the building."
        />
        <div
          ref={ref}
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 12,
          }}
        >
          {facilities.map((f, i) => {
            const on = lit.includes(i);
            const icon = facilityIcons[f];
            return (
              <div
                key={i}
                style={{
                  padding: "18px 20px",
                  borderRadius: 14,
                  background: on
                    ? "linear-gradient(135deg, rgba(230,0,40,0.10), rgba(230,0,40,0.02))"
                    : "var(--surface)",
                  border: `1px solid ${on ? "rgba(230,0,40,0.4)" : "var(--stroke)"}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  transition: "all .6s cubic-bezier(.2,.8,.2,1)",
                  boxShadow: on
                    ? "0 0 24px -6px rgba(230,0,40,0.35), inset 0 1px 0 rgba(255,255,255,0.04)"
                    : "none",
                }}
              >
                {icon ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={icon}
                    alt=""
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    style={{
                      width: 36,
                      height: 36,
                      objectFit: "contain",
                      filter: on
                        ? "invert(28%) sepia(98%) saturate(7400%) hue-rotate(343deg) brightness(95%) contrast(110%)"
                        : "invert(70%) brightness(0.7)",
                      transition: "filter .5s",
                    }}
                  />
                ) : (
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 99,
                      background: on ? "var(--red)" : "var(--t4)",
                      boxShadow: on ? "0 0 14px var(--red)" : "none",
                    }}
                  />
                )}
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: on ? "var(--t0)" : "var(--t2)",
                    transition: "color .4s",
                  }}
                >
                  {f}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
