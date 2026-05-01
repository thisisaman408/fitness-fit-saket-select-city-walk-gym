"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WhatsAppIcon } from "./ui";

export function FloatingWhatsApp({ waLink }: { waLink: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={waLink}
          target="_blank"
          rel="noopener"
          aria-label="Talk on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          style={{
            position: "fixed",
            right: 20,
            bottom: 84,
            zIndex: 90,
            width: 60,
            height: 60,
            borderRadius: 99,
            background: "linear-gradient(135deg, #25D366, #128C7E)",
            color: "#fff",
            display: "grid",
            placeItems: "center",
            boxShadow:
              "0 18px 40px -8px rgba(37,211,102,0.55), 0 0 0 6px rgba(37,211,102,0.18)",
            animation: "pulseRed 2.6s infinite",
          }}
        >
          <WhatsAppIcon size={26} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
