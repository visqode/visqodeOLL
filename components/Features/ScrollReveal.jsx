"use client"
import { useEffect, useRef, useMemo } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0,
  baseRotation = 5,
  blurStrength = 10,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom 80%",
  wordAnimationEnd = "bottom 60%",
}) => {
  const containerRef = useRef(null)

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : ""
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word
      return (
        <motion.span
          className="inline-block word"
          key={index}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
        >
          {word}
        </motion.span>
      )
    })
  }, [children])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window

    // Container animation
    gsap.fromTo(
      el,
      {
        transformOrigin: "0% 50%",
        rotate: baseRotation,
        scale: 0.98,
        y: 30,
        skewY: 1,
      },
      {
        rotate: 0,
        scale: 1,
        y: 0,
        skewY: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top 90%",
          end: rotationEnd,
          scrub: 0.1,
          anticipatePin: 0.1,
        },
      },
    )

    const wordElements = el.querySelectorAll(".word")

    // Word opacity and translation
    gsap.fromTo(
      wordElements,
      {
        opacity: baseOpacity,
        y: 15,
        willChange: "opacity, transform, filter",
      },
      {
        opacity: 1,
        y: 0,
        ease: "power4.out",
        stagger: { each: 0.015, from: "start" },
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top 85%",
          end: wordAnimationEnd,
          scrub: 0.1,
        },
      },
    )

    // Blur effect
    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          filter: "blur(0px)",
          ease: "power4.out",
          stagger: { each: 0.015, from: "start" },
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top 85%",
            end: wordAnimationEnd,
            scrub: 0.1,
          },
        },
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength])

  return (
    <motion.div
      ref={containerRef}
      className={`my-5 ${containerClassName}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.33, 0, 0, 1] }}
    >
      <p className={`text-base md:text-lg leading-relaxed font-semibold ${textClassName}`}>{splitText}</p>
    </motion.div>
  )
}

export default ScrollReveal
