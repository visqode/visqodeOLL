"use client"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import Link from "next/link"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    if (mobileMenuRef.current) {
      gsap.set(mobileMenuRef.current, {
        x: "100%",
        display: isOpen ? "flex" : "none",
      })
      if (isOpen) {
        gsap.to(mobileMenuRef.current, {
          x: "0%",
          display: "flex",
          duration: 0.5,
          ease: "power3.out",
        })
      } else {
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          duration: 0.5,
          ease: "power3.in",
          onComplete: () => {
            gsap.set(mobileMenuRef.current, { display: "none" })
          },
        })
      }
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex items-center justify-between p-4 bg-transparent border-b border-b-gray-500/30 openSans font-extrabold">
      <div className="text-xl md:text-2xl font-bold text-white">
        <Link href="/">VisQode</Link>
      </div>

      <div className="hidden md:flex space-x-6 lg:space-x-8">
        <Link href="/" className="text-white hover:scale-105 hover:transition-all duration-200 text-sm lg:text-base">
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
        <Link
          href="/signin"
          className="px-3 lg:px-4 py-2 text-sm lg:text-base text-white border border-white rounded-full hover:bg-gray-100 hover:text-black transition-all duration-300"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="px-3 lg:px-4 py-2 text-sm lg:text-base text-black bg-[#a7ff59] rounded-full hover:bg-[#8fee3f] transition-all duration-300"
        >
          Sign Up
        </Link>
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
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl p-2" aria-label="Close menu">
          <i className="bx bx-x"></i>
        </button>
        <Link href="/" className="text-2xl text-gray-700 hover:text-black py-2" onClick={toggleMenu}>
          Home
        </Link>
        <Link href="/about" className="text-2xl text-gray-700 hover:text-black py-2" onClick={toggleMenu}>
          About
        </Link>
        <Link href="/services" className="text-2xl text-gray-700 hover:text-black py-2" onClick={toggleMenu}>
          Services
        </Link>
        <Link href="/consulting" className="text-2xl text-gray-700 hover:text-black py-2" onClick={toggleMenu}>
          Consulting
        </Link>
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
  )
}

export default Navigation
