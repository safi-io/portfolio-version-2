import React from "react";
import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ReactCountryFlag from "react-country-flag";
import { profileData, headerData } from "../utils/profileData";
import resume from "../M Safiullah Khan.pdf";

export default function Header() {
  return (
    <div className="mb-8 md:mb-12 border-b border-[#2a2a2a] pb-6 md:pb-8">
      <div className="flex items-center gap-2 md:gap-3 font-mono text-xs md:text-sm text-[#6b7280] mb-3">
        <span className="text-[#4ade80]">$</span>
        <span>{headerData.terminalCommand}</span>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
        {headerData.title}
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-[#9ca3af] mb-4">
        {headerData.subtitle}
      </p>

      <div className="flex flex-wrap gap-3 md:gap-4 items-center text-xs sm:text-sm">
        <div className="flex items-center gap-2 bg-[#1a1a1a] px-2.5 md:px-3 py-1.5 rounded border border-[#2a2a2a]">
          <span className="text-[#6b7280]">📍</span>
          <ReactCountryFlag
            countryCode="PK"
            svg
            style={{ fontSize: "14px" }}
          />
          <span className="text-[#9ca3af]">{profileData.location}</span>
        </div>
        <div className="flex items-center gap-2 bg-[#1a1a1a] px-2.5 md:px-3 py-1.5 rounded border border-[#2a2a2a]">
          <div className="w-2 h-2 bg-[#4ade80] rounded-full"></div>
          <span className="text-[#9ca3af]">Available for work</span>
        </div>
        <a href={resume} download>
          <Button
            variant="outlined"
            startIcon={<CloudDownloadIcon />}
            sx={{
              color: "#9ca3af",
              borderColor: "#2a2a2a",
              "&:hover": {
                borderColor: "#3a3a3a",
                background: "#1a1a1a",
              },
              textTransform: "none",
              fontSize: "13px",
              padding: "6px 16px",
            }}
          >
            Download CV
          </Button>
        </a>
      </div>
    </div>
  );
}
