"use client"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null)
  const animationCompletedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || animationCompletedRef.current) return

    // Simple text splitting for chars
    const chars = text.split("").map((char, index) => {
      const span = document.createElement("span")
      span.textContent = char === " " ? "\u00A0" : char
      span.style.display = "inline-block"
      span.style.willChange = "transform, opacity"
      return span
    })

    el.innerHTML = ""
    chars.forEach((char) => el.appendChild(char))

    const startPct = (1 - threshold) * 100
    const m = /^(-?\d+)px$/.exec(rootMargin)
    const raw = m ? Number.parseInt(m[1], 10) : 0
    const sign = raw < 0 ? `-=${Math.abs(raw)}px` : `+=${raw}px`
    const start = `top ${startPct}%${sign}`

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
        once: true,
      },
      smoothChildTiming: true,
      onComplete: () => {
        animationCompletedRef.current = true
        gsap.set(chars, {
          ...to,
          clearProps: "willChange",
          immediateRender: true,
        })
        onLetterAnimationComplete?.()
      },
    })

    tl.set(chars, { ...from, immediateRender: false, force3D: true })
    tl.to(chars, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
      gsap.killTweensOf(chars)
    }
  }, [text, delay, duration, ease, splitType, from, to, threshold, rootMargin, onLetterAnimationComplete])

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
      style={{
        textAlign,
        wordWrap: "break-word",
      }}
    >
      {text}
    </p>
  )
}

export default SplitText
