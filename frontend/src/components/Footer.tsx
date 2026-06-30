import Logo from "../assets/Logo.avif";
import MailIcon from "../assets/mail.avif";
import DiscordIcon from "../assets/discord.avif";
import InstagramIcon from "../assets/instagram.avif";
import FacebookIcon from "../assets/facebook.avif";
import LinkedinIcon from "../assets/linkedin.avif";

const links = [
  { icon: MailIcon, href: "mailto:uworbital@gmail.com", label: "Email" },
  {
    icon: DiscordIcon,
    href: "https://discord.gg/j32DZswg5b",
    label: "Discord",
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/uworbital",
    label: "Instagram",
  },
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/uworbital/",
    label: "Facebook",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/company/uw-orbital/",
    label: "LinkedIn",
  },
];

export function Footer() {
  return (
    <footer className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start gap-8">
          <div>
            <img src={Logo} alt="UW Orbital" className="h-10 w-auto mb-4" />
            <p className="text-gray-500 text-sm max-w-md leading-relaxed">
              University of Waterloo Satellite Design Team. Designing, building,
              and launching CubeSats.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-white text-gray-400 transition-all"
                aria-label={l.label}
              >
                <img src={l.icon} alt={l.label} className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} UW Orbital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
