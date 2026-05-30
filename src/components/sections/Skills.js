import Section from "../Section";
import { skillGroups } from "../../data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I use daily">
      <div className="grid gap-4 sm:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-4 border border-[#d6dbe1] bg-white p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0e1116]">
              {group.title}
            </h3>
            <ul className="space-y-2 text-sm text-[#5d6672]">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
