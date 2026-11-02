import { motion } from "framer-motion";

import {
  EMAIL,
  GITHUB,
  PHONE_PRIMARY,
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY_DISPLAY,
  mailtoLink,
  whatsappLink,
} from "../data/site";
import WhatsAppIcon from "./WhatsAppIcon";
import { IconCall, IconGithub, IconMail } from "./Icons";

export default function Contact() {
  const cards = [
    {
      Icon: IconMail,
      title: "Email",
      lines: [EMAIL],
      href: mailtoLink(),
      external: false,
    },
    {
      Icon: IconCall,
      title: "Rele m",
      lines: [PHONE_PRIMARY_DISPLAY, PHONE_SECONDARY_DISPLAY],
      href: `tel:${PHONE_PRIMARY}`,
      external: false,
    },
    {
      Icon: IconGithub,
      title: "GitHub",
      lines: ["Pikatcho509"],
      href: GITHUB,
      external: true,
    },
  ];

  return (
    <section id="contact" className="px-6 py-24 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
          Kontak
        </p>

        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-slate-50">
          Ann pale de pwoje w la
        </h2>

        <p className="mt-5 text-slate-400 leading-relaxed">
          Klike sou WhatsApp la, mesaj la deja ekri — ou jis bezwen voye l.
          M ap reponn ou pi vit posib.
        </p>

        {/* WhatsApp se chemen prensipal la, se poutèt sa li pi gwo pase lòt yo. */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5a] text-slate-900 font-semibold text-lg transition-colors"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Ekri m sou WhatsApp
        </a>

        <p className="mt-4 text-slate-500">{PHONE_PRIMARY_DISPLAY}</p>
      </motion.div>

      <div className="max-w-4xl mx-auto mt-14 grid sm:grid-cols-3 gap-4">
        {cards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            {...(card.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/60 hover:border-slate-600 transition-colors"
          >
            <span className="inline-grid place-items-center w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-300">
              <card.Icon className="w-5 h-5" />
            </span>

            <p className="mt-4 font-display font-bold text-slate-100">
              {card.title}
            </p>

            {card.lines.map((line) => (
              <p key={line} className="mt-1 text-sm text-slate-400 break-all">
                {line}
              </p>
            ))}
          </a>
        ))}
      </div>
    </section>
  );
}
