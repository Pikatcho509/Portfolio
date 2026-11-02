import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { whatsappLink } from "../data/site";
import WhatsAppIcon from "./WhatsAppIcon";

/**
 * Bouton WhatsApp la ki rete an plas pandan moun nan ap desann nan paj la.
 * Li parèt sèlman apre premye ekran an pou l pa bare akèy la.
 */
export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ekri Karl sou WhatsApp"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-5 sm:right-6 z-40 inline-flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-slate-900 font-semibold shadow-lg shadow-slate-950/50 transition-colors"
    >
      <WhatsAppIcon className="w-5 h-5" />
      <span className="hidden sm:inline text-sm">Ekri m</span>
    </motion.a>
  );
}
