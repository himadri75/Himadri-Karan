import Section from "../Section";
import { highlights } from "../../data/portfolio";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Focused on useful software">
      <div className="grid gap-6 sm:grid-cols-2">
        <p>
          I am a Java Full-Stack Developer focused on building scalable and reliable web applications using Spring Boot and React. I enjoy turning ideas into real-world systems with clean architecture, strong backend logic, and smooth user experiences. I care about performance, maintainability, and writing code that is easy to scale and debug.
        </p>
        <ul className="space-y-3 text-sm text-[#5d6672]">
          {highlights.map((item) => (
            <li key={item} className="border-l border-[#d6dbe1] pl-4">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
