'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EmailService from '@/lib/emailjs';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

/**
 * ContactForm — compact & polished UI using Remix Icon (ri-*)
 * - Light borders (white/10)
 * - Compact paddings, tight layout
 * - Service tiles with hover / checked states
 * - Inputs with focus ring
 * - GSAP reveal preserved
 */

const subtleBorder = 'rgba(255,255,255,0.10)';
const accent = '#dc2828';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    services: [],
    budget: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [validationErrors, setValidationErrors] = useState([]);

  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const emailService = useRef(new EmailService());

  const services = [
    {
      id: 'web-dev',
      name: 'Web Development',
      icon: 'ri-code-line',
      description: 'Custom websites & web apps',
    },
    {
      id: 'branding',
      name: 'Brand Identity',
      icon: 'ri-palette-line',
      description: 'Logo & brand systems',
    },
    {
      id: 'ui-ux',
      name: 'UI/UX Design',
      icon: 'ri-brush-line',
      description: 'Interfaces & experiences',
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      icon: 'ri-store-line',
      description: 'Online stores & marketplaces',
    },
    {
      id: 'mobile',
      name: 'Mobile App',
      icon: 'ri-smartphone-line',
      description: 'iOS & Android apps',
    },
    {
      id: 'consulting',
      name: 'Digital Consulting',
      icon: 'ri-lightbulb-line',
      description: 'Strategy & guidance',
    },
    {
      id: 'marketing',
      name: 'Digital Marketing',
      icon: 'ri-trending-up-line',
      description: 'SEO & campaigns',
    },
    {
      id: 'maintenance',
      name: 'Maintenance & Support',
      icon: 'ri-tools-line',
      description: 'Support & updates',
    },
  ];

  const budgetRanges = [
    { value: '1000-5000', label: '$1,000 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000-25000', label: '$10,000 - $25,000' },
    { value: '25000-50000', label: '$25,000 - $50,000' },
    { value: '50000+', label: '$50,000+' },
  ];

  // GSAP reveal
  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  // Scroll to contact helper (sticky header aware)
  const scrollToContact = (instant = false) => {
    if (typeof window === 'undefined' || !sectionRef.current) return;
    const el = sectionRef.current;
    const header = document.querySelector('nav');
    const headerHeight = header ? header.offsetHeight : 0;
    const extraOffset = 16;
    const top = el.getBoundingClientRect().top + window.pageYOffset - (headerHeight + extraOffset);
    window.scrollTo({ top: Math.max(0, Math.floor(top)), behavior: instant ? 'auto' : 'smooth' });
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.location.hash === '#contact') setTimeout(() => scrollToContact(false), 60);

    const onHash = () => {
      if (window.location.hash === '#contact') setTimeout(() => scrollToContact(false), 40);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (validationErrors.length) setValidationErrors([]);
  };

  const handleServiceToggle = (serviceId) => {
    setFormData((p) => ({
      ...p,
      services: p.services.includes(serviceId)
        ? p.services.filter((id) => id !== serviceId)
        : [...p.services, serviceId],
    }));
    if (validationErrors.length) setValidationErrors([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationErrors([]);
    setSubmitStatus({ success: false, message: '' });

    const validation = emailService.current.validateFormData(formData);
    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const header = document.querySelector('nav');
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
            fullName: '',
            businessName: '',
            email: '',
            services: [],
            budget: '',
            description: '',
          });
        }, 800);
        setTimeout(() => {
          setIsSubmitted(false);
          setSubmitStatus({ success: false, message: '' });
        }, 10000);
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || 'Failed to send. Try again later.',
        });
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus({
        success: false,
        message: 'Unexpected error. Try again or email visqode@gmail.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success UI
  if (isSubmitted && submitStatus.success) {
    return (
      <section
        id="contact"
        ref={sectionRef}
        aria-label="Contact section"
        className="py-20 lg:py-32 bg-[#070707] text-[var(--white)] relative overflow-hidden"
        style={{ scrollMarginTop: '120px' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: 'back.out(1.2)' }}
            className="bg-gradient-to-br from-[#dc2828] to-[#b91c1c] rounded-2xl p-8 md:p-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
              className="w-16 h-16 rounded-lg bg-white flex items-center justify-center mx-auto mb-4"
            >
              <i className="ri-checkbox-circle-line text-[#dc2828] text-2xl" />
            </motion.div>

            <h3 className="text-2xl md:text-3xl racing font-bold text-white text-center mb-2">
              Message Sent
            </h3>
            <p className="text-sm md:text-base text-white/90 text-center mb-6">
              {submitStatus.message}
            </p>

            <div className="bg-white/10 rounded-xl p-4 mb-6">
              <h4 className="text-sm font-semibold text-white mb-3">What happens next</h4>
              <div className="grid grid-cols-3 gap-3 text-xs text-white/80">
                <div className="flex flex-col items-center">
                  <i className="ri-time-line text-xl mb-2 text-[#dc2828]" />
                  <span className="font-semibold">Within 2 hours</span>
                  <span className="text-white/70">Email confirmation</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="ri-phone-line text-xl mb-2 text-[#dc2828]" />
                  <span className="font-semibold">Within 24 hours</span>
                  <span className="text-white/70">Personal response</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="ri-calendar-line text-xl mb-2 text-[#dc2828]" />
                  <span className="font-semibold">Within 48 hours</span>
                  <span className="text-white/70">Project discussion</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setIsSubmitted(false);
                  setSubmitStatus({ success: false, message: '' });
                }}
                className="px-6 py-3 bg-[#0f0f0f] text-white rounded-lg hover:bg-[#161616] transition"
              >
                <i className="ri-arrow-left-line mr-2" /> Send another
              </motion.button>

              <motion.a
                href="tel:+15551234567"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white hover:text-[#0f0f0f] transition flex items-center justify-center"
              >
                <i className="ri-phone-line mr-2" /> Call us
              </motion.a>
            </div>

            <p className="text-xs text-white/70 text-center mt-4">
              Need immediate assistance?{' '}
              <a className="underline" href="mailto:ibwmahin@gmail.com">
                ibwmahin@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  // Default form UI
  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-label="Contact section"
      className="py-20 lg:py-32 text-[var(--white)] relative overflow-hidden"
      style={{ scrollMarginTop: '120px' }}
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(220,40,40,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(220,40,40,0.45) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#dc2828]/6 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#dc2828]/6 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#dc2828]/12 border"
            style={{ borderColor: 'rgba(220,40,40,0.12)' }}
          >
            <span className="w-1.5 h-1.5 bg-[#dc2828] rounded-sm animate-pulse" />
            <span className="text-xs text-[#dc2828] font-medium tracking-wide">READY TO START</span>
          </div>

          <h2 className="text-3xl lg:text-4xl racing font-bold text-white mt-4 mb-3">
            Launch your vision
          </h2>
          <p className="text-sm lg:text-base text-white/70 max-w-2xl mx-auto openSans">
            Tell us about your project — we’ll get back with a clear plan and transparent estimate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 lg:sticky lg:top-8"
          >
            <div
              className="bg-[#0f0f0f] rounded-xl p-5 border"
              style={{ borderColor: subtleBorder }}
            >
              <h3 className="text-lg font-bold racing mb-4">Let's connect</h3>

              <div className="space-y-4 mb-4">
                <div className="flex items-center">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                    style={{
                      background: 'rgba(220,40,40,0.06)',
                      border: `1px solid rgba(220,40,40,0.12)`,
                    }}
                  >
                    <i className="ri-phone-line text-[#dc2828]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Phone</div>
                    <a
                      href="tel:+15551234567"
                      className="text-sm text-white/70 hover:text-[#dc2828]"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                    style={{
                      background: 'rgba(220,40,40,0.06)',
                      border: `1px solid rgba(220,40,40,0.12)`,
                    }}
                  >
                    <i className="ri-mail-line text-[#dc2828]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Email</div>
                    <a
                      href="mailto:visqode@gmail.com"
                      className="text-sm text-white/70 hover:text-[#dc2828]"
                    >
                      visqode@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="grid grid-cols-2 gap-3 pt-4 border-t"
                style={{ borderColor: 'rgba(255,255,255,0.04)' }}
              >
                <div className="text-center">
                  <div className="text-xl font-bold text-[#dc2828]">24h</div>
                  <div className="text-xs text-white/60">Response time</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-[#dc2828]">100+</div>
                  <div className="text-xs text-white/60">Projects done</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div
              className="bg-[#0f0f0f] rounded-xl p-5 border"
              style={{ borderColor: subtleBorder }}
            >
              <h3 className="text-lg font-bold racing mb-4">Project details</h3>

              {validationErrors.length > 0 && (
                <div className="bg-[#3b0b0b]/50 text-sm text-red-300 p-3 rounded-md mb-4">
                  <strong className="block text-white text-sm mb-1">
                    Please fix the following:
                  </strong>
                  <ul className="list-disc ml-5 space-y-1">
                    {validationErrors.map((err, i) => (
                      <li key={i}>{err}</li>
                    ))}
                  </ul>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-white/80 mb-2"
                    >
                      Full name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-3 py-2 rounded-lg bg-transparent border"
                      style={{ borderColor: subtleBorder }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="businessName"
                      className="block text-xs font-semibold text-white/80 mb-2"
                    >
                      Business name
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your Company"
                      className="w-full px-3 py-2 rounded-lg bg-transparent border"
                      style={{ borderColor: subtleBorder }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-white/80 mb-2">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 rounded-lg bg-transparent border"
                    style={{ borderColor: subtleBorder }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-2">
                      Services
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {services.slice(0, 4).map((s) => {
                        const checked = formData.services.includes(s.id);
                        return (
                          <motion.label
                            key={s.id}
                            whileHover={{ y: -3 }}
                            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer border transition`}
                            style={{
                              borderColor: checked ? `${accent}33` : subtleBorder,
                              background: checked ? `${accent}10` : 'transparent',
                            }}
                          >
                            <input
                              type="checkbox"
                              className="w-4 h-4"
                              checked={checked}
                              onChange={() => handleServiceToggle(s.id)}
                            />
                            <i className={`${s.icon} text-[#dc2828]`} />
                            <span className="text-xs text-white/80">{s.name}</span>
                          </motion.label>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-semibold text-white/80 mb-2"
                    >
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 rounded-lg bg-transparent border"
                      style={{ borderColor: subtleBorder }}
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((b) => (
                        <option key={b.value} value={b.value}>
                          {b.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-xs font-semibold text-white/80 mb-2"
                  >
                    Project description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-3 py-2 rounded-lg bg-transparent border"
                    style={{ borderColor: subtleBorder }}
                  />
                </div>

                <div className="flex justify-end">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="px-5 py-2 bg-[#dc2828] text-black rounded-lg font-semibold flex items-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded animate-spin inline-block" />
                    ) : (
                      <i className="ri-rocket-line" />
                    )}
                    <span className="text-sm">
                      {isSubmitting ? 'Sending...' : 'Launch Project'}
                    </span>
                  </motion.button>
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
