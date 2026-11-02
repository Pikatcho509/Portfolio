import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & done",
    skills: ["Node.js", "Firebase", "REST API", "Otantifikasyon"],
  },
  {
    title: "Mobil",
    skills: ["Flutter", "Android", "Google Play", "PWA", "Offline-first"],
  },
  {
    title: "Cyber Security",
    skills: [
      "Ethical hacking",
      "Sekirite web",
      "OWASP",
      "Linux",
      "Rezo",
      "Pentest",
      "SOC basics",
    ],
  },
  {
    title: "AI & automation",
    skills: [
      "Intelligence artificielle",
      "Prompt engineering",
      "Automatizasyon",
      "AI tools",
      "Workflow optimization",
    ],
  },
  {
    title: "Deplwaman",
    skills: ["Vercel", "Git", "GitHub", "Vite", "CI/CD"],
  },
  {
    title: "Zouti",
    skills: ["VS Code", "Figma", "Photoshop", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-14"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
          Konpetans
        </p>

        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-slate-50">
          Teknoloji mwen travay ak yo
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto divide-y divide-slate-700/60 border-y border-slate-700/60">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index, 4) * 0.05 }}
            className="py-6 grid sm:grid-cols-[180px_1fr] gap-4 sm:gap-8"
          >
            <h3 className="font-display font-bold text-slate-100">
              {cat.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
