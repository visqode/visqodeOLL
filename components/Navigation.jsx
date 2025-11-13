"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  // Handle navbar scroll position behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP mobile menu slide animation
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

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleContactClick = (e) => {
    if (e?.preventDefault) e.preventDefault();

    if (pathname === "/") {
      scrollToContact();
      setIsOpen(false);
      return;
    }

    router.push("/#contact");
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] openSans font-extrabold
        ${
          scrolled
            ? "top-0 w-full bg-black/60 backdrop-blur-md border-b border-gray-600/20 shadow-lg"
            : "top-5 w-[90%] bg-transparent mb-[20px]"
        }
      `}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-white">
          <Link href="/">VisQode</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Services", "Consulting"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 text-sm lg:text-base"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Buttons // Contact & Quote */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            style={{ backgroundColor: "var(--primary)" }}
            onClick={handleContactClick}
            className="bg-[#a7ff59] text-black px-5 py-2 rounded-full hover:bg-[#8fee3f] hover:scale-105 transition duration-200"
          >
            Contact Us
          </button>
          <button
            style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
            className="border border-[#a7ff59] text-[#a7ff59] px-5 py-2 rounded-full hover:bg-[#a7ff5920] hover:scale-105 transition duration-200"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-2xl text-white">
          <i className={`ri-${isOpen ? "close-line" : "menu-line"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-full bg-white flex flex-col items-center justify-center space-y-8 md:hidden z-50"
        style={{ display: "none" }}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-2xl p-2"
        >
          <i className="ri-close-line"></i>
        </button>

        {["Home", "About", "Services", "Consulting"].map((item) => (
          <Link
            key={item}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={toggleMenu}
            className="text-2xl text-gray-700 hover:text-black py-2"
          >
            {item}
          </Link>
        ))}

        <button
          onClick={(e) => {
            handleContactClick(e);
          }}
          className="text-2xl text-gray-700 hover:text-black py-2"
        >
          Contact
        </button>

        <Link
          href="/signin"
          className="text-xl px-6 py-3 text-black border border-black rounded-full hover:bg-gray-100"
          onClick={toggleMenu}
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="text-xl px-6 py-3 bg-[#a7ff59] text-black rounded-full hover:bg-[#8fee3f]"
          onClick={toggleMenu}
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
