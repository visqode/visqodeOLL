"use client"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AnimatePresence } from "framer-motion"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const NewsletterSection = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  const benefits = [
    {
      icon: "bx-bulb",
      text: "Weekly design & development tips",
    },
    {
      icon: "bx-rocket",
      text: "Early access to new features",
    },
    {
      icon: "bx-gift",
      text: "Exclusive resources & templates",
    },
    {
      icon: "bx-trending-up",
      text: "Industry insights & trends",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#e97f33]/10 to-transparent rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-[#e97f33]/5 to-transparent rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-4xl lg:text-5xl xl:text-6xl racing font-bold text-white mb-6">
              Stay Ahead with VisQode
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto openSans leading-relaxed mb-8">
              Get branding tips, resources & early access to features. Join 5,000+ professionals who trust our insights.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#e97f33] rounded-full flex items-center justify-center mb-4">
                  <i className={`bx ${benefit.icon} text-black text-xl`}></i>
                </div>
                <p className="text-white openSans text-sm font-medium">{benefit.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-300 border-none outline-none openSans text-lg"
                  />
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-[#e97f33] text-black rounded-xl hover:bg-[#f0883e] transition-all duration-300 racing font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-6 h-6 border-2 border-black border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        Subscribe
                        <i className="bx bx-arrow-right ml-2 text-xl"></i>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="p-8 bg-[#e97f33]/20 backdrop-blur-sm rounded-2xl border border-[#e97f33]/30"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 bg-[#e97f33] rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <i className="bx bx-check text-black text-3xl"></i>
                  </motion.div>
                  <h3 className="text-2xl racing font-bold text-white mb-2">Welcome to VisQode!</h3>
                  <p className="text-gray-300 openSans">
                    Thank you for subscribing. Check your inbox for a welcome email with exclusive resources.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Privacy Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-400 openSans text-sm mt-6"
            >
              No spam, ever. Unsubscribe anytime. By subscribing, you agree to our{" "}
              <a href="#" className="text-[#e97f33] hover:underline">
                Privacy Policy
              </a>
              .
            </motion.p>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 lg:mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400"
          >
            <div className="flex items-center">
              <i className="bx bx-user text-[#e97f33] text-xl mr-2"></i>
              <span className="openSans text-sm">5,000+ subscribers</span>
            </div>
            <div className="flex items-center">
              <i className="bx bx-star text-[#e97f33] text-xl mr-2"></i>
              <span className="openSans text-sm">4.9/5 average rating</span>
            </div>
            <div className="flex items-center">
              <i className="bx bx-shield-check text-[#e97f33] text-xl mr-2"></i>
              <span className="openSans text-sm">GDPR compliant</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
