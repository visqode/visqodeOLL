'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BrandBuilding() {
  const brandProcess = [
    {
      phase: '01',
      title: 'Strategic Discovery',
      description:
        'We dig deep to uncover the "why" behind your business. Through stakeholder interviews and market analysis, we define your core purpose, audience, and competitive edge.',
      points: ['Competitor Analysis', 'Audience Personas', 'Brand Archetype Definition'],
    },
    {
      phase: '02',
      title: 'Visual Identity System',
      description:
        'A logo is not a brand. We create comprehensive design systems that ensure your visual language is consistent, recognizable, and scalable across all touchpoints.',
      points: ['Logo Design & Usage', 'Typography & Color Theory', 'Iconography & Texture'],
    },
    {
      phase: '03',
      title: 'Voice & Narrative',
      description:
        'How you speak is as important as how you look. We craft your brand voice, tagline, and messaging framework to resonate emotionally with your target audience.',
      points: ['Tone of Voice Guidelines', 'Messaging Hierarchy', 'Storytelling Framework'],
    },
  ];

  const deliverables = [
    {
      title: 'Brand Strategy',
      items: ['Market Positioning', 'Value Proposition', 'Mission & Vision'],
    },
    {
      title: 'Visual Assets',
      items: ['Logo Suite', 'Brand Guidelines (PDF)', 'Social Media Kit', 'Stationery Design'],
    },
    {
      title: 'Experience',
      items: ['Website Art Direction', 'Packaging Design', 'Environmental Graphics'],
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-body)] text-[var(--text-primary)] selection:bg-[var(--primary)] selection:text-white">
      <Navigation />

      {/* Editorial Header */}
      <header className="pt-32 pb-20 px-4 md:pt-48 md:pb-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black racing mb-8 leading-[0.9] tracking-tighter">
              FORGE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-white/50">
                LEGACY.
              </span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center max-w-4xl">
              <div className="w-20 h-1 bg-[var(--primary)] rounded-full"></div>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] openSans font-light leading-relaxed max-w-2xl">
                We turn businesses into iconic brands. Through rigorous strategy and world-class
                design, we craft identities that command attention and inspire loyalty.
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        {/* The Methodology Section */}
        <section className="py-20 border-t border-[var(--border-subtle)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-bold racing mb-4 sticky top-32">
                  THE <br /> FRAMEWORK
                </h2>
              </div>
              <div className="lg:w-2/3 space-y-20">
                {brandProcess.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="group"
                  >
                    <span className="text-6xl font-black text-[var(--border-subtle)] group-hover:text-[var(--primary)]/20 transition-colors racing font-outline">
                      {item.phase}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4 racing">
                      {item.title}
                    </h3>
                    <p className="text-lg text-[var(--text-secondary)] openSans mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-center gap-3 text-sm text-[var(--text-muted)] font-mono uppercase tracking-wide"
                        >
                          <i className="ri-checkbox-circle-line text-[var(--primary)]"></i>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Grid */}
        <section className="py-20 bg-[var(--bg-darker)] border-y border-[var(--border-subtle)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold racing mb-6">WHAT WE DELIVER</h2>
              <p className="text-[var(--text-secondary)] openSans max-w-2xl">
                Strategies that work and assets that stun. Our deliverables are built to be used,
                not just admired.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {deliverables.map((group, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--primary)]/30 transition-colors"
                >
                  <h3 className="text-xl font-bold racing mb-6 text-[var(--primary)]">
                    {group.title}
                  </h3>
                  <ul className="space-y-4">
                    {group.items.map((item, tIdx) => (
                      <li
                        key={tIdx}
                        className="text-[var(--text-secondary)] font-medium flex items-center gap-3"
                      >
                        <span className="w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold racing mb-8">DEFINE YOUR FUTURE</h2>
            <div className="flex justify-center gap-6">
              <Link
                href="/contact"
                className="px-10 py-4 bg-[var(--primary)] text-white racing font-bold rounded-full hover:bg-[var(--primary-hover)] transition-all transform hover:-translate-y-1 shadow-xl shadow-[var(--primary)]/20"
              >
                Audit My Brand
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
