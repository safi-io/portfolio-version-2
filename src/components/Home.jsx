import React from "react";
import SocialSidebar from "./SocialSidebar";
import Header from "./Header";
import ProfileSection from "./ProfileSection";
import ExperienceSection from "./ExperienceSection";
import TechStackSection from "./TechStackSection";
import ProjectsSection from "./ProjectsSection";
import EducationSection from "./EducationSection";
import LeadershipSection from "./LeadershipSection";
import CertificationsSection from "./CertificationsSection";
import MobileSocialLinks from "./MobileSocialLinks";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <SocialSidebar />

      <section className="md:ml-16 lg:ml-20 flex-1 text-white py-6 md:py-8 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
        <Header />
        <ProfileSection />
        <ExperienceSection />
        <TechStackSection />
        <ProjectsSection />
        <EducationSection />
        <LeadershipSection />
        <CertificationsSection />
        <MobileSocialLinks />
        <Footer />
      </section>
    </div>
  );
}
