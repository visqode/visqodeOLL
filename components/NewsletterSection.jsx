'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * NewsletterSection — Remix Icon + robust fallback for "Industry insights"
 * - Detects whether remixicon font loaded; if not, uses small inline SVG fallback for the
 *   "Industry insights" icon (the one that failed for you).
 * - Keeps the compact, minimal polished UI and light borders (white/10).
 */

const TrendingUpSVG = ({ className = '' }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 17l6-6 4 4 8-8"
      stroke="black"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 21v-4h-4"
      stroke="black"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [remixLoaded, setRemixLoaded] = useState(true); // optimistic default true
  const sectionRef = useRef(null);

  // detect whether the remixicon font/css is actually applied
  useEffect(() => {
    // run only in browser
    if (typeof window === 'undefined') return;

    const el = document.createElement('i');
    el.className = 'ri-user-line'; // harmless test class (should exist in remix)
    el.style.position = 'absolute';
    el.style.opacity = '0';
    el.style.pointerEvents = 'none';
    el.style.width = '1px';
    el.style.height = '1px';
    el.style.overflow = 'hidden';
    document.body.appendChild(el);

    // allow computed style to be available in next frame
    requestAnimationFrame(() => {
      try {
        const cs = window.getComputedStyle(el);
        const ff = (cs && cs.fontFamily) || '';
        // check if computed fontFamily contains "remix" (case-insensitive)
        const loaded = /remix/i.test(ff);
        // if fontFamily isn't set to remix but still not 'inherit' it's possible the font loaded under another name.
        // Do a fallback heuristic: if fontFamily is not empty and not 'inherit' treat as loaded.
        const fallbackLoaded = ff && ff !== 'inherit' && ff !== 'initial';
        setRemixLoaded(Boolean(loaded || fallbackLoaded));
      } catch (e) {
        setRemixLoaded(false);
      } finally {
        document.body.removeChild(el);
      }
    });
  }, []);

  // GSAP reveal for the section
  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);

    // simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 2800);
    }, 850);
  };

  // compact labels
  const benefits = [
    { icon: 'ri-lightbulb-line', label: 'Weekly tips' },
    { icon: 'ri-rocket-line', label: 'Early access' },
    { icon: 'ri-gift-line', label: 'Exclusive resources' },
    // Use Remix class for trending. If remix icon font isn't available we will show inline SVG instead.
    { icon: 'ri-trending-up-line', label: 'Industry insights', fallback: true },
  ];

  // subtle border color (white/10)
  const subtleBorder = 'rgba(255,255,255,0.10)';

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 relative overflow-hidden"
      aria-labelledby="newsletter-heading"
    >
      {/* soft radial highlight behind content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(600px 320px at 8% 8%, rgba(220,40,40,0.05), transparent 12%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <h2
              id="newsletter-heading"
              className="text-3xl lg:text-4xl racing font-bold text-white"
            >
              Stay Ahead with VisQode
            </h2>
            <p className="text-sm lg:text-base text-gray-300 max-w-2xl mx-auto mt-3 openSans leading-relaxed">
              Get short actionable tips, early access, and exclusive templates. Trusted by
              thousands.
            </p>
          </motion.div>

          {/* Compact benefits */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
          >
            {benefits.map((b, idx) => (
              <motion.div
                key={b.icon}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center text-center p-3 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid ${subtleBorder}`,
                  backdropFilter: 'blur(6px)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-2"
                  style={{ background: 'rgba(220,40,40,0.95)' }}
                  aria-hidden
                >
                  {/* If this benefit has fallback:true and remix icon font is unavailable -> render inline SVG */}
                  {b.fallback && !remixLoaded ? (
                    <TrendingUpSVG />
                  ) : (
                    <i className={`${b.icon} text-black text-lg`} />
                  )}
                </div>
                <p className="text-xs text-white openSans font-medium leading-tight">{b.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Form (compact) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="max-w-xl mx-auto"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  onSubmit={handleSubmit}
                  className="flex gap-3 items-center p-1 rounded-lg"
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>

                  <div
                    className="flex-1 rounded-md flex items-center"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: `1px solid ${subtleBorder}`,
                      backdropFilter: 'blur(6px)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)',
                    }}
                  >
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      required
                      className="w-full px-4 py-2 bg-transparent text-white placeholder-gray-400 border-none outline-none openSans text-sm"
                      aria-label="Email address"
                      style={{ caretColor: '#dc2828' }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.03 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    className="px-4 py-2 bg-[#dc2828] text-black rounded-md transition-all duration-150 text-sm font-semibold min-w-[110px] flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    aria-disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded animate-spin block" />
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Subscribe</span>
                        {/* arrow uses remix; if remix missing it will render blank; arrow is small and non-critical */}
                        {remixLoaded ? <i className="ri-arrow-right-line text-base" /> : null}
                      </span>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="p-3 rounded-md"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(220,40,40,0.10), rgba(220,40,40,0.05))',
                    border: '1px solid rgba(220,40,40,0.18)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center bg-[#dc2828]">
                      {remixLoaded ? (
                        <i className="ri-check-line text-black text-lg" />
                      ) : (
                        <i className="ri-check-line text-black text-lg" />
                      )}
                      {/* check is likely fine either way; kept simple */}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-white racing">You're subscribed</p>
                      <p className="text-xs text-gray-300 openSans">
                        Check your inbox for the welcome email.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-xs text-gray-400 openSans mt-3 text-center">
              No spam — unsubscribe anytime. By subscribing you agree to our{' '}
              <a href="#" className="text-[#dc2828] hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </motion.div>

          {/* Compact social proof */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400 text-xs"
            aria-hidden
          >
            <div className="flex items-center gap-2">
              <i className="ri-user-line text-[#dc2828]" />
              <span className="openSans">5,000+ subscribers</span>
            </div>

            <div className="flex items-center gap-2">
              <i className="ri-star-line text-[#dc2828]" />
              <span className="openSans">4.9/5 rating</span>
            </div>

            <div className="flex items-center gap-2">
              <i className="ri-shield-check-line text-[#dc2828]" />
              <span className="openSans">GDPR compliant</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
