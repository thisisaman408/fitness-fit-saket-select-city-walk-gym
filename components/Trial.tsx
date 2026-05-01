"use client";

import { forwardRef, useEffect, useState, useTransition, type FormEvent } from "react";
import { ArrowIcon, WhatsAppIcon } from "./ui";
import { submitTrialLead } from "@/app/actions";

export type TrialFormState = {
  name: string;
  phone: string;
  time: string;
  goal: string;
  club: string;
};

const initial: TrialFormState = {
  name: "",
  phone: "",
  time: "Morning · 7-10 AM",
  goal: "Fat loss",
  club: "Select Citywalk, Saket",
};

export const TrialForm = forwardRef<HTMLElement, { onSubmit: (form: TrialFormState) => void }>(
  function TrialForm({ onSubmit }, ref) {
    const [form, setForm] = useState<TrialFormState>(initial);
    const [error, setError] = useState<string | null>(null);
    const [pending, startTransition] = useTransition();
    const update = <K extends keyof TrialFormState>(k: K, v: TrialFormState[K]) =>
      setForm((f) => ({ ...f, [k]: v }));

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      setError(null);
      if (!form.name || !form.phone) {
        setError("Name and phone are required.");
        return;
      }
      // Server Action: persists the lead, optionally fires webhook, then opens WhatsApp.
      startTransition(async () => {
        const res = await submitTrialLead(form);
        if (!res.ok) {
          setError(res.error);
          return;
        }
        onSubmit(form);
      });
    };

    return (
      <section id="trial" ref={ref} style={{ background: "#06060A" }}>
        <div className="container-x">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 60,
              alignItems: "start",
            }}
          >
            <div className="reveal">
              <span className="eyebrow">Trial Pass</span>
              <h2 className="h-display" style={{ fontSize: "clamp(40px, 5.4vw, 76px)", marginTop: 18 }}>
                Walk in. Train.
                <br />
                <span style={{ color: "var(--red)" }}>Decide.</span>
              </h2>
              <p className="body-lg" style={{ marginTop: 22 }}>
                One day, all access. Bring water and a friend — we&apos;ll bring the floor, the coaches and the
                music.
              </p>
              <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  ["🛡", "No card required, no auto-billing."],
                  ["⏱", "Trial confirmed within 1 hour during opening."],
                  ["💬", "Talk on WhatsApp before you commit."],
                ].map(([k, v], i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 14, color: "var(--t1)" }}
                  >
                    <span
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: "rgba(230,0,40,0.12)",
                        border: "1px solid rgba(230,0,40,0.3)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: 14,
                      }}
                    >
                      {k}
                    </span>
                    {v}
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="glass reveal"
              style={{ padding: "clamp(28px, 4vw, 44px)", borderRadius: 24 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 99,
                    background: "#4ADE80",
                    boxShadow: "0 0 10px #4ADE80",
                  }}
                />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    color: "var(--t2)",
                    textTransform: "uppercase",
                  }}
                >
                  Trial team online · responds in &lt; 1 hr
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div className="field" style={{ gridColumn: "span 2" }}>
                  <label>Your name</label>
                  <input
                    type="text"
                    placeholder="Aman Sharma"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    required
                  />
                </div>
                <div className="field" style={{ gridColumn: "span 2" }}>
                  <label>Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 98XXX XXXXX"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <label>Preferred time</label>
                  <select value={form.time} onChange={(e) => update("time", e.target.value)}>
                    {["Morning · 7-10 AM", "Midday · 11 AM-2 PM", "Evening · 5-8 PM", "Late · 8-10 PM"].map(
                      (o) => (
                        <option key={o}>{o}</option>
                      )
                    )}
                  </select>
                </div>
                <div className="field">
                  <label>Fitness goal</label>
                  <select value={form.goal} onChange={(e) => update("goal", e.target.value)}>
                    {["Fat loss", "Strength", "Muscle gain", "Mobility", "General fitness", "Sport-specific"].map(
                      (o) => (
                        <option key={o}>{o}</option>
                      )
                    )}
                  </select>
                </div>
                <div className="field" style={{ gridColumn: "span 2" }}>
                  <label>Preferred club</label>
                  <select value={form.club} onChange={(e) => update("club", e.target.value)}>
                    <option>Select Citywalk, Saket</option>
                    <option>Other Fitness First India club</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                disabled={pending}
                className="btn btn-primary"
                style={{
                  width: "100%",
                  marginTop: 24,
                  padding: "18px 26px",
                  fontSize: 15,
                  opacity: pending ? 0.7 : 1,
                  cursor: pending ? "wait" : "pointer",
                }}
              >
                {pending ? "Sending…" : (
                  <>
                    Prepare My Trial Request <ArrowIcon size={14} />
                  </>
                )}
              </button>
              {error && (
                <p
                  style={{
                    fontSize: 12,
                    color: "#FF5570",
                    marginTop: 12,
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  {error}
                </p>
              )}
              <p
                style={{
                  fontSize: 11,
                  color: "var(--t3)",
                  marginTop: 14,
                  textAlign: "center",
                  lineHeight: 1.6,
                }}
              >
                Saved to the sales team&apos;s lead inbox · You&apos;ll be contacted on WhatsApp within 1 hour.
                <br />
                Set <code>LEAD_WEBHOOK</code> env var to also pipe leads to Slack / Sheets / CRM.
              </p>
            </form>
          </div>
        </div>
      </section>
    );
  }
);

export function SuccessModal({
  open,
  form,
  waLink,
  onClose,
}: {
  open: boolean;
  form: TrialFormState | null;
  waLink: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(20px)",
        display: "grid",
        placeItems: "center",
        padding: 20,
        animation: "fadeIn .3s",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 480,
          width: "100%",
          background: "var(--surface)",
          border: "1px solid var(--stroke-hi)",
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: "0 80px 120px -20px rgba(230,0,40,0.45), 0 0 0 1px rgba(230,0,40,0.2)",
        }}
      >
        <div
          style={{
            padding: "40px 36px 28px",
            background: "radial-gradient(400px 200px at 50% 0%, rgba(230,0,40,0.25), transparent 70%)",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 99,
              background: "linear-gradient(135deg, var(--red), var(--red-deep))",
              display: "grid",
              placeItems: "center",
              margin: "0 auto",
              boxShadow: "0 16px 40px -8px rgba(230,0,40,0.6)",
              animation: "pulseRed 2.4s infinite",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12l4.5 4.5L19 7"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="h-display" style={{ fontSize: 30, marginTop: 22 }}>
            You&apos;re on the list, {form?.name?.split(" ")[0] || "champion"}.
          </h3>
          <p style={{ fontSize: 14.5, color: "var(--t2)", marginTop: 14, lineHeight: 1.55 }}>
            We&apos;ve prepared your trial request. One tap on WhatsApp to send it to our Saket team.
          </p>
        </div>
        <div style={{ padding: "8px 36px 36px" }}>
          <div
            style={{
              padding: "18px 20px",
              background: "rgba(0,0,0,0.4)",
              borderRadius: 14,
              border: "1px solid var(--stroke)",
              fontSize: 13,
              color: "var(--t2)",
              lineHeight: 1.6,
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "var(--t3)",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Message preview
            </div>
            &quot;Hi Fitness First Saket, I want to claim a 1-day trial pass.
            {form?.goal && ` My goal is ${form.goal}.`}
            {form?.time && ` Preferred time: ${form.time}.`}
            {form?.name && ` My name is ${form.name}.`}&quot;
          </div>
          <a
            className="btn btn-primary"
            href={waLink}
            target="_blank"
            rel="noopener"
            onClick={onClose}
            style={{ width: "100%", marginTop: 18, padding: "16px 24px" }}
          >
            <WhatsAppIcon size={16} /> Open WhatsApp
          </a>
          <button
            className="btn btn-ghost"
            onClick={onClose}
            style={{ width: "100%", marginTop: 10, padding: "14px 24px" }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
