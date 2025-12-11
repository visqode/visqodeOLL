"use client";
import Navigation from "./Navigation";
import SplitText from "./Features/SplitText";
import ShinyText from "./Features/ShinyText";
import CircularText from "./Features/CircularText";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const HeroSection = () => {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSectionClick = (e, sectionId) => {
    // If the user clicked an <a> anchor, prevent default so we control behavior
    if (e && e.preventDefault) e.preventDefault();

    // If already on home page, just smooth-scroll
    if (pathname === "/") {
      scrollToSection(sectionId);
      return;
    }

    // Otherwise navigate to home with hash - the target section will auto-scroll on mount if it sees the hash
    router.push(`/#${sectionId}`);
  };

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url('/hero-bg.jpeg')`,
      }}
      className="min-h-screen bg-center bg-cover bg-no-repeat bg-gray-100 flex flex-col m-2 md:m-5 rounded-2xl md:rounded-3xl px-4 md:px-10 relative"
    >
      <Navigation />

      <div className="flex justify-center items-center flex-col flex-1 text-center cursor-default mt-[20px] px-4">
        <div className="max-w-[95%] md:max-w-[80%] mx-auto text-center text-white text-balance flex justify-center items-center flex-col text-3xl sm:text-8xl">
          <SplitText
            className="hero-text-large text-center py-2 md:py-3 racing font-bold"
            text="We Build & Scale"
            delay={100}
            duration={0.3}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            textAlign="center"
          />
          <SplitText
            className="hero-text-medium text-center py-2 md:py-3 racing font-bold"
            text="Digital Products"
            delay={100}
            duration={0.3}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            textAlign="center"
          />
          <div className="mt-4 max-w-2xl font-[600]">
            <ShinyText
              text="Founding successful companies by combining ideas with business expertise, capital and technical execution."
              disabled={false}
              speed={3}
              className="!text-[20px] md:text-lg leading-relaxed"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8 w-full max-w-md">
          {/* Start Your Project Button - goes to contact section */}
          <button
            onClick={(e) => handleSectionClick(e, "contact")}
            className="w-full font-[600] sm:w-auto px-6 md:px-7 hover:px-8 md:hover:px-10 transition-all duration-300 py-3 text-[#fffffd] border border-[#fffffd] rounded-full text-center hover:bg-[#fffffd]/10"
          >
            Start Your Project <i className="ri-arrow-right-long-line"></i>
          </button>

          {/* View Our Work Button - goes to work section */}
          <button
            onClick={(e) => handleSectionClick(e, "projects")}
            className="w-full font-[600] sm:w-auto px-6 md:px-7 hover:px-8 md:hover:px-10 transition-all duration-300 py-3 bg-[#dc2828] text-[#fffffd] rounded-full hover:bg-[#b91c1c] text-center"
          >
            <i className="ri-folder-open-line"></i> &nbsp; View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
