'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        { name: 'Development', href: '/services/development' },
        { name: 'Brand Building', href: '/services/brand-building' },
        { name: 'Graphic Design', href: '/services/graphic-design' },
      ],
    },
    { name: 'Consulting', href: '/consulting' },
    { name: 'Freelance Hire', href: '/freelance-hire' },
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
    <nav
      aria-label="Primary"
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-screen-xl transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
        scrolled
          ? 'top-2 bg-[rgba(10,10,10,0.92)] backdrop-blur-md'
          : 'top-6 bg-[rgba(10,10,10,0.78)] backdrop-blur-md'
      } border border-white/20 rounded-lg ring-red-600/8 shadow-[0_6px_20px_rgba(0,0,0,0.5)]`}
      style={{ willChange: 'transform, background-color, box-shadow' }}
    >
      <div className="flex items-center justify-between px-5 md:px-6 py-2 md:py-3">
        {/* Logo */}
        <div className="text-base md:text-lg font-semibold text-white select-none">
          <Link href="/">VisQode</Link>
        </div>

        {/* Centered links (desktop) - compact spacing */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-5">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.dropdown && item.dropdown.some((si) => pathname.startsWith(si.href))) ||
                (item.href !== '/' && pathname.startsWith(item.href));

              const baseText = isActive ? 'text-red-400' : 'text-gray-300';
              return (
                <li key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        className={`text-sm px-2 py-1 rounded-lg transition-colors duration-150 font-medium ${baseText} hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent`}
                        aria-haspopup="true"
                      >
                        {item.name}
                        <svg
                          className="inline-block w-3 h-3 ml-1 align-middle transition-transform group-hover:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Dropdown (compact) */}
                      <div className="absolute top-full left-0 mt-2 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                        <div className="bg-[rgba(8,8,8,0.94)] backdrop-blur-sm border border-[rgba(220,38,38,0.06)] rounded-lg overflow-hidden py-1">
                          {item.dropdown.map((subItem) => {
                            const subActive =
                              pathname === subItem.href || pathname.startsWith(subItem.href);
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block px-3 py-2 text-sm transition-colors duration-150 font-medium ${
                                  subActive ? 'text-red-400' : 'text-gray-100'
                                } hover:text-red-400`}
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-sm px-2 py-1 rounded-lg transition-colors duration-150 font-medium ${baseText} hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent`}
                    >
                      {item.name}
                      {isActive && <span className="sr-only"> (current)</span>}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right side: Contact button - compact and red */}
        <div className="hidden md:flex items-center">
          <button
            onClick={handleContactClick}
            className="bg-[var(--primary)] text-white px-4 py-1 rounded-md transition-transform duration-150 hover:scale-105 hover:shadow-[0_8px_30px_rgba(220,38,38,0.12)] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Contact
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen((p) => !p)}
          className="md:hidden p-2 rounded-lg text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-200 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div className="absolute inset-0 flex items-start justify-center pt-20 px-4">
          <div
            className={`w-full max-w-sm rounded-lg border border-[rgba(220,38,38,0.06)] bg-[rgba(8,8,8,0.94)] backdrop-blur-sm shadow-lg transform transition-all duration-200 ease-out ${
              isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
            }`}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-4 py-3">
              <div className="font-medium text-white">VisQode</div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="px-4 pb-5">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="w-full py-2 text-sm px-3 rounded-md transition-colors duration-150 font-medium flex items-center justify-between text-gray-200 hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                        >
                          {item.name}
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              servicesOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {servicesOpen && (
                          <div className="ml-3 mt-2 space-y-1">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setServicesOpen(false);
                                }}
                                className="block py-2 text-sm text-gray-200 hover:text-red-400 px-3 rounded-md transition-colors duration-150"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="py-2 text-sm text-gray-200 block rounded-md hover:text-red-400 px-3 font-medium transition-colors duration-150"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Contact button on mobile (compact red) */}
                <button
                  onClick={handleContactClick}
                  className="mt-3 py-2 w-full text-left rounded-md text-sm px-3 font-medium bg-red-500 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
