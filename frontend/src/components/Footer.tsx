import { LINKS } from "../config";
import Logo from "../assets/Logo.avif";
import MailIcon from "../assets/mail.avif";
import DiscordIcon from "../assets/discord.avif";
import InstagramIcon from "../assets/instagram.avif";
import FacebookIcon from "../assets/facebook.avif";
import LinkedinIcon from "../assets/linkedin.avif";

const links: { icon: string; href: string; label: string }[] = [
  { icon: MailIcon, href: LINKS.EMAIL, label: "Email" },
  { icon: DiscordIcon, href: LINKS.DISCORD, label: "Discord" },
  { icon: InstagramIcon, href: LINKS.INSTAGRAM, label: "Instagram" },
  { icon: FacebookIcon, href: LINKS.FACEBOOK, label: "Facebook" },
  { icon: LinkedinIcon, href: LINKS.LINKEDIN, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer id="join" className="py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start gap-6 sm:gap-8">
          <div>
            <img src={Logo} alt="UW Orbital" className="h-10 w-auto mb-4" />
            <p className="text-gray-500 text-sm max-w-md leading-relaxed">
              University of Waterloo Satellite Design Team. Designing, building,
              and launching CubeSats.
            </p>
          </div>

          <div className="flex items-center gap-4 sm:gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-9 sm:h-9 border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-white text-gray-400 transition-all"
                aria-label={l.label}
              >
                <img
                  src={l.icon}
                  alt={l.label}
                  className="w-5 h-5 sm:w-4 sm:h-4"
                />
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
