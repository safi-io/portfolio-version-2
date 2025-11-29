import React from "react";
import { techStackData } from "../utils/techStackData";

export default function TechStackSection() {
  return (
    <div className="mb-8 md:mb-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">
        // Tech Stack
      </h2>
      <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded p-4 md:p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <div>
            <h4 className="text-xs font-semibold text-[#6b7280] mb-2 uppercase">
              Languages
            </h4>
            <div className="space-y-1 text-sm text-[#d1d5db]">
              {techStackData.languages.map((lang, i) => (
                <div key={i}>{lang}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[#6b7280] mb-2 uppercase">
              Backend
            </h4>
            <div className="space-y-1 text-sm text-[#d1d5db]">
              {techStackData.backend.map((tech, i) => (
                <div key={i}>{tech}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[#6b7280] mb-2 uppercase">
              Frontend
            </h4>
            <div className="space-y-1 text-sm text-[#d1d5db]">
              {techStackData.frontend.map((tech, i) => (
                <div key={i}>{tech}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[#6b7280] mb-2 uppercase">
              Databases
            </h4>
            <div className="space-y-1 text-sm text-[#d1d5db]">
              {techStackData.databases.map((db, i) => (
                <div key={i}>{db}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-[#1f1f1f]">
          <h4 className="text-xs font-semibold text-[#6b7280] mb-2 uppercase">
            Tools & Platforms
          </h4>
          <div className="flex flex-wrap gap-1.5 md:gap-2 text-xs sm:text-sm text-[#d1d5db]">
            {techStackData.tools.map((tool, i) => (
              <span
                key={i}
                className="bg-[#1a1a1a] px-2 md:px-3 py-1 rounded border border-[#2a2a2a]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
