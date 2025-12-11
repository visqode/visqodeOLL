"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EmailService from "@/lib/emailjs";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    services: [],
    budget: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });
  const [validationErrors, setValidationErrors] = useState([]);

  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const emailService = useRef(new EmailService());

  const services = [
    {
      id: "web-dev",
      name: "Web Development",
      icon: "bx-code-alt",
      description: "Custom websites & web applications",
    },
    {
      id: "branding",
      name: "Brand Identity",
      icon: "bx-palette",
      description: "Logo design & brand guidelines",
    },
    {
      id: "ui-ux",
      name: "UI/UX Design",
      icon: "bx-brush",
      description: "User interface & experience design",
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: "bx-store",
      description: "Online stores & marketplaces",
    },
    {
      id: "mobile",
      name: "Mobile App",
      icon: "bx-mobile",
      description: "iOS & Android applications",
    },
    {
      id: "consulting",
      name: "Digital Consulting",
      icon: "bx-bulb",
      description: "Strategy & technical guidance",
    },
    {
      id: "marketing",
      name: "Digital Marketing",
      icon: "bx-trending-up",
      description: "SEO, social media & campaigns",
    },
    {
      id: "maintenance",
      name: "Maintenance & Support",
      icon: "bx-wrench",
      description: "Ongoing support & updates",
    },
  ];

  const budgetRanges = [
    {
      value: "1000-5000",
      label: "$1,000 - $5,000",
      description: "Small projects & startups",
    },
    {
      value: "5000-10000",
      label: "$5,000 - $10,000",
      description: "Medium business solutions",
    },
    {
      value: "10000-25000",
      label: "$10,000 - $25,000",
      description: "Comprehensive platforms",
    },
    {
      value: "25000-50000",
      label: "$25,000 - $50,000",
      description: "Enterprise solutions",
    },
    { value: "50000+", label: "$50,000+", description: "Large-scale projects" },
  ];

  // GSAP animation for section reveal
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
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
        }
      );
    }, sectionRef);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ctx.revert();
    };
  }, []);

  // Robust scroll-to-contact that accounts for sticky header height.
  const scrollToContact = (instant = false) => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const el = sectionRef.current;
    // try to measure a header nav if present
    const header = document.querySelector("nav");
    const headerHeight = header ? header.offsetHeight : 0;
    // extra offset so content isn't flush under header
    const extraOffset = 16;
    const offset = headerHeight + extraOffset;

    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;

    // Use smooth unless instant requested
    window.scrollTo({
      top: Math.max(0, Math.floor(top)),
      behavior: instant ? "auto" : "smooth",
    });
  };

  // If page loaded with #contact or hash changes -> scroll properly
  useEffect(() => {
    // initial load
    if (typeof window === "undefined") return;
    if (window.location.hash === "#contact") {
      // small timeout to let layout stabilize (images/fonts etc.)
      setTimeout(() => scrollToContact(false), 60);
    }

    // handle future hash changes (user clicking a link that sets hash)
    const onHash = () => {
      if (window.location.hash === "#contact") {
        // slight delay to allow SPA route content to mount
        setTimeout(() => scrollToContact(false), 40);
      }
    };
    window.addEventListener("hashchange", onHash);

    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationErrors.length > 0) setValidationErrors([]);
  };

  const handleServiceToggle = (serviceId) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((id) => id !== serviceId)
        : [...prev.services, serviceId],
    }));
    if (validationErrors.length > 0) setValidationErrors([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationErrors([]);
    setSubmitStatus({ success: false, message: "" });

    const validation = emailService.current.validateFormData(formData);
    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      if (formRef.current) {
        // scroll to form and offset for header
        formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        // small nudge for sticky header
        const header = document.querySelector("nav");
        if (header) window.scrollBy(0, -header.offsetHeight - 12);
      }
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await emailService.current.sendContactForm(formData);
      if (result.success) {
        setSubmitStatus({ success: true, message: result.message });
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({
            fullName: "",
            businessName: "",
            email: "",
            services: [],
            budget: "",
            description: "",
          });
        }, 800);
        setTimeout(() => {
          setIsSubmitted(false);
          setSubmitStatus({ success: false, message: "" });
        }, 10000);
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || "Failed to send. Try again later.",
        });
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setSubmitStatus({
        success: false,
        message:
          "An unexpected error occurred. Please try again or email visqode@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state UI (kept your markup mostly as-is)
  if (isSubmitted && submitStatus.success) {
    return (
      <section
        id="contact"
        ref={sectionRef}
        aria-label="Contact section"
        className="py-20 lg:py-32 bg-[var(--dark)] text-[var(--white)]"
        style={{ scrollMarginTop: "120px" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "back.out(1.7)" }}
            className="bg-gradient-to-br from-[#dc2828] to-[#b91c1c] rounded-3xl p-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <i className="bx bx-check text-[#dc2828] text-4xl"></i>
            </motion.div>

            <h3 className="text-3xl lg:text-4xl racing font-bold text-[#fffffd] mb-4">
              Message Sent Successfully!
            </h3>
            <p className="text-xl openSans text-gray-300 mb-6">
              {submitStatus.message}
            </p>

            <div className="bg-white/20 rounded-2xl p-6 mb-8">
              <h4 className="racing font-bold text-black mb-4">
                What happens next?
              </h4>
              <div className="grid sm:grid-cols-3 gap-4 text-sm openSans text-gray-300">
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
                  setIsSubmitted(false);
                  setSubmitStatus({ success: false, message: "" });
                }}
                className="px-8 py-4 bg-[#161616] text-[#fffffd] rounded-xl hover:bg-[#1a1a1a] transition-all duration-300 racing font-bold"
              >
                <i className="bx bx-arrow-left mr-2"></i>
                Send Another Message
              </motion.button>

              <motion.a
                href="tel:+15551234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#fffffd] text-[#fffffd] rounded-xl hover:bg-[#fffffd] hover:text-[#161616] transition-all duration-300 racing font-bold"
              >
                <i className="bx bx-phone mr-2"></i>
                Call Us Now
              </motion.a>
            </div>

            <p className="text-sm openSans text-gray-400 mt-6">
              Need immediate assistance? Email us at{" "}
              <a
                href="mailto:ibwmahin@gmail.com"
                className="underline font-semibold"
              >
                ibwmahin@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  // Default form UI - Updated to Dark Theme
  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-label="Contact section"
      className="py-20 lg:py-32 bg-[var(--dark)] text-[var(--white)]"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl racing font-bold text-[#fffffd] mb-6">
            Start Your Project
          </h2>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto openSans leading-relaxed">
            Ready to transform your digital presence? Tell us about your project
            and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info - Updated bg to slightly lighter dark for contrast */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl lg:text-3xl racing font-bold mb-6 text-[#fffffd]">
                Let's Talk
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#dc2828] rounded-full flex items-center justify-center mr-4">
                    <i className="bx bx-phone text-[#fffffd] text-xl"></i>
                  </div>
                  <div>
                    <p className="racing font-bold text-[#fffffd]">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="openSans text-gray-400 hover:text-[#dc2828] transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#dc2828] rounded-full flex items-center justify-center mr-4">
                    <i className="bx bx-envelope text-black text-xl"></i>
                  </div>
                  <div>
                    <p className="racing font-bold text-[#fffffd]">Email</p>
                    <a
                      href="mailto:visqode@gmail.com"
                      className="openSans text-gray-400 hover:text-[#dc2828] transition-colors"
                    >
                      visqode@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl lg:text-3xl racing font-bold mb-6 text-[#fffffd]">
                Get in Touch
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm racing font-bold text-[#fffffd] mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-white/10 rounded-xl bg-white/5 text-gray-400 focus:outline-none focus:border-[#dc2828] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="businessName"
                      className="block text-sm racing font-bold text-[#fffffd] mb-2"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-white/10 rounded-xl bg-white/5 text-gray-400 focus:outline-none focus:border-[#dc2828] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm racing font-bold text-[#fffffd] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-white/10 rounded-xl bg-white/5 text-gray-400 focus:outline-none focus:border-[#dc2828] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="services"
                      className="block text-sm racing font-bold text-[#fffffd] mb-2"
                    >
                      Services
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => (
                        <label
                          key={service.id}
                          className="flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id={service.id}
                            name="services"
                            value={service.id}
                            checked={formData.services.includes(service.id)}
                            onChange={() => handleServiceToggle(service.id)}
                            className="w-4 h-4 rounded border border-white/10 focus:ring-[#dc2828]"
                          />
                          <span className="text-gray-400 openSans">
                            {service.name}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm racing font-bold text-[#fffffd] mb-2"
                    >
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-white/10 rounded-xl bg-white/5 text-gray-400 focus:outline-none focus:border-[#dc2828] transition-colors"
                    >
                      <option value="">Select a budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm racing font-bold text-[#fffffd] mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-white/10 rounded-xl bg-white/5 text-gray-400 focus:outline-none focus:border-[#dc2828] transition-colors"
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-[#dc2828] text-[#fffffd] rounded-xl hover:bg-[#b91c1c] transition-all duration-300 racing font-bold"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
