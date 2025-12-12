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
    // lock scroll when menu open
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
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-screen-xl transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
        scrolled
          ? 'top-2 bg-white/6 backdrop-blur-md border border-white/10 shadow-lg'
          : 'top-8 bg-white/6 backdrop-blur-md border border-white/8'
      } rounded-xl`}
      style={{ willChange: 'transform, background-color, box-shadow' }}
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        {/* Logo */}
        <div className="text-lg md:text-2xl font-bold text-white select-none">
          <Link href="/">VisQode</Link>
        </div>

        {/* Centered links (desktop) */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button className="text-white text-sm lg:text-base px-3 py-2 rounded-xl hover:bg-white/10 transition-colors duration-200 font-semibold flex items-center gap-1">
                      {item.name}
                      <svg
                        className="w-4 h-4 transition-transform group-hover:rotate-180"
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
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-[#161616] backdrop-blur-lg border border-white/10 rounded-xl shadow-xl overflow-hidden">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-[#fffffd] hover:bg-[#dc2828] transition-colors duration-200 font-medium"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white text-sm lg:text-base px-3 py-2 rounded-xl hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/10 transition-colors duration-200 font-semibold"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: Contact button only */}
        <div className="hidden md:flex items-center">
          <button
            onClick={handleContactClick}
            className="bg-[#dc2828] text-[#fffffd] px-4 py-2 rounded-xl hover:scale-[1.03] hover:bg-[#b91c1c] transition-all duration-200 font-semibold"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen((p) => !p)}
          className="md:hidden p-2 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
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

      {/* Mobile backdrop (uses opacity + backdrop blur for smoothness) */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* dim + subtle blur */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Centered frosted card */}
        <div className="absolute inset-0 flex items-start justify-center pt-20 px-4">
          <div
            className={`w-full max-w-sm rounded-xl border border-white/10 bg-white/6 backdrop-blur-lg shadow-2xl transform transition-all duration-300 ease-out ${
              isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <div className="font-semibold text-white">VisQode</div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
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

            <div className="px-5 pb-6">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="w-full py-3 text-base text-gray-100 hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/10 flex items-center justify-between rounded-xl px-3 font-semibold"
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
                          <div className="ml-4 mt-2 space-y-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setServicesOpen(false);
                                }}
                                className="block py-2 text-sm text-gray-300 hover:text-[#dc2828] px-3 rounded-xl hover:bg-white/6"
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
                        className="py-3 text-base text-gray-100 block rounded-xl hover:bg-white/6 px-3 font-semibold"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Contact button on mobile */}
                <button
                  onClick={handleContactClick}
                  className="mt-2 py-3 w-full text-left rounded-xl text-base text-gray-100 hover:bg-white/6 px-3 font-semibold"
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
