import React from "react";
import { profileData } from "../utils/profileData";

export default function ProfileSection() {
  return (
    <div className="mb-8 md:mb-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">
        // About
      </h2>
      <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-lg p-4 md:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1f1f1f]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#3a3a3a]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#3a3a3a]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#3a3a3a]"></div>
          </div>
          <span className="text-xs text-[#525252] ml-2">about_me.py</span>
        </div>

        <div className="leading-relaxed">
          <div className="flex items-start gap-2 mb-1">
            <span className="text-[#6366f1]">class</span>
            <span className="text-[#a78bfa]">Developer</span>
            <span className="text-[#6b7280]">:</span>
          </div>

          <div className="ml-4 mb-3">
            <div className="flex items-start gap-2 mb-1">
              <span className="text-[#6366f1]">def</span>
              <span className="text-[#fbbf24]">__init__</span>
              <span className="text-[#6b7280]">(</span>
              <span className="text-[#a78bfa]">self</span>
              <span className="text-[#6b7280]">):</span>
            </div>

            <div className="ml-8 space-y-1">
              <div>
                <span className="text-[#6b7280]">self.</span>
                <span className="text-[#a78bfa]">name</span>
                <span className="text-[#6b7280]"> = </span>
                <span className="text-[#fbbf24]">"{profileData.name}"</span>
              </div>
              <div>
                <span className="text-[#6b7280]">self.</span>
                <span className="text-[#a78bfa]">role</span>
                <span className="text-[#6b7280]"> = </span>
                <span className="text-[#fbbf24]">"{profileData.role}"</span>
              </div>
              <div>
                <span className="text-[#6b7280]">self.</span>
                <span className="text-[#a78bfa]">location</span>
                <span className="text-[#6b7280]"> = </span>
                <span className="text-[#fbbf24]">"{profileData.location}"</span>
              </div>
              <div>
                <span className="text-[#6b7280]">self.</span>
                <span className="text-[#a78bfa]">education</span>
                <span className="text-[#6b7280]"> = </span>
                <span className="text-[#fbbf24]">"{profileData.education}"</span>
              </div>
              <div>
                <span className="text-[#6b7280]">self.</span>
                <span className="text-[#a78bfa]">focus</span>
                <span className="text-[#6b7280]"> = [</span>
                {profileData.focus.map((item, index) => (
                  <React.Fragment key={index}>
                    <span className="text-[#fbbf24]">"{item}"</span>
                    {index < profileData.focus.length - 1 && (
                      <span className="text-[#6b7280]">, </span>
                    )}
                  </React.Fragment>
                ))}
                <span className="text-[#6b7280]">]</span>
              </div>
              <div>
                <span className="text-[#6b7280]">self.</span>
                <span className="text-[#a78bfa]">core_skills</span>
                <span className="text-[#6b7280]"> = [</span>
                {profileData.coreSkills.map((skill, index) => (
                  <React.Fragment key={index}>
                    <span className="text-[#fbbf24]">"{skill}"</span>
                    {index < profileData.coreSkills.length - 1 && (
                      <span className="text-[#6b7280]">, </span>
                    )}
                  </React.Fragment>
                ))}
                <span className="text-[#6b7280]">]</span>
              </div>
              <div>
                <span className="text-[#6b7280]">self.</span>
                <span className="text-[#a78bfa]">certifications</span>
                <span className="text-[#6b7280]"> = [</span>
                {profileData.certifications.map((cert, index) => (
                  <React.Fragment key={index}>
                    <span className="text-[#fbbf24]">"{cert}"</span>
                    {index < profileData.certifications.length - 1 && (
                      <span className="text-[#6b7280]">, </span>
                    )}
                  </React.Fragment>
                ))}
                <span className="text-[#6b7280]">]</span>
              </div>
              <div>
                <span className="text-[#6b7280]">self.</span>
                <span className="text-[#a78bfa]">workshops_delivered</span>
                <span className="text-[#6b7280]"> = </span>
                <span className="text-[#fbbf24]">"{profileData.workshopsDelivered}"</span>
              </div>
              <div>
                <span className="text-[#6b7280]">self.</span>
                <span className="text-[#a78bfa]">students_mentored</span>
                <span className="text-[#6b7280]"> = </span>
                <span className="text-[#fbbf24]">"{profileData.studentsMentored}"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
