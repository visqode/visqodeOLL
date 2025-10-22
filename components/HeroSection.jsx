"use client";
import Navigation from "./Navigation";
import SplitText from "./Features/SplitText";
import ShinyText from "./Features/ShinyText";
import CircularText from "./Features/CircularText";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
      }}
      className="min-h-screen bg-center bg-cover bg-no-repeat bg-gray-100 flex flex-col m-2 md:m-5 rounded-2xl md:rounded-3xl px-4 md:px-10 relative"
    >
      <Navigation />

      <div className="flex justify-center items-center flex-col flex-1 text-center cursor-default px-4">
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
          <div className="mt-4 max-w-2xl">
            <ShinyText
              text="Founding successful companies by combining ideas with business expertise, capital and technical execution."
              disabled={false}
              speed={3}
              className="text-sm md:text-lg leading-relaxed"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8 w-full max-w-md">
          <Link
            href="/signin"
            className="w-full sm:w-auto px-6 md:px-7 hover:px-8 md:hover:px-10 transition-all duration-300 py-3 text-white border border-white rounded-full text-center"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="w-full sm:w-auto px-6 md:px-7 hover:px-8 md:hover:px-10 transition-all duration-300 py-3 text-black bg-[#a7ff59] rounded-full hover:bg-[#8fee3f] text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-5 right-4 md:right-5 hidden md:block">
        <CircularText
          text="Your*Trusted*Partner*"
          onHover="speedUp"
          spinDuration={20}
          className="w-16 h-16 md:w-20 md:h-20"
        />
      </div>
    </section>
  );
};

export default HeroSection;
