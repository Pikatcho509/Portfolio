import {
  EMAIL,
  GITHUB,
  PHONE_PRIMARY,
  PHONE_PRIMARY_DISPLAY,
  mailtoLink,
  whatsappLink,
} from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 px-6 pt-14 pb-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        <div className="max-w-xs">
          <p className="font-display font-bold text-slate-100">
            Karl Ernerson Jean Laurent
          </p>

          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Devlopè full stack an Ayiti. Sit, aplikasyon mobil ak platfòm SaaS.
          </p>
        </div>

        <nav className="flex flex-col gap-3 text-sm">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            WhatsApp
          </a>

          <a
            href={mailtoLink()}
            className="text-slate-400 hover:text-white transition-colors"
          >
            {EMAIL}
          </a>

          <a
            href={`tel:${PHONE_PRIMARY}`}
            className="text-slate-400 hover:text-white transition-colors"
          >
            {PHONE_PRIMARY_DISPLAY}
          </a>

          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>

      <p className="max-w-6xl mx-auto mt-12 pt-6 border-t border-slate-800 text-sm text-slate-500">
        © {new Date().getFullYear()} Karl Ernerson Jean Laurent. Tout dwa
        rezève.
      </p>
    </footer>
  );
}
