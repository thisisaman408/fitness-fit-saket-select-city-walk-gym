"use server";

import { promises as fs } from "node:fs";
import path from "node:path";

export type LeadInput = {
  name: string;
  phone: string;
  time: string;
  goal: string;
  club: string;
};

export type LeadResult =
  | { ok: true; id: string; receivedAt: string }
  | { ok: false; error: string };

const E164_OK = /^[+0-9 \-()]{8,18}$/;

export async function submitTrialLead(input: LeadInput): Promise<LeadResult> {
  // Validate (server-side; client also validates)
  const name = (input.name ?? "").trim();
  const phone = (input.phone ?? "").trim();
  if (name.length < 2) return { ok: false, error: "Name is too short." };
  if (!E164_OK.test(phone)) return { ok: false, error: "Phone number looks invalid." };

  const lead = {
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    name,
    phone,
    time: input.time,
    goal: input.goal,
    club: input.club,
    source: "site/trial-form",
  };

  // 1. Always log so the operator sees it in dev / prod logs
  console.log("[lead] new trial request", lead);

  // 2. Append to a JSONL file under /data so the sales team can grep / import
  try {
    const dataDir = path.join(process.cwd(), "data");
    await fs.mkdir(dataDir, { recursive: true });
    const file = path.join(dataDir, "leads.jsonl");
    await fs.appendFile(file, JSON.stringify(lead) + "\n", "utf8");
  } catch (err) {
    console.error("[lead] failed to persist lead to disk", err);
    // Don't fail the user — webhook may have succeeded, or they can still WhatsApp us
  }

  // 3. Optional webhook (Slack, n8n, Zapier, Sheets — set via env)
  const webhook = process.env.LEAD_WEBHOOK;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      console.error("[lead] webhook POST failed", err);
    }
  }

  return { ok: true, id: lead.id, receivedAt: lead.receivedAt };
}
