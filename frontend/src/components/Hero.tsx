import { motion } from "framer-motion";
import { hero } from "../content";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/60 via-transparent to-[#050510]" />

      <div className="relative z-10 w-full pl-[10%]">
        <div className="max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight font-heading leading-none">
              {hero.heading}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-orbital-blue mt-3">
              {hero.subtitle}
            </p>
            <h2 className="text-lg sm:text-xl md:text-2xl text-white/80 font-figtree mt-6">
              {hero.tagline}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8"
          >
            <a
              href="#join"
              className="inline-block px-8 py-4 bg-orbital-blue text-white font-medium hover:bg-orbital-blue-dark transition-all text-base"
            >
              {hero.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
