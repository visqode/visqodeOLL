"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  const imageUrls = {
    aboutSection: "#",
  };

  return (
    <div className="min-h-screen bg-[var(--dark)]">
      <div className="">
        <Navigation />
      </div>
      {/* Agency main section gose from here */}
      <section>
        <div className="h-2/5">
          <img src={imageUrls.aboutSection} alt="About Us section image" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
