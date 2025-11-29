import React from "react";
import { projectsData } from "../utils/projectsData";

export default function ProjectsSection() {
  return (
    <div className="mb-8 md:mb-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">
        // Featured Projects
      </h2>
      <div className="space-y-3 md:space-y-4">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#0d0d0d] border border-[#1f1f1f] rounded p-4 md:p-5"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
              <h3 className="text-base md:text-lg font-semibold text-white">
                {project.name}
              </h3>
              <span className="text-xs text-[#6b7280]">
                {project.duration}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#9ca3af] mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2 md:mb-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-[#1a1a1a] px-2 py-1 rounded border border-[#2a2a2a] text-[#9ca3af]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#6b7280] hover:text-[#9ca3af]"
            >
              → {project.githubLink.replace("https://", "")}
            </a>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/safi-io"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 md:mt-4 text-xs sm:text-sm text-[#6b7280] hover:text-[#9ca3af]"
      >
        → View all projects on GitHub
      </a>
    </div>
  );
}
