"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const QuoteCalculator = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedServices, setSelectedServices] = useState([])
  const [budgetRange, setBudgetRange] = useState("")
  const [timeline, setTimeline] = useState("")
  const [ongoingSupport, setOngoingSupport] = useState(false)
  const [showEstimate, setShowEstimate] = useState(false)
  const [estimatedQuote, setEstimatedQuote] = useState(0)

  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const resultRef = useRef(null)

  const services = [
    { id: "logo", name: "Logo Design", price: 500, icon: "bx-palette" },
    { id: "branding", name: "Complete Branding", price: 2000, icon: "bx-diamond" },
    { id: "website", name: "Website Development", price: 3500, icon: "bx-code-alt" },
    { id: "ecommerce", name: "E-commerce Platform", price: 5000, icon: "bx-store" },
    { id: "mobile", name: "Mobile App", price: 8000, icon: "bx-mobile" },
    { id: "hosting", name: "Hosting & Maintenance", price: 200, icon: "bx-server" },
  ]

  const budgetRanges = [
    { value: "1000-5000", label: "$1,000 - $5,000", multiplier: 0.8 },
    { value: "5000-10000", label: "$5,000 - $10,000", multiplier: 1.0 },
    { value: "10000-25000", label: "$10,000 - $25,000", multiplier: 1.2 },
    { value: "25000+", label: "$25,000+", multiplier: 1.5 },
  ]

  const timelines = [
    { value: "rush", label: "1-2 weeks (Rush)", multiplier: 1.5 },
    { value: "standard", label: "1-2 months (Standard)", multiplier: 1.0 },
    { value: "flexible", label: "3+ months (Flexible)", multiplier: 0.9 },
  ]

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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

  const toggleService = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const calculateEstimate = () => {
    const basePrice = selectedServices.reduce((total, serviceId) => {
      const service = services.find((s) => s.id === serviceId)
      return total + (service ? service.price : 0)
    }, 0)

    const budgetMultiplier = budgetRanges.find((b) => b.value === budgetRange)?.multiplier || 1
    const timelineMultiplier = timelines.find((t) => t.value === timeline)?.multiplier || 1
    const supportMultiplier = ongoingSupport ? 1.3 : 1

    const finalEstimate = Math.round(basePrice * budgetMultiplier * timelineMultiplier * supportMultiplier)
    setEstimatedQuote(finalEstimate)
    setShowEstimate(true)

    // Animate result
    setTimeout(() => {
      if (resultRef.current) {
        gsap.fromTo(
          resultRef.current,
          { opacity: 0, scale: 0.8, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" },
        )
      }
    }, 100)
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl racing font-bold text-gray-900 mb-6">
            Get an Instant Project Estimate
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto openSans leading-relaxed">
            Answer a few quick questions and get a personalized quote for your project in seconds.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <motion.div
                    animate={{
                      backgroundColor: currentStep >= step ? "#e97f33" : "#e5e7eb",
                      color: currentStep >= step ? "#000" : "#9ca3af",
                    }}
                    className="w-10 h-10 rounded-full flex items-center justify-center racing font-bold"
                  >
                    {step}
                  </motion.div>
                  {step < 3 && (
                    <motion.div
                      animate={{
                        backgroundColor: currentStep > step ? "#e97f33" : "#e5e7eb",
                      }}
                      className="w-16 h-1 mx-4"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm openSans text-gray-600">
              <span>Services</span>
              <span>Details</span>
              <span>Calculate</span>
            </div>
          </div>

          {/* Form Container */}
          <motion.div
            ref={formRef}
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {/* Step 1: Services Selection */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl lg:text-3xl racing font-bold mb-8">What services do you need?</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {services.map((service) => (
                      <motion.div
                        key={service.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleService(service.id)}
                        className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                          selectedServices.includes(service.id)
                            ? "border-[#e97f33] bg-[#e97f33]/10"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center mb-4">
                          <i
                            className={`bx ${service.icon} text-2xl ${
                              selectedServices.includes(service.id) ? "text-[#e97f33]" : "text-gray-600"
                            }`}
                          ></i>
                          <div className="ml-4">
                            <h4 className="racing font-bold text-gray-900">{service.name}</h4>
                            <p className="text-sm text-gray-600 openSans">From ${service.price.toLocaleString()}</p>
                          </div>
                        </div>
                        {selectedServices.includes(service.id) && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 bg-[#e97f33] rounded-full flex items-center justify-center ml-auto"
                          >
                            <i className="bx bx-check text-black text-sm"></i>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Budget & Timeline */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl lg:text-3xl racing font-bold mb-8">Project Details</h3>

                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Budget Range */}
                    <div>
                      <label className="block text-lg racing font-bold mb-4">Budget Range</label>
                      <div className="space-y-3">
                        {budgetRanges.map((budget) => (
                          <motion.label
                            key={budget.value}
                            whileHover={{ scale: 1.02 }}
                            className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              budgetRange === budget.value
                                ? "border-[#e97f33] bg-[#e97f33]/10"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name="budget"
                              value={budget.value}
                              checked={budgetRange === budget.value}
                              onChange={(e) => setBudgetRange(e.target.value)}
                              className="sr-only"
                            />
                            <div
                              className={`w-5 h-5 rounded-full border-2 mr-3 ${
                                budgetRange === budget.value ? "border-[#e97f33] bg-[#e97f33]" : "border-gray-300"
                              }`}
                            >
                              {budgetRange === budget.value && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-full h-full rounded-full bg-[#e97f33] flex items-center justify-center"
                                >
                                  <div className="w-2 h-2 bg-black rounded-full"></div>
                                </motion.div>
                              )}
                            </div>
                            <span className="openSans font-medium">{budget.label}</span>
                          </motion.label>
                        ))}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block text-lg racing font-bold mb-4">Timeline</label>
                      <div className="space-y-3">
                        {timelines.map((time) => (
                          <motion.label
                            key={time.value}
                            whileHover={{ scale: 1.02 }}
                            className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              timeline === time.value
                                ? "border-[#e97f33] bg-[#e97f33]/10"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name="timeline"
                              value={time.value}
                              checked={timeline === time.value}
                              onChange={(e) => setTimeline(e.target.value)}
                              className="sr-only"
                            />
                            <div
                              className={`w-5 h-5 rounded-full border-2 mr-3 ${
                                timeline === time.value ? "border-[#e97f33] bg-[#e97f33]" : "border-gray-300"
                              }`}
                            >
                              {timeline === time.value && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-full h-full rounded-full bg-[#e97f33] flex items-center justify-center"
                                >
                                  <div className="w-2 h-2 bg-black rounded-full"></div>
                                </motion.div>
                              )}
                            </div>
                            <span className="openSans font-medium">{time.label}</span>
                          </motion.label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Ongoing Support */}
                  <motion.label
                    whileHover={{ scale: 1.01 }}
                    className={`flex items-center p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      ongoingSupport ? "border-[#e97f33] bg-[#e97f33]/10" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={ongoingSupport}
                      onChange={(e) => setOngoingSupport(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`w-6 h-6 rounded border-2 mr-4 flex items-center justify-center ${
                        ongoingSupport ? "border-[#e97f33] bg-[#e97f33]" : "border-gray-300"
                      }`}
                    >
                      {ongoingSupport && (
                        <motion.i
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="bx bx-check text-black text-lg"
                        ></motion.i>
                      )}
                    </div>
                    <div>
                      <span className="racing font-bold text-lg">Need ongoing support?</span>
                      <p className="text-gray-600 openSans text-sm">
                        Includes maintenance, updates, and priority support
                      </p>
                    </div>
                  </motion.label>
                </motion.div>
              )}

              {/* Step 3: Calculate */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <h3 className="text-2xl lg:text-3xl racing font-bold mb-8">Ready for Your Estimate?</h3>

                  {/* Summary */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
                    <h4 className="racing font-bold text-lg mb-4">Project Summary:</h4>
                    <div className="space-y-2 openSans">
                      <p>
                        <strong>Services:</strong> {selectedServices.length} selected
                      </p>
                      <p>
                        <strong>Budget:</strong>{" "}
                        {budgetRanges.find((b) => b.value === budgetRange)?.label || "Not selected"}
                      </p>
                      <p>
                        <strong>Timeline:</strong>{" "}
                        {timelines.find((t) => t.value === timeline)?.label || "Not selected"}
                      </p>
                      <p>
                        <strong>Ongoing Support:</strong> {ongoingSupport ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>

                  {!showEstimate ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={calculateEstimate}
                      className="px-12 py-6 bg-[#e97f33] text-black rounded-2xl hover:bg-[#f0883e] transition-all duration-300 racing font-bold text-xl shadow-lg"
                    >
                      Calculate My Estimate
                      <i className="bx bx-calculator ml-3 text-2xl"></i>
                    </motion.button>
                  ) : (
                    <motion.div
                      ref={resultRef}
                      className="bg-gradient-to-br from-[#e97f33] to-[#f0883e] rounded-3xl p-8 text-black"
                    >
                      <h4 className="racing font-bold text-2xl mb-4">Your Estimated Quote</h4>
                      <div className="text-5xl lg:text-6xl racing font-bold mb-4">
                        ${estimatedQuote.toLocaleString()}
                      </div>
                      <p className="openSans text-lg mb-6">
                        This is a preliminary estimate. Final pricing may vary based on specific requirements.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 racing font-bold"
                      >
                        Get Detailed Quote
                        <i className="bx bx-arrow-right ml-2"></i>
                      </motion.button>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {!showEstimate && (
              <div className="flex justify-between mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-xl hover:border-gray-400 transition-all duration-300 racing font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <i className="bx bx-arrow-left mr-2"></i>
                  Previous
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextStep}
                  disabled={currentStep === 3}
                  className="px-6 py-3 bg-[#e97f33] text-black rounded-xl hover:bg-[#f0883e] transition-all duration-300 racing font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <i className="bx bx-arrow-right ml-2"></i>
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default QuoteCalculator
