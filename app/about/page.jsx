'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import React from 'react';

const officeImages = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop',
];

const teamMembers = [
  {
    name: 'A. Mahin',
    role: 'Founder & Chief Executive Officer (CEO)',
    img: '/pfp.jpg',
  },
  {
    name: 'Fahad Ibn Sayeed',
    role: 'Founder & Chief Operating Officer (COO)',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Rasel Ahmed',
    role: 'Founder / Chief Design Officer (CDO)',
    img: 'https://images.unsplash.com/photo-1545996124-6f93b9d9a4f6?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Fozley Rabbi',
    role: 'Head of Project Operations',
    img: 'https://images.unsplash.com/photo-1548165328-3b2c4b7a3f8b?q=80&w=800&auto=format&fit=crop',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--dark)] text-white">
      <Navigation />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <header className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
            <div className="font-semibold flex flex-col md:flex-row md:items-end md:gap-4">
              <span className="relative inline-block text-red-500 group">
                <span className="relative z-10 cursor-pointer mr-2">CREATIVITY</span>
                <span className="absolute left-0 -bottom-2 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-red-500 to-orange-400 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </span>
              <span>TECHNOLOGY</span>
            </div>

            <div className="mt-3 md:mt-2 text-4xl md:text-7xl opacity-90">
              MEETS THE RIGHT CHOICE
            </div>
          </h1>

          <p className="max-w-3xl text-lg md:text-2xl text-gray-300 leading-relaxed">
            We are a team of designers and developers passionate about crafting visually striking,
            high-performance digital experiences.
          </p>
        </header>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />

        {/* Wide image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mt-8 group">
          <img
            className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1400&auto=format&fit=crop"
            alt="Agency About"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
      </section>

      {/* Quote + Services + Auto-scrolling Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Title & Quote */}
          <div className="md:col-span-1">
            <div className="text-sm uppercase text-gray-400 tracking-wide">A short belief</div>
            <blockquote className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
              "Design that moves people. Technology that moves business."
            </blockquote>
          </div>

          {/* Right: 3/4-line inspirational service blurb */}
          <div className="md:col-span-2">
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
              We blend strategy, design, and engineering to deliver exceptional products and
              experiences. From brand systems to end-to-end platforms — our quality-first approach
              ensures measurable impact and long-term value for every client.
            </p>
          </div>
        </div>

        {/* Auto-scrolling gallery (marquee) */}
        <div className="mt-6">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex gap-6 will-change-transform"
              style={{
                // Basic inline fallback — actual animation defined in the <style> below
                animation: 'scroll-left 28s linear infinite',
              }}
            >
              {/* duplicate images to make seamless loop */}
              {[...officeImages, ...officeImages].map((src, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-72 md:w-96 h-72 md:h-96 rounded-lg overflow-hidden bg-gray-800"
                >
                  <img
                    src={src}
                    alt={`office-${idx}`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <div className="text-sm uppercase text-gray-400 mb-2">Our Vision</div>
          <h2 className="text-3xl md:text-4xl font-semibold">
            We unite brand, culture and experience to drive impact inside and outside an
            organisation.
          </h2>

          <div className="h-px w-24 bg-[var(--primary)] my-6" />
        </div>
      </section>

      {/* Company Legacy */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              EMPOWERING
              <br />
              SUCCESS STORIES.
            </h3>
            <p className="mt-4 text-gray-300 max-w-xl leading-relaxed">
              musemind creative team members
              <br />
              Over the years, we've propelled numerous businesses to thrive, maintaining robust
              partnerships through our collaborative approach. We are proud to help businesses grow
              and succeed in different industries. From startups to established enterprises, our
              tailored solutions have helped them conquer challenges, reach milestones, and
              actualize their visions.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-[var(--surface)]/10 rounded-lg p-6">
              <div className="text-3xl font-bold">250+</div>
              <div className="text-sm text-gray-300 mt-1">Businesses Thrived</div>
              <p className="text-sm text-gray-400 mt-3">
                We helped more than 250 businesses reach their goals with our innovative solutions.
              </p>
            </div>

            <div className="bg-[var(--surface)]/10 rounded-lg p-6">
              <div className="text-3xl font-bold">24%</div>
              <div className="text-sm text-gray-300 mt-1">Accumulated over $1B</div>
              <p className="text-sm text-gray-400 mt-3">
                Over time, working with organizations of all sizes, we have accumulated over $1B in
                combined impact and realized value for our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-sm uppercase text-gray-400 tracking-wide">WHAT MAKES US</h4>
          <h3 className="mt-2 text-3xl md:text-4xl font-semibold">DIFFERENT FROM OTHERS</h3>
          <p className="mt-4 text-gray-300">
            A minimal, focused approach — we focus on outcomes, not outputs. Below are a few things
            that differentiate our practice.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Design-led Engineering',
              desc: 'Research-driven design and engineering working as a single unit.',
            },
            { title: 'Outcome Focus', desc: 'KPIs and measurable impact guide our delivery.' },
            {
              title: 'Collaborative Process',
              desc: 'We embed within teams — knowledge transfer is built-in.',
            },
            {
              title: 'Scalable Systems',
              desc: 'Solutions designed for long-term growth and maintenance.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-[var(--surface)]/6 p-6 rounded-lg">
              <div className="text-xl font-semibold">{item.title}</div>
              <div className="mt-2 text-gray-300 text-sm leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Grid - UPDATED SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h5 className="text-sm text-gray-400 uppercase">Founders & Executive Leadership</h5>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((m) => (
            <div key={m.name} className="space-y-3">
              {/* Added aspect-square and changed img height to h-full */}
              <div className="rounded-lg overflow-hidden bg-gray-800 aspect-square">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-sm font-semibold">{m.name}</div>
              <div className="text-xs text-gray-400">{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-2xl bg-gradient-to-r from-red-600/20 to-orange-400/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Ready to start something great?</h3>
            <p className="text-gray-300 mt-2">
              Let’s talk about your project and how we can help deliver measurable results.
            </p>
          </div>

          <div>
            <a
              href="#contact"
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
      <Footer />
      {/* Inline keyframes for marquee animation */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Reduce motion for users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .will-change-transform {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
