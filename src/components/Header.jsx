import { useEffect, useState } from "react";

import { whatsappLink } from "../data/site";
import WhatsAppIcon from "./WhatsAppIcon";
import { IconClose, IconMenu } from "./Icons";

const links = [
  { href: "#about", label: "Sou mwen" },
  { href: "#projects", label: "Pwoje" },
  { href: "#services", label: "Sèvis" },
  { href: "#skills", label: "Konpetans" },
  { href: "#contact", label: "Kontak" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-slate-900/92 backdrop-blur-xl border-b border-slate-700/50"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-[72px] flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <span className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-400/30 grid place-items-center font-display font-extrabold text-blue-300">
            K
          </span>

          <span className="leading-tight">
            <span className="block font-display font-bold text-slate-100 text-[15px]">
              Karl E. Jean Laurent
            </span>
            <span className="block text-xs text-slate-400">
              Devlopè full stack
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Ekri m
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fèmen meni an" : "Louvri meni an"}
            aria-expanded={open}
            className="md:hidden w-10 h-10 grid place-items-center rounded-lg border border-slate-700 text-slate-300"
          >
            {open ? (
              <IconClose className="w-5 h-5" />
            ) : (
              <IconMenu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-slate-700/50 bg-slate-900/95 backdrop-blur-xl px-5 py-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-slate-300 hover:text-white border-b border-slate-800 last:border-0"
            >
              {link.label}
            </a>
          ))}

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 mb-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-500 text-white font-semibold"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Ekri m sou WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
