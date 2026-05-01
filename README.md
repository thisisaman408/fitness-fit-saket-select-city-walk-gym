# fitness-fit-saket-select-city-walk-gym

Premium landing-page concept for **Fitness First Iconic, Saket** — built as a sales demo. Not affiliated with Fitness First.

Live local: `http://localhost:3000`

## Stack

- **Next.js 16** (App Router, Turbopack, React 19.2)
- **Tailwind CSS v4**
- **GSAP** + ScrollTrigger (parallax, horizontal pin, reveal stagger)
- **Motion** (Framer Motion successor) for micro-interactions
- **Lenis** smooth scroll, wired into the GSAP ticker
- **lucide-react** icons
- **TypeScript**, **Bun** package manager

## Highlights

- Cinematic red-lit hero with animated canvas (perspective grid, light beams, ember particles)
- Horizontal pin-scroll Story section (8 zones)
- Parallax photo gallery from real club imagery
- Programs grid with 7 training systems + a "Build Your Plan" CTA tile
- Class-name marquee (Les Mills + signature)
- 6 real coach cards with cert badges + duotone red treatment
- 14 facility tiles with sequential reveal
- YouTube section with 12 real videos from the official Fitness First India channel
- Membership card, conversion-funnel breakdown, future-scope roadmap
- Visit section with embedded Google Map pinned to the gym + 4 contact cards
- Trial-pass form wired to a Server Action (`app/actions.ts`):
  - validates name + phone server-side
  - appends each lead to `data/leads.jsonl`
  - optional `LEAD_WEBHOOK` env var to mirror to Slack / Sheets / CRM
  - opens WhatsApp deep-link on success
- Sticky mobile CTA bar + floating WhatsApp FAB always within thumb reach
- Real Fitness First wordmark + favicon
- Fully responsive: 1440 / 900 / 600 breakpoints

## Run

```bash
bun install
bun dev
```

## Build

```bash
bun run build
bun start
```

## Configure lead routing (optional)

Create `.env.local`:

```bash
LEAD_WEBHOOK=https://hooks.slack.com/services/T0000/B0000/XXXXXXXX
# or any URL that accepts POST application/json
```

Leads always go to console + `data/leads.jsonl`. The webhook fires in addition.

## Project structure

```
app/
  actions.ts        # Server Action: lead capture
  layout.tsx
  page.tsx          # renders <ClientApp />
  globals.css       # full design system + responsive
  icon.png · favicon.ico · apple-icon.png
components/
  ClientApp.tsx     # orchestrates sections + modal + refs
  Hero · Story · Gallery · Programs · Classes · Coaches ·
  Facilities · Youtube · Membership · Funnel · Visit · Trial ·
  FutureScope · Footer · Nav · StickyCTA · FloatingCTA
  HeroCanvas.tsx    # vanilla canvas (red grid + beams + particles)
  SmoothScroll.tsx  # Lenis + GSAP wiring
  ui.tsx            # LogoMark, IconBadge, SectionHead, Tag, …
lib/
  data.ts           # all club copy + WhatsApp helper
  images.ts         # local asset paths (HD, downloaded from FF CDN)
  youtube.ts        # 12 real video IDs from Fitness First India channel
  programIcons.tsx  # icon → section mapping
public/
  brand/      # real Fitness First wordmark
  saket/      # full-resolution gym interior shots
  trainers/   # real trainer headshots
  icons/      # facility icons
  fonts/      # Manrope (300–800)
```

## Credits

- Original design concept: handoff from [Claude Design](https://claude.ai/design)
- Photography & wordmark: [fitnessfirst.net.in](https://www.fitnessfirst.net.in/clubs/iconic-select-citywalk)
- Build: Aman ([@thisisaman408](https://github.com/thisisaman408))
