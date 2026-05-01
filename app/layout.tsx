import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fitness First Iconic, Saket — India's First Iconic Club",
  description:
    "India's first and only Fitness First Iconic club, built across 20,000 sq ft inside Select Citywalk, Saket. Claim your 1-day free trial pass.",
  openGraph: {
    title: "Fitness First Iconic, Saket",
    description:
      "India's first Fitness First Iconic club. 20,000 sq ft. 7 zones. 20+ classes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning silences attributes injected by browser extensions
          (e.g. ColorZilla's cz-shortcut-listen) that React can't reconcile. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
