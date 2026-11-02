import { useCallback, useEffect } from "react";
import { motion } from "framer-motion";

import { IconChevronLeft, IconChevronRight, IconClose } from "./Icons";

/**
 * Gwo vizyonèz imaj la. Li fèmen ak Escape epi li navige ak flèch klavye a,
 * paske yon galri ki mande sourit sèlman pa itilizab pou tout moun.
 */
export default function Lightbox({ images, index, onClose, onIndex }) {
  const total = images.length;

  const next = useCallback(
    () => onIndex((index + 1) % total),
    [index, total, onIndex],
  );

  const prev = useCallback(
    () => onIndex((index - 1 + total) % total),
    [index, total, onIndex],
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKey);

    // Anpeche paj ki dèyè a defile pandan galri a louvri.
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose, next, prev]);

  const current = images[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[200] bg-slate-950/92 backdrop-blur-sm flex flex-col items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Imaj pwoje a"
    >
      <button
        onClick={onClose}
        aria-label="Fèmen"
        className="absolute top-5 right-5 w-11 h-11 grid place-items-center rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors"
      >
        <IconClose className="w-5 h-5" />
      </button>

      <motion.img
        key={current.src}
        src={current.src}
        alt={current.caption || ""}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[74vh] max-w-full object-contain rounded-xl border border-slate-700"
      />

      <p className="mt-5 max-w-xl text-center text-sm sm:text-base text-slate-300">
        {current.caption}
      </p>

      {total > 1 && (
        <div
          className="mt-5 flex items-center gap-5"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={prev}
            aria-label="Imaj anvan an"
            className="w-10 h-10 grid place-items-center rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors"
          >
            <IconChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-sm text-slate-500 tabular-nums">
            {index + 1} / {total}
          </span>

          <button
            onClick={next}
            aria-label="Imaj apre a"
            className="w-10 h-10 grid place-items-center rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors"
          >
            <IconChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </motion.div>
  );
}
