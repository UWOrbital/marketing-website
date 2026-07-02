import Logo from "../assets/Logo.avif";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-3">
            <img src={Logo} alt="UW Orbital" className="h-12 sm:h-16 w-auto" />
          </a>
        </div>
      </div>
    </nav>
  );
}
