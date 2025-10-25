import HeroSection from "@/components/HeroSection";
import ScrollText from "@/components/ScrollText";
import AboutSection from "@/components/AboutSection";
import OurService from "@/components/OurService";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ValueTrustLayer from "@/components/ValueTrustLayer";
import LeadCaptureLayer from "@/components/LeadCaptureLayer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollText />
      <AboutSection />
      <OurService />
      <ProjectsSection />
      <TeamSection />
      <TestimonialsSection />
      <ValueTrustLayer />
      <LeadCaptureLayer />
      <Footer />
    </>
  );
}
