import Section from "../Section";
import { profile, socialLinks } from "../../data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s work together">
      <div className="grid gap-6 sm:grid-cols-[1.2fr_0.8fr]">
        <p>
          If you have an internship opportunity, a project idea, or need a
          reliable collaborator, I would love to hear from you.
        </p>
        <div className="flex flex-col gap-6 border border-[#d6dbe1] bg-white p-6 text-sm text-[#5d6672]">
          <a className="text-[#0e1116]" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <form className="flex flex-col gap-3">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0e1116]">
              Your name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="border border-[#d6dbe1] bg-white px-3 py-2 text-sm text-[#0e1116] placeholder:text-[#5d6672]/70 focus:outline-none focus:ring-1 focus:ring-[#0e1116]"
            />
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0e1116]">
              Your email
            </label>
            <input
              type="email"
              name="email"
              placeholder="name@email.com"
              className="border border-[#d6dbe1] bg-white px-3 py-2 text-sm text-[#0e1116] placeholder:text-[#5d6672]/70 focus:outline-none focus:ring-1 focus:ring-[#0e1116]"
            />
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0e1116]">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about your project"
              className="border border-[#d6dbe1] bg-white px-3 py-2 text-sm text-[#0e1116] placeholder:text-[#5d6672]/70 focus:outline-none focus:ring-1 focus:ring-[#0e1116]"
            />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center border border-[#0e1116] bg-[#0e1116] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#f6f7f9] transition-colors hover:bg-[#0e1116]/90"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
