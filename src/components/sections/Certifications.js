import Section from "../Section";
import { certifications } from "../../data/portfolio";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Validated expertise"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={`${cert.title}-${cert.issuer}`}
            className="flex flex-col gap-2 border border-[#d6dbe1] bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold text-[#0e1116]">
                {cert.title}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-[#5d6672]">
                {cert.issuer}
              </p>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#5d6672]">
              {cert.year}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
