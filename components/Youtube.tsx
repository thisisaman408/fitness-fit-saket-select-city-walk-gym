"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowIcon, PlayIcon, SectionHead } from "./ui";
import { youtubeChannel, youtubeVideos, ytEmbed, ytThumb, ytWatch } from "@/lib/youtube";

export function Youtube() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".yt-card", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const featured = youtubeVideos[0];
  const grid = youtubeVideos.slice(1, 7);

  return (
    <section
      id="youtube"
      ref={sectionRef}
      style={{
        background: "linear-gradient(180deg, #06060A 0%, #0A0A0F 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(700px 400px at 80% 0%, rgba(230,0,40,0.12), transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div className="container-x" style={{ position: "relative" }}>
        <SectionHead
          eyebrow="On Camera"
          title={
            <>
              See the floor.
              <br />
              <span style={{ color: "var(--red)" }}>Live from the channel.</span>
            </>
          }
          sub={
            <>
              Real workouts, walkthroughs and member stories from the official{" "}
              <a
                href={youtubeChannel.url}
                target="_blank"
                rel="noopener"
                style={{ color: "var(--t1)", borderBottom: "1px solid var(--red)" }}
              >
                {youtubeChannel.name}
              </a>{" "}
              YouTube channel.
            </>
          }
        />

        {/* Featured video — large embed on click, thumbnail by default */}
        <div
          className="reveal stack-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)",
            gap: 24,
            marginBottom: 28,
          }}
        >
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "relative",
              borderRadius: 22,
              overflow: "hidden",
              aspectRatio: "16 / 9",
              border: "1px solid var(--stroke-hi)",
              background: "#000",
              boxShadow:
                "0 40px 80px -30px rgba(230,0,40,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
              cursor: "pointer",
            }}
            onClick={() => setActive(featured.id)}
          >
            {active === featured.id ? (
              <iframe
                src={ytEmbed(featured.id) + "&autoplay=1"}
                title={featured.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: 0 }}
              />
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ytThumb(featured.id, "max")}
                  alt={featured.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "contrast(1.05) saturate(0.9) brightness(0.78)",
                  }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = ytThumb(featured.id, "hq");
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 30%, rgba(7,7,10,0.85) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 88,
                    height: 88,
                    borderRadius: 99,
                    background: "var(--red)",
                    display: "grid",
                    placeItems: "center",
                    boxShadow:
                      "0 30px 60px -10px rgba(230,0,40,0.7), 0 0 0 8px rgba(230,0,40,0.18)",
                    color: "#fff",
                    paddingLeft: 6,
                  }}
                >
                  <PlayIcon size={32} />
                </div>
                <div style={{ position: "absolute", bottom: 22, left: 26, right: 26 }}>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--red)",
                    }}
                  >
                    Featured · Tap to play
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: "clamp(20px, 2.4vw, 28px)",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      color: "#fff",
                      marginTop: 10,
                      lineHeight: 1.15,
                      maxWidth: 600,
                    }}
                  >
                    {featured.title}
                  </h3>
                </div>
              </>
            )}
          </motion.div>

          <div
            className="glass"
            style={{
              padding: "32px 30px",
              borderRadius: 22,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 280,
            }}
          >
            <div>
              <span className="eyebrow">YouTube</span>
              <div
                style={{
                  fontFamily: "var(--display)",
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  marginTop: 18,
                }}
              >
                {youtubeChannel.name}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--t2)",
                  lineHeight: 1.6,
                  marginTop: 14,
                }}
              >
                Walkthroughs, group classes, trainer tips and member stories — straight from the
                official channel. Subscribe for new uploads from across all India clubs.
              </p>
            </div>
            <a
              href={youtubeChannel.url}
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
              style={{ marginTop: 24, alignSelf: "flex-start" }}
            >
              Open Channel <ArrowIcon size={14} />
            </a>
          </div>
        </div>

        {/* Grid of 6 supporting videos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 14,
          }}
        >
          {grid.map((v) => (
            <motion.button
              key={v.id}
              type="button"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="yt-card glass glass-hover"
              onClick={() => setActive(v.id)}
              style={{
                padding: 0,
                overflow: "hidden",
                cursor: "pointer",
                textAlign: "left",
                display: "block",
                width: "100%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16 / 9",
                  background: "#000",
                  overflow: "hidden",
                }}
              >
                {active === v.id ? (
                  <iframe
                    src={ytEmbed(v.id) + "&autoplay=1"}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: "100%", height: "100%", border: 0 }}
                  />
                ) : (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ytThumb(v.id)}
                      alt={v.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "contrast(1.05) brightness(0.85)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.65))",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 52,
                        height: 52,
                        borderRadius: 99,
                        background: "rgba(230,0,40,0.92)",
                        display: "grid",
                        placeItems: "center",
                        color: "#fff",
                        paddingLeft: 4,
                        boxShadow: "0 12px 30px -6px rgba(230,0,40,0.6)",
                      }}
                    >
                      <PlayIcon size={20} />
                    </div>
                  </>
                )}
              </div>
              <div style={{ padding: "16px 18px 20px" }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--t1)",
                    lineHeight: 1.35,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {v.title}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--t3)",
                    marginTop: 8,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ color: "var(--red)" }}>▶</span>
                  YouTube ·{" "}
                  <a
                    href={ytWatch(v.id)}
                    target="_blank"
                    rel="noopener"
                    onClick={(e) => e.stopPropagation()}
                    style={{ color: "var(--t2)" }}
                  >
                    Open
                  </a>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
