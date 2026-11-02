import { useState } from "react";
import { motion } from "framer-motion";

import { projects } from "../data/projects";
import { whatsappLink } from "../data/site";
import Lightbox from "./Lightbox";
import { IconCheck, IconExternal, IconImages } from "./Icons";

export default function Projects() {
  // Ki galri ki louvri, ak sou ki imaj — `null` vle di pa gen anyen ki louvri.
  const [viewer, setViewer] = useState(null);

  return (
    <section id="projects" className="px-6 py-24 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
          Pwoje
        </p>

        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-slate-50">
          Pwodwi ki an liy, ou ka teste yo kounye a
        </h2>

        <p className="mt-5 text-slate-400 leading-relaxed">
          Chak grenn nan yo soti nan yon pwoblèm reyèl moun ann Ayiti ap viv.
          Klike sou nenpòt nan yo pou w wè l ap mache.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 items-start gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index, 3) * 0.07 }}
            className="flex flex-col rounded-2xl bg-slate-800/40 border border-slate-700/60 overflow-hidden hover:border-slate-600 transition-colors"
          >
            <button
              type="button"
              onClick={() => setViewer({ id: project.id, index: 0 })}
              aria-label={`Wè imaj ${project.title}`}
              className="group relative block w-full h-60 overflow-hidden bg-slate-900"
            >
              <img
                src={project.image}
                alt={`Ekran ${project.title}`}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />

              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/85 border border-slate-600/70 text-slate-200 text-xs font-medium backdrop-blur-sm">
                <IconImages className="w-3.5 h-3.5" />
                {project.gallery.length} imaj
              </span>
            </button>

            <div className="p-7 flex flex-col flex-1 border-t border-slate-700/60">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  {project.kind}
                </span>

                <span className="text-xs text-slate-500">{project.year}</span>

                {project.badge && (
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-medium">
                    {project.badge}
                  </span>
                )}
              </div>

              <h3 className="mt-3 font-display text-2xl font-bold text-slate-50">
                {project.title}
              </h3>

              <p className="mt-1.5 text-slate-300">{project.tagline}</p>

              <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                {project.description}
              </p>

              <p className="mt-4 pl-4 border-l-2 border-blue-500/40 text-sm text-slate-500 leading-relaxed">
                {project.problem}
              </p>

              <ul className="mt-6 space-y-2.5">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-slate-400 leading-relaxed"
                  >
                    <IconCheck className="w-4 h-4 mt-0.5 shrink-0 text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>

              {project.note && (
                <p className="mt-5 p-3 rounded-lg bg-slate-900/50 border border-slate-700/60 text-xs text-slate-500 leading-relaxed">
                  {project.note}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-slate-700/40 text-slate-300 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* `mt-auto` kenbe bouton yo aliyen an ba menm lè tèks yo pa
                  gen menm longè. */}
              <div className="mt-auto pt-7 flex flex-wrap gap-2.5">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      link.primary
                        ? "bg-blue-500 hover:bg-blue-400 text-white"
                        : "border border-slate-600 hover:border-slate-400 text-slate-200"
                    }`}
                  >
                    {link.label}
                    <IconExternal className="w-3.5 h-3.5" />
                  </a>
                ))}

                <a
                  href={whatsappLink(
                    `Bonjou Karl! Mwen wè pwoje ${project.title} nan pòtfolyo w la. Mwen ta renmen yon bagay konsa pou biznis mwen.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-700/40 transition-colors"
                >
                  Mwen vle youn konsa
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {viewer && (
        <Lightbox
          images={projects.find((p) => p.id === viewer.id).gallery}
          index={viewer.index}
          onIndex={(i) => setViewer((v) => ({ ...v, index: i }))}
          onClose={() => setViewer(null)}
        />
      )}
    </section>
  );
}
