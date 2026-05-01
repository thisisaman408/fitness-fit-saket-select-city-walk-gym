"use client";

import type { CSSProperties, ReactNode } from "react";
import { brand } from "@/lib/images";

// Real Fitness First wordmark — sized as a true logo, no fake "F" tile.
export const LogoMark = ({ height = 36 }: { height?: number }) => (
  /* eslint-disable-next-line @next/next/no-img-element */
  <img
    src={brand.ffLogo}
    alt="Fitness First"
    width={height * 3.1}
    height={height}
    style={{ height, width: "auto", display: "block" }}
  />
);

export const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M19.05 4.91A10 10 0 0 0 4.21 18.32L3 22l3.78-1.18A10 10 0 1 0 19.05 4.91Zm-7.06 15.4a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-2.24.7.71-2.18-.2-.31a8.3 8.3 0 1 1 6.26 3.13Zm4.55-6.22c-.25-.13-1.47-.73-1.7-.81s-.39-.13-.56.13-.65.81-.79.97-.29.2-.54.07a6.79 6.79 0 0 1-2-1.24 7.5 7.5 0 0 1-1.39-1.73c-.14-.25 0-.38.11-.5s.25-.29.38-.43a1.7 1.7 0 0 0 .25-.43.47.47 0 0 0 0-.45c-.07-.13-.56-1.36-.77-1.85s-.41-.42-.56-.43h-.48a.93.93 0 0 0-.67.31 2.81 2.81 0 0 0-.88 2.09 4.88 4.88 0 0 0 1 2.59 11.17 11.17 0 0 0 4.27 3.77c.6.26 1.06.42 1.42.54a3.42 3.42 0 0 0 1.57.1 2.57 2.57 0 0 0 1.69-1.19 2.07 2.07 0 0 0 .15-1.19c-.07-.11-.23-.18-.48-.31Z" />
  </svg>
);

export const ArrowIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PlayIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const PhoneIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export const IconBadge = ({
  children,
  size = 44,
  active = false,
}: {
  children: ReactNode;
  size?: number;
  active?: boolean;
}) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: 12,
      display: "grid",
      placeItems: "center",
      background: active
        ? "linear-gradient(135deg, var(--red), var(--red-deep))"
        : "rgba(230,0,40,0.10)",
      border: active ? "1px solid transparent" : "1px solid rgba(230,0,40,0.25)",
      color: active ? "#fff" : "#FF5570",
      boxShadow: active ? "0 12px 30px -8px rgba(230,0,40,0.55)" : "none",
      flexShrink: 0,
      transition: "all .3s",
    }}
  >
    {children}
  </div>
);

export const SectionHead = ({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
}) => (
  <div
    className="section-head reveal"
    style={{ textAlign: align, marginInline: align === "center" ? "auto" : undefined }}
  >
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2 className="h-display">{title}</h2>
    {sub && <p className="body-lg" style={{ maxWidth: 620 }}>{sub}</p>}
  </div>
);

export const Tag = ({
  children,
  tone = "red",
}: {
  children: ReactNode;
  tone?: "red" | "mute";
}) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 10px",
      borderRadius: 999,
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      background: tone === "red" ? "rgba(230,0,40,0.12)" : "rgba(255,255,255,0.06)",
      color: tone === "red" ? "#FF5570" : "var(--t1)",
      border: `1px solid ${tone === "red" ? "rgba(230,0,40,0.3)" : "var(--stroke)"}`,
    }}
  >
    {children}
  </span>
);

export const ClubPhoto = ({
  src,
  height = 280,
  overlay = true,
  alt = "",
  style,
}: {
  src: string;
  height?: number;
  overlay?: boolean;
  alt?: string;
  style?: CSSProperties;
}) => (
  <div
    style={{
      width: "100%",
      height,
      position: "relative",
      overflow: "hidden",
      borderRadius: 14,
      background: "#0A0A0E",
      ...style,
    }}
  >
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "contrast(1.08) saturate(0.85) brightness(0.85)",
        transition: "transform .8s cubic-bezier(.2,.8,.2,1)",
      }}
    />
    {overlay && (
      <>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(7,7,10,0.15) 0%, rgba(7,7,10,0.55) 70%, rgba(7,7,10,0.92) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(120% 80% at 80% 20%, rgba(230,0,40,0.22), transparent 55%)",
            mixBlendMode: "screen",
          }}
        />
      </>
    )}
  </div>
);

export const FloatStat = ({
  v,
  u,
  l,
  x,
  y,
  delay = 0,
}: {
  v: string;
  u: string;
  l: string;
  x: string;
  y: string;
  delay?: number;
}) => (
  <div
    className="reveal"
    style={{
      position: "absolute",
      left: x,
      top: y,
      transitionDelay: `${delay}s`,
      animation: `float 6s ease-in-out infinite`,
      animationDelay: `${delay + 0.2}s`,
    }}
  >
    <div
      className="glass"
      style={{
        padding: "18px 22px",
        borderRadius: 18,
        minWidth: 168,
        boxShadow:
          "0 30px 60px -20px rgba(230,0,40,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span
          style={{
            fontFamily: "var(--display)",
            fontSize: 34,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#fff",
          }}
        >
          {v}
        </span>
        <span style={{ fontSize: 12, fontWeight: 600, color: "var(--t2)" }}>{u}</span>
      </div>
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--red)",
          marginTop: 4,
        }}
      >
        {l}
      </div>
    </div>
  </div>
);
