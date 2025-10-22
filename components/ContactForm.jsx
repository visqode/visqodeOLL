"use client"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import EmailService from "@/lib/emailjs"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    services: [],
    budget: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: "" })
  const [validationErrors, setValidationErrors] = useState([])

  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const emailService = useRef(new EmailService())

  const services = [
    { id: "web-dev", name: "Web Development", icon: "bx-code-alt", description: "Custom websites & web applications" },
    { id: "branding", name: "Brand Identity", icon: "bx-palette", description: "Logo design & brand guidelines" },
    { id: "ui-ux", name: "UI/UX Design", icon: "bx-brush", description: "User interface & experience design" },
    { id: "ecommerce", name: "E-commerce", icon: "bx-store", description: "Online stores & marketplaces" },
    { id: "mobile", name: "Mobile App", icon: "bx-mobile", description: "iOS & Android applications" },
    { id: "consulting", name: "Digital Consulting", icon: "bx-bulb", description: "Strategy & technical guidance" },
    {
      id: "marketing",
      name: "Digital Marketing",
      icon: "bx-trending-up",
      description: "SEO, social media & campaigns",
    },
    { id: "maintenance", name: "Maintenance & Support", icon: "bx-wrench", description: "Ongoing support & updates" },
  ]

  const budgetRanges = [
    { value: "1000-5000", label: "$1,000 - $5,000", description: "Small projects & startups" },
    { value: "5000-10000", label: "$5,000 - $10,000", description: "Medium business solutions" },
    { value: "10000-25000", label: "$10,000 - $25,000", description: "Comprehensive platforms" },
    { value: "25000-50000", label: "$25,000 - $50,000", description: "Enterprise solutions" },
    { value: "50000+", label: "$50,000+", description: "Large-scale projects" },
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear validation errors when user starts typing
    if (validationErrors.length > 0) {
      setValidationErrors([])
    }
  }

  const handleServiceToggle = (serviceId) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((id) => id !== serviceId)
        : [...prev.services, serviceId],
    }))

    // Clear validation errors
    if (validationErrors.length > 0) {
      setValidationErrors([])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Clear previous errors
    setValidationErrors([])
    setSubmitStatus({ success: false, message: "" })

    // Validate form data
    const validation = emailService.current.validateFormData(formData)

    if (!validation.isValid) {
      setValidationErrors(validation.errors)
      // Scroll to first error
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      return
    }

    setIsSubmitting(true)

    try {
      // Send email via EmailJS
      const result = await emailService.current.sendContactForm(formData)

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: result.message,
        })
        setIsSubmitted(true)

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            fullName: "",
            businessName: "",
            email: "",
            services: [],
            budget: "",
            description: "",
          })
        }, 1000)

        // Auto-hide success message after 10 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setSubmitStatus({ success: false, message: "" })
        }, 10000)
      } else {
        setSubmitStatus({
          success: false,
          message: result.message,
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus({
        success: false,
        message: "An unexpected error occurred. Please try again or contact us directly at visqode@gmail.com",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Success State Component
  if (isSubmitted && submitStatus.success) {
    return (
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "back.out(1.7)" }}
            className="bg-gradient-to-br from-[#a7ff59] to-[#8fee3f] rounded-3xl p-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <i className="bx bx-check text-[#a7ff59] text-4xl"></i>
            </motion.div>

            <h3 className="text-3xl lg:text-4xl racing font-bold text-black mb-4">Message Sent Successfully!</h3>
            <p className="text-xl openSans text-black/80 mb-6">{submitStatus.message}</p>

            <div className="bg-white/20 rounded-2xl p-6 mb-8">
              <h4 className="racing font-bold text-black mb-4">What happens next?</h4>
              <div className="grid sm:grid-cols-3 gap-4 text-sm openSans text-black/80">
                <div className="flex flex-col items-center">
                  <i className="bx bx-time-five text-2xl mb-2"></i>
                  <span className="font-semibold">Within 2 hours</span>
                  <span>Email confirmation</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="bx bx-phone text-2xl mb-2"></i>
                  <span className="font-semibold">Within 24 hours</span>
                  <span>Personal response</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="bx bx-calendar text-2xl mb-2"></i>
                  <span className="font-semibold">Within 48 hours</span>
                  <span>Project discussion</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsSubmitted(false)
                  setSubmitStatus({ success: false, message: "" })
                }}
                className="px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 racing font-bold"
              >
                <i className="bx bx-arrow-left mr-2"></i>
                Send Another Message
              </motion.button>

              <motion.a
                href="tel:+15551234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-black text-black rounded-xl hover:bg-black hover:text-white transition-all duration-300 racing font-bold"
              >
                <i className="bx bx-phone mr-2"></i>
                Call Us Now
              </motion.a>
            </div>

            <p className="text-sm openSans text-black/60 mt-6">
              Need immediate assistance? Email us at{" "}
              <a href="mailto:ibwmahin@gmail.com" className="underline font-semibold">
                ibwmahin@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl racing font-bold text-gray-900 mb-6">Start Your Project</h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto openSans leading-relaxed">
            Ready to transform your digital presence? Tell us about your project and let's create something amazing
            together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl lg:text-3xl racing font-bold mb-6">Let's Talk</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#a7ff59] rounded-full flex items-center justify-center mr-4">
                    <i className="bx bx-phone text-black text-xl"></i>
                  </div>
                  <div>
                    <p className="racing font-bold">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="openSans text-gray-600 hover:text-[#a7ff59] transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#a7ff59] rounded-full flex items-center justify-center mr-4">
                    <i className="bx bx-envelope text-black text-xl"></i>
                  </div>
                  <div>
                    <p className="racing font-bold">Email</p>
                    <a
                      href="mailto:visqode@gmail.com"
                      className="openSans text-gray-600 hover:text-[#a7ff59] transition-colors"
                    >
                      visqode@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#a7ff59] rounded-full flex items-center justify-center mr-4">
                    <i className="bx bx-time text-black text-xl"></i>
                  </div>
                  <div>
                    <p className="racing font-bold">Response Time</p>
                    <p className="openSans text-gray-600">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <i className="bx bx-error text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="racing font-bold">Urgent Matters</p>
                    <a
                      href="mailto:ibwmahin@gmail.com"
                      className="openSans text-gray-600 hover:text-red-500 transition-colors"
                    >
                      ibwmahin@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <motion.a
                href="tel:+15551234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-[#a7ff59] text-black rounded-xl hover:bg-[#8fee3f] transition-all duration-300 racing font-bold text-lg flex items-center justify-center"
              >
                <i className="bx bx-phone mr-2"></i>
                Call Us Now
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Validation Errors */}
            {validationErrors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6"
              >
                <div className="flex items-center mb-2">
                  <i className="bx bx-error-circle text-red-500 text-xl mr-2"></i>
                  <h4 className="racing font-bold text-red-800">Please fix the following errors:</h4>
                </div>
                <ul className="list-disc list-inside openSans text-sm text-red-700 space-y-1">
                  {validationErrors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Submit Status Message */}
            {submitStatus.message && !submitStatus.success && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6"
              >
                <div className="flex items-center">
                  <i className="bx bx-error-circle text-red-500 text-xl mr-2"></i>
                  <p className="openSans text-red-800">{submitStatus.message}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Info */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg racing font-bold mb-3">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#a7ff59] focus:outline-none transition-all duration-300 openSans"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-lg racing font-bold mb-3">Business/Brand Name</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#a7ff59] focus:outline-none transition-all duration-300 openSans"
                    placeholder="Your business name (optional)"
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg racing font-bold mb-3">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#a7ff59] focus:outline-none transition-all duration-300 openSans"
                  placeholder="your@email.com"
                />
              </div>

              {/* Services Selection */}
              <div>
                <label className="block text-lg racing font-bold mb-4">What services are you interested in? *</label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <motion.label
                      key={service.id}
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        formData.services.includes(service.id)
                          ? "border-[#a7ff59] bg-[#a7ff59]/10"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          formData.services.includes(service.id) ? "border-[#a7ff59] bg-[#a7ff59]" : "border-gray-300"
                        }`}
                      >
                        {formData.services.includes(service.id) && (
                          <motion.i
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="bx bx-check text-black text-sm"
                          ></motion.i>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <i
                            className={`bx ${service.icon} text-lg mr-2 ${
                              formData.services.includes(service.id) ? "text-[#a7ff59]" : "text-gray-600"
                            }`}
                          ></i>
                          <span className="openSans font-medium">{service.name}</span>
                        </div>
                        <p className="text-xs text-gray-500 openSans">{service.description}</p>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-lg racing font-bold mb-4">Budget Range *</label>
                <div className="space-y-3">
                  {budgetRanges.map((budget) => (
                    <motion.label
                      key={budget.value}
                      whileHover={{ scale: 1.01 }}
                      className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        formData.budget === budget.value
                          ? "border-[#a7ff59] bg-[#a7ff59]/10"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={budget.value}
                        checked={formData.budget === budget.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                          formData.budget === budget.value ? "border-[#a7ff59] bg-[#a7ff59]" : "border-gray-300"
                        }`}
                      >
                        {formData.budget === budget.value && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-black rounded-full"
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <span className="openSans font-medium block">{budget.label}</span>
                        <span className="text-xs text-gray-500 openSans">{budget.description}</span>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-lg racing font-bold mb-3">Project Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#a7ff59] focus:outline-none transition-all duration-300 openSans resize-none"
                  placeholder="Tell us about your project goals, target audience, timeline, and any specific requirements..."
                />
                <p className="text-sm text-gray-500 openSans mt-2">
                  Minimum 10 characters • {formData.description.length}/500
                </p>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full py-6 bg-[#a7ff59] text-black rounded-xl hover:bg-[#8fee3f] transition-all duration-300 racing font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-6 h-6 border-2 border-black border-t-transparent rounded-full mr-3"
                    />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Project Details
                    <i className="bx bx-send ml-3 text-2xl"></i>
                  </>
                )}
              </motion.button>

              {/* Privacy Notice */}
              <p className="text-sm text-gray-500 openSans text-center">
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-[#a7ff59] hover:underline">
                  Privacy Policy
                </a>
                . We'll never share your information with third parties.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
