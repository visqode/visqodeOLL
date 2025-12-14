'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EmailService from '@/lib/emailjs';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const subtleBorder = 'var(--border-subtle)';
const accent = 'var(--primary)';

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
    { id: 'web-dev', name: 'Web Dev', icon: 'ri-code-line' },
    { id: 'branding', name: 'Branding', icon: 'ri-palette-line' },
    { id: 'ui-ux', name: 'UI/UX', icon: 'ri-brush-line' },
    { id: 'marketing', name: 'Marketing', icon: 'ri-trending-up-line' },
  ];

  const budgetRanges = [
    { value: '1k-5k', label: '$1k - $5k' },
    { value: '5k-10k', label: '$5k - $10k' },
    { value: '10k-25k', label: '$10k - $25k' },
    { value: '25k+', label: '$25k+' },
  ];

  // GSAP reveal
  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
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
          setIsSubmitted(false);
          setSubmitStatus({ success: false, message: '' });
        }, 5000);
      } else {
        setSubmitStatus({ success: false, message: result.message || 'Failed to send.' });
      }
    } catch (err) {
      setSubmitStatus({ success: false, message: 'Unexpected error.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted && submitStatus.success) {
    return (
      <section
        id="contact"
        ref={sectionRef}
        className="py-20 flex items-center justify-center min-h-[500px]"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-12 text-center max-w-lg"
        >
          <div className="w-16 h-16 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-check-line text-3xl"></i>
          </div>
          <h3 className="text-2xl racing font-bold text-[var(--text-primary)] mb-2">
            Message Sent
          </h3>
          <p className="text-[var(--text-secondary)] mb-6">
            We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-[var(--primary)] hover:underline text-sm font-medium"
          >
            Send another message
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl racing font-bold text-[var(--text-primary)] mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto openSans">
            Ready to start? Fill out the form below and we'll be in touch shortly.
          </p>
        </div>

        <div className="bg-[var(--bg-card)]/50 backdrop-blur-sm border border-[var(--border-subtle)] rounded-2xl p-6 md:p-10 shadow-2xl">
          {validationErrors.length > 0 && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-200 text-sm">
              Please check the form for errors.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-[var(--text-muted)] mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition outline-none placeholder:text-[var(--text-muted)]/50"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text-muted)] mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition outline-none placeholder:text-[var(--text-muted)]/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] mb-2 uppercase tracking-wider">
                Project Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {services.map((s) => {
                  const isActive = formData.services.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => handleServiceToggle(s.id)}
                      className={`flex items-center justify-center gap-2 p-3 rounded-lg border text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-[var(--primary)] border-[var(--primary)] text-white'
                          : 'bg-[var(--bg-body)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--text-muted)]'
                      }`}
                    >
                      <i className={s.icon}></i>
                      {s.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-[var(--text-muted)] mb-2 uppercase tracking-wider">
                  Budget Estimate
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition outline-none appearance-none"
                >
                  <option value="">Select Range</option>
                  {budgetRanges.map((b) => (
                    <option key={b.value} value={b.value}>
                      {b.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text-muted)] mb-2 uppercase tracking-wider">
                  Business Name (Optional)
                </label>
                <input
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Company Ltd."
                  className="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition outline-none placeholder:text-[var(--text-muted)]/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] mb-2 uppercase tracking-wider">
                Project Details
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Tell us about your goals..."
                className="w-full bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition outline-none resize-none placeholder:text-[var(--text-muted)]/50"
              />
            </div>

            <div className="flex justify-end pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="px-8 py-4 bg-[var(--primary)] text-white rounded-full font-bold racing hover:bg-[var(--primary-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[var(--primary)]/20"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
