import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Logo from "../assets/Logo.avif";
import { nav } from "../content";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-white/5"
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 max-sm:px-3">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-3 shrink-0 py-1">
            <img
              src={Logo}
              alt="UW Orbital"
              className="h-10 sm:h-16 w-auto object-contain"
            />
          </Link>

          <div className="hidden sm:flex items-center gap-8">
            {nav.map((item) =>
              item.route ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors font-heading"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors font-heading"
                >
                  {item.label}
                </a>
              ),
            )}
          </div>

          <div className="sm:hidden flex items-center">
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.15, ease: "easeInOut" }}
                  className="flex items-center gap-5 mr-3"
                >
                  {nav.map((item) =>
                    item.route ? (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className="text-sm text-gray-400 hover:text-white transition-colors whitespace-nowrap font-heading"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="text-sm text-gray-400 hover:text-white transition-colors whitespace-nowrap font-heading"
                      >
                        {item.label}
                      </a>
                    ),
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setOpen((v) => !v)}
              className="shrink-0 w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle navigation"
            >
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
