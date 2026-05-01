// Real Fitness First Iconic, Saket data — sourced from fitnessfirst.net.in/clubs/iconic-select-citywalk

export const club = {
  name: "Fitness First Iconic, Saket",
  shortName: "Fitness First",
  badge: "Iconic · Saket",
  location: "The New Delhi Dome, 5th & 6th Floor, Select Citywalk Mall, Saket District Centre, New Delhi 110017",
  sqft: "20,000",
  phone1: "011-49497000",
  phone2: "8800619111",
  phone3: "+91-92116 08895",
  whatsapp: "918800619111",
  email: "Hello@curefit.com",
  hoursWeek: "Mon – Sat · 6:30 AM – 10:00 PM",
  hoursSun: "Sun · 7:00 AM – 7:00 PM",
  social: {
    instagram: "https://www.instagram.com/fitnessfirstindia/",
    facebook: "https://www.facebook.com/FitnessFirstIndia",
    twitter: "https://twitter.com/in_fitnessfirst",
    youtube: "https://www.youtube.com/user/InFitnessFirst",
  },
} as const;

export const heroStats = [
  { v: "20,000", u: "sq ft", l: "Iconic floorplate" },
  { v: "7", u: "zones", l: "Purpose-built" },
  { v: "20+", u: "formats", l: "Group classes" },
];

export const storyCards = [
  { t: "Freestyle Training",     d: "Open turf for ropes, sleds, kettlebells and skill work — coached and free-form.", tag: "Performance" },
  { t: "Group Exercise Studio",  d: "Floor-shaking sound, theatre lighting, Les Mills choreography on demand.",        tag: "Energy" },
  { t: "Spinning Studio",        d: "Dedicated cycle theatre — climb, sprint and recover under cinematic red light.",  tag: "Endurance" },
  { t: "Strength Zone",          d: "Hammer Strength plates, free weights, racks and rigs for serious lifting.",       tag: "Power" },
  { t: "Cardio Zone",            d: "Upgraded Technogym cardio with personal screens and skyline-facing windows.",     tag: "Conditioning" },
  { t: "Personal Training",      d: "1-on-1 coaching with measured programming, body comp tracking and check-ins.",    tag: "Coaching" },
  { t: "Members Lounge",         d: "iMac internet stations, espresso, daily papers — work between sets.",             tag: "Recovery" },
  { t: "JOOST Bar",              d: "Cold-pressed juices, recovery shakes and clean post-workout fuel on tap.",        tag: "Fuel" },
] as const;

export const programs = [
  { code: "01", t: "Dynamic Movement Training", d: "Natural movement patterns through three-dimensional exercises — built to make you move better, not just lift heavier." },
  { code: "02", t: "Freestyle",                  d: "TRX, ropes, kettlebells, sleds — the open turf where coached creativity meets athletic output." },
  { code: "03", t: "Freestyle Group Training",   d: "Small-group coached sessions on the freestyle floor. Pace, push and progress as a unit." },
  { code: "04", t: "Group Exercise Classes",     d: "20+ formats from BodyPump to Sh'Bam — choreographed, scored to live sound systems." },
  { code: "05", t: "Cardio Training",            d: "Programmed conditioning on Technogym hardware. HR-zone work, intervals and steady state." },
  { code: "06", t: "Strength Training",          d: "Hypertrophy, powerlifting and structural strength — under the eye of certified coaches." },
  { code: "07", t: "One-to-One Training",        d: "Private coaching with assessment, periodised plans and weekly accountability." },
];

export const classes = [
  "BodyPump", "BodyCombat", "Yoga", "Body Balance", "Zumba",
  "Step", "Sh'Bam", "TRX", "Les Mills", "Spinning", "Circuit Training",
];

export const coaches = [
  { n: "01", t: "Fat loss & weight management",  d: "Body recomposition programmes, nutrition handoffs, weekly progress tracking." },
  { n: "02", t: "Strength & hypertrophy",        d: "Periodised programming for size and performance. Compound-led, data driven." },
  { n: "03", t: "Functional training & TRX",     d: "Real-world strength: stability, balance, core and unilateral work." },
  { n: "04", t: "Mobility & posture correction", d: "Desk-body fixes, joint mobility, FRC and rehabilitation handoffs." },
  { n: "05", t: "Boxing & HIIT",                 d: "Pad-work, intervals and conditioning for athletic shape and stamina." },
  { n: "06", t: "Pre / post-natal support",      d: "Certified, hormone-aware programming through every trimester and recovery." },
];

export const facilities = [
  "Group Exercise", "Gym Floor",      "Cardio Area",       "Cycle Studio",
  "Free Weights",   "Freestyle",      "Internet Station",  "Shower Area",
  "Steam Room",     "Strength Area",  "Personal Training", "Towel Service",
  "F&B",            "Members Lounge", "Yoga Studio",
];

export const funnel = [
  { step: "01", t: "Instagram & Google Maps",   d: "Where Saket members find you today.",            metric: "Demand" },
  { step: "02", t: "A landing page that loads", d: "Premium, mobile-first, sub-2s on 4G.",            metric: "Capture" },
  { step: "03", t: "WhatsApp / form inquiry",   d: "One tap. Real conversation, not a contact form.", metric: "Engage" },
  { step: "04", t: "Trial appointment",         d: "Calendar slot at the club. Sales team alerted.",  metric: "Book" },
  { step: "05", t: "Membership conversion",     d: "Hot lead, in-person, ready to sign.",             metric: "Convert" },
];

export const futureScope = [
  { t: "Live class timetable",        d: "Pull weekly schedule from CMS or Mindbody." },
  { t: "Club finder with map",        d: "All Fitness First India clubs, geo-routed." },
  { t: "Dynamic membership pricing",  d: "Region- and offer-aware, A/B testable." },
  { t: "Trainer profile CMS",         d: "Bios, specialisations, bookable slots." },
  { t: "Google Reviews integration",  d: "Live 4.5★ social proof, auto-refreshed." },
  { t: "Instagram feed integration",  d: "Latest reels and stories embedded native." },
  { t: "WhatsApp automation",         d: "Auto-replies, lead routing, drip nurture." },
  { t: "CRM / Google Sheets routing", d: "Leads land where your sales team already lives." },
  { t: "Analytics dashboard",         d: "Source, inquiries, trial-show, conversion." },
  { t: "cure.fit checkout",           d: "Frictionless single-page membership purchase." },
];

export function whatsappLink({
  name = "",
  goal = "",
  time = "",
}: { name?: string; goal?: string; time?: string } = {}) {
  const text =
    `Hi Fitness First Saket, I want to claim a 1-day trial pass.` +
    (goal ? ` My goal is ${goal}.` : "") +
    (time ? ` Preferred time: ${time}.` : "") +
    (name ? ` My name is ${name}.` : "");
  return `https://wa.me/${club.whatsapp}?text=${encodeURIComponent(text)}`;
}
