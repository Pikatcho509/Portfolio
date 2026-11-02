import { motion } from "framer-motion";

const highlights = [
  {
    title: "Mobil",
    text: "Flutter pou Android ak iOS, ak done sou Firebase. Yon app mwen pibliye deja sou Google Play.",
  },
  {
    title: "Web ak SaaS",
    text: "React, Next.js ak Tailwind. Platfòm milti-kliyan ak dwa aksè pa wòl.",
  },
  {
    title: "Peman lokal",
    text: "MonCash ak NatCash entegre dirèk nan sit la, ak validasyon peman kach nan biwo a.",
  },
  {
    title: "Sekirite",
    text: "Otantifikasyon, kontwòl aksè, feblès OWASP ak jounal aksyon. Yon app ki pa an sekirite pa fini.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
            Sou mwen
          </p>

          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-slate-50 leading-tight">
            Mwen transfòme lide an pwodwi moun ap sèvi ak yo vre
          </h2>

          <div className="mt-7 space-y-5 text-slate-400 leading-relaxed">
            <p>
              Mwen se Karl Ernerson Jean Laurent, moun konnen m sou non{" "}
              <span className="text-slate-200">Pikatcho509</span>. Mwen se yon
              devlopè full stack ki baze ann Ayiti.
            </p>

            <p>
              Mwen pa fè sèlman kòd la: mwen desine pwodwi a, mwen bati l, mwen
              mete l an liy, epi mwen rete la pou kenbe l ap mache. Se konsa
              tout pwoje ki nan paj sa a te fèt.
            </p>

            <p className="text-slate-300">
              Sa ki pi enpòtan pou mwen: fè bagay ki itil pou moun pa m yo, nan
              lang pa yo, ak yon pri ki fè sans pou reyalite peyi a.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(index, 3) * 0.07 }}
              className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/60"
            >
              <h3 className="font-display font-bold text-slate-100">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
