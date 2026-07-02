import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/60 via-transparent to-[#050510]" />

      <div className="relative z-10 px-4 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight font-heading leading-none">
            UW Orbital
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-2 sm:mt-3">
            University of Waterloo Satellite Design Team
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8"
        >
          <h2 className="text-base sm:text-lg text-white/80 font-heading">
            Yes, we're going to space.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10"
        >
          <a
            href="#"
            className="inline-block px-6 py-3 bg-orbital-blue text-white font-medium hover:bg-orbital-blue-dark transition-all text-sm"
          >
            Our Mission
          </a>
        </motion.div>
      </div>
    </section>
  );
}
