import React from "react";
import { certificationsData } from "../utils/certificationsData";

export default function CertificationsSection() {
  return (
    <div className="mb-8 md:mb-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">
        // Certifications
      </h2>
      <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 md:gap-3 text-xs sm:text-sm text-[#d1d5db]">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="flex items-start gap-2">
              <span className="text-[#6b7280]">•</span>
              <span>{cert.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
