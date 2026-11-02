import { motion } from "framer-motion";

import { whatsappLink } from "../data/site";
import {
  IconArrowRight,
  IconBuilding,
  IconCard,
  IconCart,
  IconGlobe,
  IconGraduation,
  IconPhone,
  IconSettings,
  IconShield,
} from "./Icons";

const services = [
  {
    Icon: IconCart,
    title: "Boutik an liy",
    text: "Katalòg, panye, peman, livrezon ak suivi kòmand. Menm jan ak The Ra Boutik, men ak koulè ak pwodwi pa w.",
  },
  {
    Icon: IconPhone,
    title: "Aplikasyon mobil",
    text: "App Android ak iOS ak Flutter, ki mache menm san koneksyon, epi mwen mete l sou Google Play pou ou.",
  },
  {
    Icon: IconBuilding,
    title: "Sistèm jesyon / SaaS",
    text: "Jere vant, stòk, kliyan, anplwaye ak rapò. Chak itilizatè gen dwa pa l, tout aksyon kite yon tras.",
  },
  {
    Icon: IconGlobe,
    title: "Sit vitrin ak pòtfolyo",
    text: "Yon sit rapid, bèl sou telefòn, byen referanse sou Google, ak yon fòm kontak ki voye dirèk sou WhatsApp ou.",
  },
  {
    Icon: IconGraduation,
    title: "Platfòm fòmasyon",
    text: "Lekòl, otoekòl oswa sant fòmasyon: enskripsyon, orè, leson, egzamen ak nòt. Menm jan ak Drive No Jutsu.",
  },
  {
    Icon: IconCard,
    title: "Peman MonCash / NatCash",
    text: "Kliyan w peye dirèk nan sit la, san yo pa soti. Peman kach ak validasyon nan biwo a mache tou.",
  },
  {
    Icon: IconShield,
    title: "Sekirite ak odit",
    text: "Mwen tcheke aplikasyon w lan: otantifikasyon, dwa aksè, feblès OWASP, epi mwen ranje sa ki pa bon.",
  },
  {
    Icon: IconSettings,
    title: "Otomatizasyon ak IA",
    text: "Bot, rapò otomatik, entegrasyon ak IA pou sispann fè menm travay la alamen chak jou.",
  },
];

const steps = [
  {
    n: "01",
    t: "Nou pale",
    d: "Ou di m sa w bezwen sou WhatsApp — gratis, san angajman.",
  },
  {
    n: "02",
    t: "M ba w yon plan",
    d: "Yon pri klè, yon dat, ak sa ki ladan l egzakteman.",
  },
  {
    n: "03",
    t: "M bati l",
    d: "Ou wè travay la ap avanse, ou ka teste chak etap.",
  },
  {
    n: "04",
    t: "M mete l an liy",
    d: "Sit la an liy, ou fòme, epi mwen rete disponib apre.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
          Sèvis
        </p>

        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-slate-50">
          Sa m ka bati pou ou
        </h2>

        <p className="mt-5 text-slate-400 leading-relaxed">
          Pwoje ki anwo yo, se mwen ki fè yo depi nan premye liy kòd la jouk yo
          an liy. Sa w wè la a, m ka fè l pou biznis pa w tou.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index, 3) * 0.06 }}
            className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/60 hover:border-slate-600 transition-colors"
          >
            <span className="inline-grid place-items-center w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-300">
              <service.Icon className="w-5 h-5" />
            </span>

            <h3 className="mt-5 font-display font-bold text-slate-100">
              {service.title}
            </h3>

            <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
              {service.text}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-20">
        <h3 className="font-display text-xl font-bold text-slate-100 text-center">
          Kijan n ap travay
        </h3>

        <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.n}
              className="p-6 rounded-2xl border border-slate-700/60 bg-slate-900/40"
            >
              <span className="font-display text-sm font-bold text-blue-400">
                {step.n}
              </span>

              <h4 className="mt-3 font-display font-bold text-slate-100">
                {step.t}
              </h4>

              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {step.d}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gwo apèl aksyon an: nenpòt lòt bagay moun nan gen nan tèt li. */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-20 p-10 sm:p-12 rounded-3xl border border-slate-700/60 bg-slate-800/40 text-center"
      >
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-50 leading-snug">
          Ou gen yon lòt lide nan tèt ou?
        </h3>

        <p className="mt-5 text-slate-400 leading-relaxed max-w-xl mx-auto">
          Nenpòt pwoje ou vle reyalize —{" "}
          <span className="text-slate-200">m ap ka fè l</span>. Sit, app, sistèm
          jesyon, boutik, platfòm, otomatizasyon: di m sa w gen nan tèt ou, epi
          n ap wè ansanm kijan pou n bati l.
        </p>

        <a
          href={whatsappLink(
            "Bonjou Karl! Mwen gen yon lide pwoje mwen ta renmen reyalize. Èske nou ka pale de li?",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-colors"
        >
          Pale ak mwen sou WhatsApp
          <IconArrowRight className="w-4 h-4" />
        </a>

        <p className="mt-5 text-sm text-slate-500">
          Repons rapid · Premye konvèsasyon an gratis
        </p>
      </motion.div>
    </section>
  );
}
