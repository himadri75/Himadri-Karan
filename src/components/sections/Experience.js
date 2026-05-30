import Section from "../Section";
import { experience } from "../../data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Professional exposure">
      <div className="grid gap-6">
        {experience.map((item) => (
          <div key={item.role} className="grid gap-4 border border-[#d6dbe1] bg-white p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#0e1116]">
                  {item.role}
                </h3>
                <p className="text-sm text-[#5d6672]">{item.company}</p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#5d6672]">
                {item.duration}
              </p>
            </div>
            <p className="text-sm text-[#5d6672]">{item.summary}</p>
            <ul className="space-y-2 text-sm text-[#5d6672]">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="border-l border-[#d6dbe1] pl-4">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
