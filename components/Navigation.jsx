"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (mobileMenuRef.current) {
      gsap.set(mobileMenuRef.current, {
        x: "100%",
        display: isOpen ? "flex" : "none",
      });
      if (isOpen) {
        gsap.to(mobileMenuRef.current, {
          x: "0%",
          display: "flex",
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          duration: 0.5,
          ease: "power3.in",
          onComplete: () => {
            gsap.set(mobileMenuRef.current, { display: "none" });
          },
        });
      }
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToContact = () => {
    if (typeof window === "undefined") return;
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleContactClick = (e) => {
    // If the user clicked an <a> anchor, prevent default so we control behavior
    if (e && e.preventDefault) e.preventDefault();

    // If already on home page, just smooth-scroll
    if (pathname === "/") {
      scrollToContact();
      // close mobile menu if open
      setIsOpen(false);
      return;
    }

    // Otherwise navigate to home with hash - ContactForm will auto-scroll on mount if it sees the hash
    // This avoids a full reload and keeps client-side nav
    router.push("/#contact");
    // close mobile menu if open
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center  justify-between p-4 bg-transparent border-b border-b-gray-500/30 openSans font-extrabold">
      <div className="text-xl md:text-2xl font-bold text-white">
        <Link href="/">VisQode</Link>
      </div>
      <div className="hidden md:flex  translate-x-8 space-x-6 lg:space-x-8">
        <Link
          href="/"
          className="text-white hover:scale-105 hover:transition-all duration-200 text-sm lg:text-base"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-white hover:scale-105 hover:transition-all duration-200 text-sm lg:text-base"
        >
          About
        </Link>
        <Link
          href="/services"
          className="text-white hover:scale-105 hover:transition-all duration-200 text-sm lg:text-base"
        >
          Services
        </Link>
        <Link
          href="/consulting"
          className="text-white hover:scale-105 hover:transition-all duration-200 text-sm lg:text-base"
        >
          Consulting
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
        {/* Use a button so we can intercept and do smooth-scroll or router push */}
        <button
          onClick={handleContactClick}
          className="bg-[#a7ff59] text-black px-6 py-2 rounded-full hover:scale-105 hover:transition-all duration-200 text-sm lg:text-base"
        >
          Contact Us
        </button>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu" className="p-2">
          <i className={`bx ${isOpen ? "bx-x" : "bx-menu"} text-2xl text-white`}></i>
        </button>
      </div>

      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-full bg-white flex flex-col items-center justify-center space-y-8 md:hidden z-50"
        style={{ display: "none" }}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-2xl p-2"
          aria-label="Close menu"
        >
          <i className="bx bx-x"></i>
        </button>

        <Link
          href="/"
          className="text-2xl text-gray-700 hover:text-black py-2"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-2xl text-gray-700 hover:text-black py-2"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          href="/services"
          className="text-2xl text-gray-700 hover:text-black py-2"
          onClick={toggleMenu}
        >
          Services
        </Link>
        <Link
          href="/consulting"
          className="text-2xl text-gray-700 hover:text-black py-2"
          onClick={toggleMenu}
        >
          Consulting
        </Link>

        {/* Contact entry for mobile - uses handleContactClick so it will scroll or navigate */}
        <button
          onClick={(e) => {
            handleContactClick(e);
            // toggleMenu will be handled inside handleContactClick via setIsOpen(false)
          }}
          className="text-2xl text-gray-700 hover:text-black py-2"
        >
          Contact
        </button>

        <Link
          href="/signin"
          className="text-xl px-6 py-3 text-black border border-black rounded-full hover:bg-gray-100 mt-4"
          onClick={toggleMenu}
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="text-xl px-6 py-3 text-black bg-[#a7ff59] rounded-full hover:bg-[#8fee3f]"
          onClick={toggleMenu}
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
