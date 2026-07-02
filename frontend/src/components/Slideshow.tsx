import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const slides = [
  {
    title: "Lorem ipsum",
    lines: ["dolor sit amet,", "consectetur adipiscing"],
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    title: "Sed do eiusmod",
    lines: ["tempor incididunt", "ut labore et dolore"],
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    title: "Excepteur sint",
    lines: ["occaecat cupidatat", "non proident sunt"],
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    title: "Neque porro",
    lines: ["quisquam est,", "qui dolorem ipsum"],
    body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.",
  },
];

export function Slideshow() {
  const el = useRef<HTMLElement>(null);
  const [idx, setIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: el,
    offset: ["start start", "end start"],
  });

  const raw = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 0.999],
    [0, 1, 2, 3, 3],
  );

  useMotionValueEvent(raw, "change", (v) => {
    setIdx(Math.round(v));
  });

  const s = slides[idx];

  return (
    <section ref={el} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="px-4 sm:px-8 max-w-6xl mx-auto w-full">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0, 1] }}
          >
            <motion.span
              key={`t-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0, 1] }}
              className="text-orbital-blue text-sm sm:text-base font-medium tracking-widest uppercase block mb-4 sm:mb-6"
            >
              {s.title}
            </motion.span>
            <div className="overflow-hidden">
              {s.lines.map((line, i) => (
                <motion.p
                  key={`l-${idx}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.08 + i * 0.06,
                    ease: [0.25, 0.1, 0, 1],
                  }}
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight"
                >
                  {line}
                </motion.p>
              ))}
            </div>
            <motion.p
              key={`b-${idx}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.25,
                ease: [0.25, 0.1, 0, 1],
              }}
              className="text-gray-400 text-sm sm:text-base max-w-md mt-6 sm:mt-8 leading-relaxed"
            >
              {s.body}
            </motion.p>
          </motion.div>

          <div className="fixed right-6 sm:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === idx
                    ? "w-8 bg-orbital-blue"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                onClick={() => {
                  el.current?.scrollIntoView({ behavior: "smooth" });
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
