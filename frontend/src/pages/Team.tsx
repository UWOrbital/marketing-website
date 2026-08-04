import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { team } from "../content";

export function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          {team.backLabel}
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-2">
          {team.heading}
        </h1>
        <p className="text-gray-400 text-base mb-12 max-w-xl">
          {team.subtitle}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {team.members.map((m, i) => (
            <div
              key={i}
              className="group rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden hover:border-white/[0.15] transition-all"
            >
              {m.image ? (
                <img
                  src={m.image}
                  alt={m.name}
                  className="aspect-[3/4] w-full object-cover"
                />
              ) : (
                <div className="aspect-[3/4] bg-white/[0.04]" />
              )}
              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-semibold text-white font-heading leading-tight">
                  {m.name}
                </h3>
                <p className="text-xs text-orbital-blue mt-0.5 font-medium">
                  {m.role}
                </p>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-3">
                  {m.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
