// Real videos from the official Fitness First India YouTube channel
// Channel: https://www.youtube.com/user/InFitnessFirst

export const youtubeChannel = {
  name: "Fitness First India",
  url: "https://www.youtube.com/user/InFitnessFirst",
  legacyHandle: "InFitnessFirst",
};

export type YouTubeVideo = { id: string; title: string };

export const youtubeVideos: YouTubeVideo[] = [
  { id: "gr_CY6IXdRk", title: "Introducing BOX at Fitness First, Noida" },
  { id: "AP7tEwFqAiY", title: "Mandira Bedi is #Femmetastic at Fitness First" },
  { id: "30GlUl5BANw", title: "Fitness First Mall of India, Noida Walkthrough" },
  { id: "rppL_yYp0bQ", title: "#FitnessFriday with Mandira Bedi" },
  { id: "0pnZPXPCWYE", title: "Neeti Palta is #Femmetastic" },
  { id: "0q-PA_GFiik", title: "Sneak Peek — Fitness First, Palladium Mumbai" },
  { id: "m5yXJFMSDzQ", title: "FIIT Zone @ Fitness First" },
  { id: "kTZSSI0iqaU", title: "First #FitnessFriday of September" },
  { id: "D_DLDsi31SQ", title: "Core Workout — Atomic Push" },
  { id: "eFiLEnqkIoE", title: "TRX Back Row — Fitness First" },
  { id: "dUgfYhjPthk", title: "#FitnessFriday Cycling Challenge" },
  { id: "qyU7zRk6pDw", title: "#FitnessFriday — Military Bootcamp" },
];

export const ytThumb = (id: string, q: "hq" | "max" = "hq") =>
  q === "max"
    ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
    : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const ytWatch = (id: string) => `https://www.youtube.com/watch?v=${id}`;
export const ytEmbed = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;
