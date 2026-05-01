"use client";

import { WhatsAppIcon } from "./ui";

export function StickyCTA({ onTrial, waLink }: { onTrial: () => void; waLink: string }) {
  return (
    <div className="sticky-cta">
      <button className="btn btn-primary" onClick={onTrial}>
        Claim 1-Day Trial
      </button>
      <a className="btn btn-secondary" href={waLink} target="_blank" rel="noopener">
        <WhatsAppIcon size={14} /> WhatsApp
      </a>
    </div>
  );
}
