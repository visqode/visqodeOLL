'use client';
import Navigation from './Navigation';
import SplitText from './Features/SplitText';
import ShinyText from './Features/ShinyText';
import CircularText from './Features/CircularText';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const HeroSection = () => {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    if (typeof window === 'undefined') return;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSectionClick = (e, sectionId) => {
    // If the user clicked an <a> anchor, prevent default so we control behavior
    if (e && e.preventDefault) e.preventDefault();

    // If already on home page, just smooth-scroll
    if (pathname === '/') {
      scrollToSection(sectionId);
      return;
    }

    // Otherwise navigate to home with hash - the target section will auto-scroll on mount if it sees the hash
    router.push(`/#${sectionId}`);
  };

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url('/secHero.jpg')`,
      }}
      className="min-h-screen max-w-screen mx-auto   bg-center bg-cover bg-no-repeat flex flex-col rounded-xl md:rounded-2xl px-4 md:px-8"
    >
      <Navigation />

      <div className="flex justify-center items-center flex-col flex-1 text-center cursor-default py-12 md:py-16 px-4">
        <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center text-white flex justify-center items-center flex-col">
          <SplitText
            className="text-4xl sm:text-6xl md:text-7xl text-center py-1 md:py-2 racing font-bold tracking-tight"
            text="Building the"
          />
          <SplitText
            className="text-4xl sm:text-6xl md:text-8xl text-center py-1 md:py-2 racing font-black tracking-tighter leading-none"
            text="Digital Future"
          />
          <div className="mt-8 max-w-2xl">
            <ShinyText
              text="VisQode is a strategic technology partner. We combine engineering precision with design intelligence to scale ambitious businesses."
              disabled={false}
              speed={3}
              className="!text-lg md:text-xl leading-relaxed font-light openSans text-[var(--text-secondary)]"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 w-full max-w-md">
          {/* Start Your Project Button - goes to contact section */}
          <button
            onClick={(e) => handleSectionClick(e, 'contact')}
            className="w-full font-semibold sm:w-auto px-4 py-2 text-[var(--white)] border border-[var(--border-subtle)] rounded-xl text-center hover:bg-[var(--white)]/10 hover:border-[var(--white)] hover:shadow-lg hover:shadow-[var(--primary)]/50 transition-all duration-300"
          >
            Start Your Project <i className="ri-arrow-right-long-line"></i>
          </button>
        </div>
      </div>
      {/* scroll bar indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce [animation-duration:1.5s] [animation-iteration-count:infinite] ">
        {/* Mouse outline */}
        <div className="w-6 h-10 border-2 border-[var(--white)]/80 rounded-full relative flex items-start justify-center overflow-hidden bg-[var(--white)]/10 backdrop-blur-sm">
          {/* Bouncing dot */}
          <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full mt-2 animate-bounce [animation-duration:1.5s] [animation-iteration-count:infinite]"></div>
        </div>
        <p className="mt-2 text-xs text-white opacity-70">Scroll</p>
      </div>
    </section>
  );
};

export default HeroSection;
