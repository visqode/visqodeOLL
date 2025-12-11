"use client"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const AboutStats = () => {
  const stats = [
    { number: 150, label: "Projects Completed", suffix: "+" },
    { number: 98, label: "Client Satisfaction", suffix: "%" },
    { number: 5, label: "Years Experience", suffix: "+" },
    { number: 24, label: "Team Members", suffix: "" },
  ]

  const CountUp = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef()

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            let start = 0
            const increment = end / (duration / 16)
            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                setCount(end)
                clearInterval(timer)
              } else {
                setCount(Math.floor(start))
              }
            }, 16)
          }
        },
        { threshold: 0.5 },
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => observer.disconnect()
    }, [end, duration, isVisible])

    return (
      <span ref={ref} className="text-5xl lg:text-6xl font-bold text-[#dc2828]">
        {count}
        {suffix}
      </span>
    )
  }

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-gray-900 mb-6">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These numbers represent our commitment to excellence and the trust our clients place in us.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CountUp end={stat.number} suffix={stat.suffix} />
              <p className="text-gray-600 text-lg font-medium mt-4">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutStats
