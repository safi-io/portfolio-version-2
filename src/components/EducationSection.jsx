import React from "react";
import { educationData } from "../utils/educationData";

export default function EducationSection() {
  return (
    <div className="mb-8 md:mb-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">
        // Education
      </h2>
      <div className="space-y-3 md:space-y-4">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="bg-[#0d0d0d] border border-[#1f1f1f] rounded p-4 md:p-5"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm text-[#9ca3af]">{edu.institution}</p>
              </div>
              <span className="text-xs sm:text-sm text-[#6b7280]">
                {edu.duration}
              </span>
            </div>
            <div className="text-xs sm:text-sm text-[#9ca3af]">
              CGPA: {edu.cgpa}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
