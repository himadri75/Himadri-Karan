import Container from "../Container";
import { profile, socialLinks } from "../../data/portfolio";

export default function Hero() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid gap-10 border border-[#d6dbe1] bg-white p-10 sm:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#5d6672]">
              {profile.location} · {profile.availability}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-[#0e1116] sm:text-5xl">
              {profile.name}
            </h1>
            <p className="text-lg text-[#5d6672]">{profile.role}</p>
            <p className="text-base leading-7 text-[#5d6672]">{profile.summary}</p>
            <div className="flex flex-wrap gap-4">
              <a
                className="inline-flex items-center justify-center border border-[#0e1116] bg-[#0e1116] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#f6f7f9] transition-colors hover:bg-[#0e1116]/90 hover:text-[#f6f7f9]"
                href={profile.resumeUrl}
              >
                Resume
              </a>
              <a
                className="inline-flex items-center justify-center border border-[#0e1116] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0e1116] transition-colors hover:bg-[#0e1116] hover:text-[#f6f7f9]"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-l border-[#d6dbe1] pl-8 text-sm text-[#5d6672]">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0e1116]">
              Online
            </p>

            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-[#0e1116]"
                >
                  <Icon size={18} className="shrink-0" />
                  <span className="leading-none">{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
