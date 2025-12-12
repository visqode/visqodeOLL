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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url('/hero-bg.jpeg')`,
      }}
      className="min-h-[85vh] max-w-[85vw] mx-auto my-2 md:my-4  bg-center bg-cover bg-no-repeat flex flex-col   rounded-xl md:rounded-2xl px-4 md:px-8"
    >
      <Navigation />

      <div className="flex justify-center items-center flex-col flex-1 text-center cursor-default py-12 md:py-16 px-4">
        <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center text-white flex justify-center items-center flex-col">
          <SplitText
            className="text-4xl sm:text-6xl md:text-7xl text-center py-1 md:py-2 racing font-bold tracking-tight"
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
            className="text-4xl sm:text-6xl md:text-7xl text-center py-1 md:py-2 racing font-bold tracking-tight"
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
          <div className="mt-6 max-w-xl">
            <ShinyText
              text="Founding successful companies by combining ideas with business expertise, capital and technical execution."
              disabled={false}
              speed={3}
              className="!text-base md:text-lg leading-relaxed font-medium opacity-90"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 w-full max-w-md">
          {/* Start Your Project Button - goes to contact section */}
          <button
            onClick={(e) => handleSectionClick(e, "contact")}
            className="w-full font-semibold sm:w-auto px-6 py-3 text-[#fffffd] border border-[#fffffd]/60 rounded-xl text-center hover:bg-[#fffffd]/10 hover:border-[#fffffd] transition-all duration-300"
          >
            Start Your Project <i className="ri-arrow-right-long-line"></i>
          </button>

          {/* View Our Work Button - goes to work section */}
          <button
            onClick={(e) => handleSectionClick(e, "projects")}
            className="w-full font-semibold sm:w-auto px-6 py-3 bg-[#dc2828] text-[#fffffd] rounded-xl hover:bg-[#b91c1c] text-center transition-all duration-300"
          >
            <i className="ri-folder-open-line"></i> &nbsp; View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
