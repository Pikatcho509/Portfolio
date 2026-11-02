import { motion } from "framer-motion";

import { whatsappLink } from "../data/site";
import WhatsAppIcon from "./WhatsAppIcon";
import { IconArrowRight } from "./Icons";

const facts = [
  { value: "7+", label: "pwoje livre" },
  { value: "6", label: "platfòm an liy" },
  { value: "1", label: "app sou Google Play" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="px-6 pt-32 pb-20 md:pt-40 md:pb-28 max-w-6xl mx-auto"
    >
      <div className="grid lg:grid-cols-[1.25fr_1fr] gap-14 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Disponib pou nouvo pwoje
          </p>

          <h1 className="mt-7 font-display font-extrabold text-slate-50 text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight">
            Karl Ernerson
            <br />
            Jean Laurent
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-blue-300 font-medium">
            Devlopè full stack · Ayiti
          </p>

          <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
            Mwen bati sit, aplikasyon mobil ak platfòm SaaS ki rezoud pwoblèm
            reyèl — depi premye liy kòd la jouk pwodwi a an liy e moun ap sèvi
            ak li.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-colors"
            >
              Wè pwoje m yo
              <IconArrowRight className="w-4 h-4" />
            </a>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-800/60 text-slate-200 font-semibold transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Ekri m sou WhatsApp
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-display text-2xl font-bold text-slate-100">
                  {fact.value}
                </dt>
                <dd className="mt-1 text-sm text-slate-500">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto lg:mx-0 w-full max-w-[440px]"
        >
          <div className="absolute -inset-7 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent blur-3xl" />

          <div className="relative overflow-hidden rounded-[30px] border border-slate-700/80 bg-slate-900/85 shadow-[0_24px_80px_rgba(15,23,42,0.8)] backdrop-blur-sm">
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-blue-500/20 to-transparent" />

            <div className="relative flex items-center justify-between border-b border-slate-700/80 bg-slate-950/70 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                live
              </div>
            </div>

            <div className="relative p-5">
              <div className="rounded-2xl border border-slate-700/80 bg-slate-950/75 p-4">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-slate-400">
                  <span>dashboard</span>
                  <span className="font-semibold text-cyan-300">karl.dev</span>
                </div>

                <div className="mt-5 rounded-xl border border-slate-700/70 bg-slate-900/80 p-3">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>project: portfolio</span>
                    <span className="text-emerald-400">online</span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                      <span className="h-2.5 w-28 rounded-full bg-slate-700" />
                    </div>
                    <div className="h-2.5 w-20 rounded-full bg-slate-700" />

                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <div className="rounded-xl bg-blue-500/15 p-2">
                        <div className="h-8 rounded-lg bg-gradient-to-br from-blue-500/70 to-cyan-400/50" />
                      </div>
                      <div className="rounded-xl bg-emerald-500/15 p-2">
                        <div className="h-8 rounded-lg bg-gradient-to-br from-emerald-500/70 to-teal-400/50" />
                      </div>
                      <div className="rounded-xl bg-violet-500/15 p-2">
                        <div className="h-8 rounded-lg bg-gradient-to-br from-violet-500/70 to-indigo-400/50" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 p-3">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      stack
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-semibold text-slate-200">
                      <span className="rounded-full bg-blue-500/15 px-2 py-1">React</span>
                      <span className="rounded-full bg-slate-700 px-2 py-1">Vite</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 p-3">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      service
                    </div>
                    <div className="mt-3 text-sm font-medium text-slate-100">Full stack</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl border border-blue-500/25 bg-blue-500/10 px-3 py-2.5">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.24em] text-blue-200/80">
                    code
                  </div>
                  <div className="mt-1 text-sm font-semibold text-blue-50">
                    HTML / CSS / JS
                  </div>
                </div>
                <div className="rounded-full border border-blue-300/30 bg-blue-400/15 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-blue-200">
                  build
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
