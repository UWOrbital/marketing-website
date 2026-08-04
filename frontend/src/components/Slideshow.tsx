import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { slides } from "../content";

const ease = [0.17, 0.67, 0.29, 1] as const;

const slideVariants = {
  enter: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: "blur(4px)",
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.95,
    filter: "blur(4px)",
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 30, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.1 + i * 0.08,
      ease,
    },
  }),
};

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
    <section id="about" ref={el} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="px-4 sm:px-8 max-w-6xl mx-auto w-full">
          <div className="inline-block p-6 sm:p-8 md:p-10 rounded-2xl bg-[#050510]/60 backdrop-blur-2xl border border-white/[0.08] max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.17, 0.67, 0.29, 1] }}
              >
                <motion.span
                  key={`t-${idx}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1,
                    ease: [0.17, 0.67, 0.29, 1],
                  }}
                  className="text-orbital-blue text-sm sm:text-base font-medium tracking-widest uppercase block mb-4 sm:mb-6"
                >
                  {s.title}
                </motion.span>

                <div className="overflow-hidden">
                  {s.lines.map((line, i) => (
                    <motion.p
                      key={`l-${idx}-${i}`}
                      custom={i}
                      variants={lineVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight"
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>

                <motion.p
                  key={`b-${idx}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.3,
                    ease: [0.17, 0.67, 0.29, 1],
                  }}
                  className="text-gray-400 text-sm sm:text-base max-w-md mt-6 sm:mt-8 leading-relaxed"
                >
                  {s.body}
                </motion.p>

                {"cta" in s && s.cta && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.45, ease }}
                  >
                    <Link
                      to={s.cta.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-orbital-blue text-white font-medium hover:bg-orbital-blue-dark transition-all text-sm mt-5"
                    >
                      {s.cta.label}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="fixed right-3 sm:right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                className="p-3 sm:p-0 flex items-center justify-center"
                onClick={() => {
                  el.current?.scrollIntoView({ behavior: "smooth" });
                }}
                aria-label={`Slide ${i + 1}`}
              >
                <motion.span
                  className="block rounded-full bg-white/20"
                  animate={{
                    width:
                      i === idx
                        ? typeof window !== "undefined" &&
                          window.innerWidth < 640
                          ? 12
                          : 32
                        : 12,
                    height:
                      i === idx
                        ? typeof window !== "undefined" &&
                          window.innerWidth < 640
                          ? 12
                          : 6
                        : 12,
                    backgroundColor:
                      i === idx ? "#3b82f6" : "rgba(255,255,255,0.2)",
                  }}
                  transition={{ duration: 0.4, ease: [0.17, 0.67, 0.29, 1] }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
