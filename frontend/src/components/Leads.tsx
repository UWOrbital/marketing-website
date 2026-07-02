export function Leads() {
  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white mb-4">
          Our Team
        </h2>
        <p className="text-gray-500 text-sm mb-8 sm:mb-12">
          UW Orbital consists of 8 subteams & 1 subproject team
        </p>

        <div className="mb-8 sm:mb-12">
          <p className="text-white font-medium mb-1">
            <span className="text-orbital-blue">Team Leads:</span> Lorem, Ipsum
          </p>
          <p className="text-gray-400">
            <span className="text-orbital-blue">Integration Lead:</span> Dolor
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="border border-white/5 p-6 hover:bg-white/[0.02] transition-colors"
            >
              <h3 className="text-white font-medium text-sm mb-2 leading-relaxed">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-gray-500 text-xs">
                LEADS: Consectetur, Adipiscing
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
