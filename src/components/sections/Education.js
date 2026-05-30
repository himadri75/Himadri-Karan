import Section from "../Section";
import { education } from "../../data/portfolio";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic foundation">
      <div className="grid gap-6">
        {education.map((item) => (
          <div key={item.school} className="grid gap-4 border border-[#d6dbe1] bg-white p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#0e1116]">
                  {item.school}
                </h3>
                <p className="text-sm text-[#5d6672]">{item.degree}</p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#5d6672]">
                {item.duration}
              </p>
            </div>
            <ul className="space-y-2 text-sm text-[#5d6672]">
              {item.details.map((detail) => (
                <li key={detail} className="border-l border-[#d6dbe1] pl-4">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
