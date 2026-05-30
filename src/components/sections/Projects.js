"use client"

import Image from "next/image";
import Section from "../Section";
import { projects } from "../../data/portfolio";
import toast from "react-hot-toast";

export default function Projects() {
  const handleViewAllProjects = () => {
    toast.error("Coming soon.");
  }

  return (
    <Section id="projects" eyebrow="Projects" title="Selected work">
      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="grid gap-6 border border-[#d6dbe1] bg-white p-6 md:grid-cols-[340px_1fr]"
          >
            {/* Image */}
            <div className="overflow-hidden border border-[#d6dbe1]">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={1600}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-[#0e1116]">
                  {project.title}
                </h3>
                <p>{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-[#5d6672]">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-[#d6dbe1] px-2 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0e1116]">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="transition-colors hover:text-[#5d6672]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-center"
          onClick={handleViewAllProjects}>
          <a
            href="#"
            className="inline-flex items-center justify-center border border-[#0e1116] bg-[#0e1116] px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#f6f7f9] transition-colors hover:bg-[#0e1116]/90"
          >
            View All Projects
          </a>
        </div>
      </div>
    </Section>
  );
}