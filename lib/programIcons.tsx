import {
  Activity,
  Dumbbell,
  Flame,
  HeartPulse,
  Music2,
  PersonStanding,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export const programIconByCode: Record<string, LucideIcon> = {
  "01": PersonStanding,    // Dynamic Movement Training
  "02": Activity,          // Freestyle
  "03": Flame,             // Freestyle Group Training
  "04": Music2,            // Group Exercise Classes
  "05": HeartPulse,        // Cardio Training
  "06": Dumbbell,          // Strength Training
  "07": Target,            // One-to-One Training
  "08": TrendingUp,        // Build Your Plan (CTA)
};

import {
  Award,
  Baby,
  ShieldCheck,
  Stethoscope,
  Swords,
  Weight,
} from "lucide-react";

export const coachIconByNumber: Record<string, LucideIcon> = {
  "01": Flame,         // Fat loss
  "02": Weight,        // Strength & hypertrophy
  "03": Award,         // Functional & TRX
  "04": Stethoscope,   // Mobility & posture
  "05": Swords,        // Boxing & HIIT
  "06": Baby,          // Pre / post-natal
};

import { Eye, MessageSquare, Send, Smartphone, CalendarCheck, Trophy } from "lucide-react";

export const funnelIconByStep: Record<string, LucideIcon> = {
  "01": Eye,
  "02": Smartphone,
  "03": MessageSquare,
  "04": CalendarCheck,
  "05": Trophy,
};

import { ArrowUpRight, Coffee, Footprints, GlassWater, Headphones, Mic2, Users, Zap } from "lucide-react";

export const storyIconByTitle: Record<string, LucideIcon> = {
  "Freestyle Training":    Footprints,
  "Group Exercise Studio": Mic2,
  "Spinning Studio":       Headphones,
  "Strength Zone":         Dumbbell,
  "Cardio Zone":           HeartPulse,
  "Personal Training":     Target,
  "Members Lounge":        Coffee,
  "JOOST Bar":             GlassWater,
};

export const ctaIcons = { ArrowUpRight, Send, Users, Zap };
