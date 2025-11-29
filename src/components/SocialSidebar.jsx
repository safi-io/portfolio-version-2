import React from "react";
import { FaGithub, FaWhatsapp, FaHashnode, FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { socialLinksData } from "../utils/socialLinksData";

export default function SocialSidebar() {
  const getIconComponent = (name) => {
    const icons = {
      LinkedIn: IoLogoLinkedin,
      GitHub: FaGithub,
      LeetCode: SiLeetcode,
      Hashnode: FaHashnode,
      Twitter: FaXTwitter,
      WhatsApp: FaWhatsapp,
      Email: IoMail,
    };
    return icons[name];
  };

  return (
    <div className="hidden md:fixed md:left-0 md:top-0 md:h-screen md:w-16 lg:w-20 md:bg-[#0d0d0d] md:border-r md:border-[#1f1f1f] md:flex md:flex-col md:items-center md:justify-center md:gap-4 lg:gap-6 md:z-50">
      {socialLinksData.map((social) => {
        const IconComponent = getIconComponent(social.name);
        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="text-[#6b7280] hover:text-[#0077b5] transition-colors text-xl lg:text-2xl"
            style={{ "--hover-color": social.hoverColor }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = social.hoverColor)
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            title={social.name}
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
}
