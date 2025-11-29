import React from "react";
import { FaGithub, FaWhatsapp, FaHashnode, FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { socialLinksData } from "../utils/socialLinksData";

export default function MobileSocialLinks() {
  const getIconComponent = (name) => {
    const icons = {
      LinkedIn: IoLogoLinkedin,
      GitHub: FaGithub,
      LeetCode: SiLeetcode,
      Hashnode: FaHashnode,
      Twitter: FaXTwitter,
      WhatsApp: FaWhatsapp,
    };
    return icons[name];
  };

  return (
    <div className="md:hidden mb-8 border-t border-[#2a2a2a] pt-6">
      <h3 className="text-lg font-semibold mb-4 text-white text-center">
        Connect
      </h3>
      <div className="flex justify-center gap-3 flex-wrap">
        {socialLinksData.map((social) => {
          const IconComponent = getIconComponent(social.name);
          return (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0d0d0d] border border-[#1f1f1f] rounded px-3 py-2 text-[#9ca3af] hover:text-white transition-colors"
              style={{ "--hover-border": social.hoverColor }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = social.hoverColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#1f1f1f")
              }
            >
              <IconComponent className="text-lg" />
              <span className="text-xs">{social.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
