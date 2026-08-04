import { footer } from "./content";

const byLabel = Object.fromEntries(
  footer.social.map((s) => [s.label.toUpperCase(), s.href]),
);

export const LINKS = {
  EMAIL: byLabel.Email,
  DISCORD: byLabel.Discord,
  INSTAGRAM: byLabel.Instagram,
  FACEBOOK: byLabel.Facebook,
  LINKEDIN: byLabel.LinkedIn,
} as const;
