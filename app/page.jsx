import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OurService from "@/components/OurService";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ValueTrustLayer from "@/components/ValueTrustLayer";
import LeadCaptureLayer from "@/components/LeadCaptureLayer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OurService />
      <TeamSection />
      <TestimonialsSection />
      <ValueTrustLayer />
      <LeadCaptureLayer />
      <Footer />
    </>
  );
}
