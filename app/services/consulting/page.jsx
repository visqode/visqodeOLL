'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Consulting() {
  const process = [
    {
      phase: '01',
      title: 'Technical Audit',
      description:
        'We look under the hood. Our seniors analyze your codebase, infrastructure, and team velocity to identify bottlenecks and debt.',
      points: ['Code Quality Assessment', 'Security Vulnerability Scan', 'Architecture Review'],
    },
    {
      phase: '02',
      title: 'Digital Transformation',
      description:
        "Moving from legacy to modern shouldn't be painful. We map out a step-by-step migration strategy that minimizes downtime and risk.",
      points: ['Legacy Migration Plans', 'Cloud Adoption Strategy', 'Process Automation'],
    },
    {
      phase: '03',
      title: 'Interim CTO',
      description:
        'Need leadership? We step in to lead your engineering team, set technical direction, and hire your permanent replacement.',
      points: ['Team Mentorship', 'Hiring Frameworks', 'Technical Roadmap'],
    },
  ];

  const benefits = [
    {
      title: 'Expertise on Demand',
      description:
        'Access C-suite level technical knowledge without the full-time salary commitment.',
    },
    {
      title: 'Unbiased Perspective',
      description:
        'We have no politics. We only care about what works best for your business goals.',
    },
    {
      title: 'Risk Mitigation',
      description: 'Avoid costly architectural mistakes that could haunt your product for years.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-body)] text-[var(--text-primary)] selection:bg-[var(--primary)] selection:text-white">
      <Navigation />

      {/* Hero */}
      <header className="pt-32 pb-20 px-4 md:pt-48 md:pb-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black racing mb-8 leading-[0.9] tracking-tighter">
              CLARITY AMIDST <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-white/50">
                CHAOS.
              </span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center max-w-4xl">
              <div className="w-20 h-1 bg-[var(--primary)] rounded-full"></div>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] openSans font-light leading-relaxed max-w-2xl">
                Technical decisions make or break companies. We provide the strategic guidance
                needed to navigate complex digital landscapes with confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        {/* Process Section */}
        <section className="py-20 border-t border-[var(--border-subtle)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-bold racing mb-4 sticky top-32">
                  OUR <br /> APPROACH
                </h2>
              </div>
              <div className="lg:w-2/3 space-y-20">
                {process.map((item, idx) => (
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
                          <i className="ri-lightbulb-flash-line text-[var(--primary)]"></i>
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

        {/* Benefits Grid */}
        <section className="py-20 bg-[var(--bg-darker)] border-y border-[var(--border-subtle)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold racing mb-6">WHY CONSULTING?</h2>
              <p className="text-[var(--text-secondary)] openSans max-w-2xl">
                Sometimes you don't need code; you need a roadmap. We help you see around corners.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--primary)]/30 transition-colors"
                >
                  <h3 className="text-xl font-bold racing mb-4 text-[var(--primary)]">
                    {benefit.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold racing mb-8">GET UNSTUCK.</h2>
            <div className="flex justify-center gap-6">
              <Link
                href="/contact"
                className="px-10 py-4 bg-[var(--primary)] text-white racing font-bold rounded-full hover:bg-[var(--primary-hover)] transition-all transform hover:-translate-y-1 shadow-xl shadow-[var(--primary)]/20"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
