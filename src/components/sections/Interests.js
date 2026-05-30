import Section from "../Section";
import { interests } from "../../data/portfolio";

export default function Interests() {
  return (
    <Section id="interests" eyebrow="Interests" title="Areas I explore">
      <div className="grid gap-6 sm:grid-cols-2">
        {interests.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 border border-[#d6dbe1] bg-white p-6"
          >
            <h3 className="text-lg font-semibold text-[#0e1116]">
              {item.title}
            </h3>
            <p className="text-sm text-[#5d6672]">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
