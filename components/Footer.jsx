/**
 * @file Footer.jsx
 * @description Site-wide footer component.
 * Contains navigation links, social media icons, and newsletter signup.
 */

'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Footer Component
 * @returns {JSX.Element} Footer section with links and branding
 */
const Footer = () => {
  const socialIcons = [
    { icon: 'github-fill', url: '#' },
    { icon: 'linkedin-fill', url: '#' },
    { icon: 'twitter-x-fill', url: '#' },
    { icon: 'instagram-fill', url: '#' },
  ];

  return (
    <footer className="w-full px-4 py-8 md:py-12 mt-auto">
      <motion.div
        className="max-w-7xl mx-auto bg-[var(--bg-card)] rounded-3xl p-8 md:p-16 border border-[var(--border-subtle)] relative overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] racing mb-6 leading-[0.9]">
              READY TO <span className="text-[var(--primary)]">SCALE?</span>
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] openSans max-w-xl">
              Partner with a team that blends creative innovation with technical precision.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-[var(--primary)] rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-[var(--primary)] rounded-full flex flex-col items-center justify-center text-white font-bold racing text-lg md:text-xl shadow-xl transition-transform duration-300 border-4 border-[var(--bg-card)]">
                <span>LET'S TALK</span>
                <i className="ri-arrow-right-up-line text-2xl mt-1 group-hover:rotate-45 transition-transform duration-300"></i>
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-[var(--border-subtle)] pt-12">
          <div className="space-y-6">
            <Link href="/" className="block">
              <span className="text-2xl font-bold racing text-[var(--text-primary)]">VisQode</span>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed openSans max-w-xs">
              Empowering businesses through cutting-edge digital solutions and strategic design.
            </p>
            <div className="flex space-x-3">
              {socialIcons.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.url}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-[var(--bg-darker)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300"
                >
                  <i className={`ri-${item.icon} text-lg`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-6 racing tracking-wider uppercase">
              Services
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services/development"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] openSans transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/brand-building"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] openSans transition-colors"
                >
                  Brand Building
                </Link>
              </li>
              <li>
                <Link
                  href="/services/creative-design"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] openSans transition-colors"
                >
                  Creative Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] openSans transition-colors"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-6 racing tracking-wider uppercase">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] openSans transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hire-talent"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] openSans transition-colors"
                >
                  Hire Talent
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] openSans transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] openSans transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-6 racing tracking-wider uppercase">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-[var(--primary)] mt-1"></i>
                <span className="text-sm text-[var(--text-secondary)] openSans">
                  123 Tech Park, Innovation St.
                  <br />
                  San Francisco, CA 94105
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-line text-[var(--primary)]"></i>
                <span className="text-sm text-[var(--text-secondary)] openSans">
                  hello@visqode.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-[var(--border-subtle)] gap-4">
          <p className="text-xs text-[var(--text-muted)] openSans">
            © {new Date().getFullYear()} VisQode Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors openSans"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors openSans"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
