'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Brand Building', href: '/services/brand-building' },
        { name: 'Development', href: '/services/development' },
        { name: 'Creative Design', href: '/services/creative-design' },
      ],
    },
    { name: 'Consulting', href: '/consulting' },
    { name: 'Hire Talent', href: '/freelance-hire' },
  ];

  const handleContactClick = (e) => {
    e?.preventDefault?.();
    setIsOpen(false);
    if (pathname === '/') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    router.push('/#contact');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'top-4' : 'top-6'
        }`}
      >
        <div
          className={`mx-auto w-[92%] max-w-7xl rounded-2xl border transition-all duration-300 ${
            scrolled
              ? 'bg-[var(--bg-darker)]/80 backdrop-blur-xl border-[var(--white)]/10 shadow-2xl py-3 px-6'
              : 'bg-[var(--bg-darker)]/60 backdrop-blur-lg border-[var(--white)]/5 shadow-lg py-4 px-8'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="z-50 relative group">
              <span className="racing text-xl md:text-2xl text-white tracking-wide group-hover:text-[var(--primary)] transition-colors">
                VisQode
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 font-bold">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href || (item.dropdown && pathname.startsWith('/services'));

                if (item.dropdown) {
                  return (
                    <div
                      key={item.name}
                      onMouseEnter={() => setHoveredService(true)}
                      onMouseLeave={() => setHoveredService(false)}
                      className="relative py-2"
                    >
                      <button
                        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                          isActive || hoveredService
                            ? 'text-[var(--primary)]'
                            : 'text-white/80 hover:text-white'
                        }`}
                      >
                        {item.name}
                        <i
                          className={`ri-arrow-down-s-line transition-transform duration-300 ${
                            hoveredService ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {hoveredService && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56"
                          >
                            <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl shadow-2xl p-2 overflow-hidden backdrop-blur-3xl">
                              {item.dropdown.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  className="block px-4 py-3 rounded-lg text-sm text-[var(--text-secondary)] hover:text-white hover:bg-[var(--primary)]/10 transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive ? 'text-[var(--primary)]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={handleContactClick}
                className="px-6 py-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-sm font-bold racing rounded-lg transition-all shadow-lg shadow-[var(--primary)]/20 hover:shadow-[var(--primary)]/40 hover:-translate-y-0.5"
              >
                Let's Talk
              </button>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 text-white p-2">
              <i className={`text-2xl ${isOpen ? 'ri-close-line' : 'ri-menu-4-line'}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--bg-darker)]/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <motion.div
              className="w-full max-w-xs space-y-6 text-center"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  {item.dropdown ? (
                    <div className="space-y-4">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="text-2xl racing font-bold text-white flex items-center justify-center gap-2 mx-auto"
                      >
                        {item.name}
                        <i
                          className={`ri-arrow-down-s-line text-lg transition-transform ${
                            servicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden space-y-3"
                          >
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-lg openSans text-[var(--text-secondary)]"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-2xl racing font-bold text-white hover:text-[var(--primary)] transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="pt-8"
              >
                <button
                  onClick={handleContactClick}
                  className="px-8 py-4 bg-[var(--primary)] text-white font-bold racing rounded-full w-full text-lg shadow-xl"
                >
                  Start Project
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
