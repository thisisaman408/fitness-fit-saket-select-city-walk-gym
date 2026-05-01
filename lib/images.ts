// All assets served locally from /public — full-resolution originals downloaded
// from fitnessfirst.net.in (CDN was returning thumbnails before).

export const brand = {
  ffLogo: "/brand/ff-logo.png",
};

// HD interior shots — diverse mix from the FF Saket club
export const heroImages = [
  "/saket/scd-48.jpg",
  "/saket/scd-50.jpg",
  "/saket/scd-54.jpg",
  "/saket/scd-71.jpg",
  "/saket/scd-55.jpg",
  "/saket/scd-75.jpg",
  "/saket/i-train-to-go-further.png",
  "/saket/ride-to-fitness.png",
];

export const bodyAttack = "/saket/body-attack.png";
// Use the largest, cleanest interior shot (no UI chrome) for hero
export const heroBackdrop = "/saket/scd-50.jpg";

export const storyImages: Record<string, string> = {
  "Freestyle Training":    "/saket/scd-48.jpg",
  "Group Exercise Studio": "/saket/body-attack.png",
  "Spinning Studio":       "/saket/scd-50.jpg",
  "Strength Zone":         "/saket/scd-54.jpg",
  "Cardio Zone":           "/saket/scd-71.jpg",
  "Personal Training":     "/saket/scd-55.jpg",
  "Members Lounge":        "/saket/scd-75.jpg",
  "JOOST Bar":             "/saket/i-train-to-go-further.png",
};

export const trainers = [
  { name: "Arjun Mudgal",  spec: "Kettlebell · Bosu · Strength · Sports-specific",      cert: "ACE-CPT", years: 8,  src: "/trainers/arjun-mudgal-1.jpg" },
  { name: "Amit Singh",    spec: "Functional · Cardiovascular · Strength · Endurance",  cert: "REPs L3",  years: 10, src: "/trainers/amit-singh-1.jpg" },
  { name: "Chandan Deole", spec: "BodyCombat · TRX · Kickboxing · Fat loss",            cert: "Les Mills", years: 7,  src: "/trainers/chandan.jpg" },
  { name: "Suramya Jyoti", spec: "Pre/post-natal · Mobility · Special populations",     cert: "FRC",      years: 9,  src: "/trainers/suramya-1.jpg" },
  { name: "Manoj Godiyal", spec: "Yoga · Aerobics · Plyometric · Sports-specific",      cert: "RYT-500",  years: 11, src: "/trainers/manoj_godiyal-scd.jpg" },
  { name: "Ashish Singh",  spec: "Rehab · Posture correction · Functional · Pre-natal", cert: "FMS",      years: 8,  src: "/trainers/ashish_singh-scd.jpg" },
];

export const facilityIcons: Record<string, string> = {
  "Group Exercise":     "/icons/group-exercise-160x160.png",
  "Gym Floor":          "/icons/gym-floor-160x160.png",
  "Cardio Area":        "/icons/cardio-theatre-160x160.png",
  "Cycle Studio":       "/icons/spin-160x160.png",
  "Free Weights":       "/icons/free-weights-160x160.png",
  "Freestyle":          "/icons/freestyle-160x160.png",
  "Internet Station":   "/icons/wifi-160x160.png",
  "Shower Area":        "/icons/monsoon-shower-160x160.png",
  "Steam Room":         "/icons/steam-sauna-160x160.png",
  "Strength Area":      "/icons/loaded-weights-160x160.png",
  "Personal Training":  "/icons/PT-160x160.png",
  "Towel Service":      "/icons/facilities-160x160.png",
  "F&B":                "/icons/facilities-160x160.png",
  "Members Lounge":     "/icons/lounge-area-160x160.png",
  "Yoga Studio":        "/icons/yoga-160x160.png",
};
