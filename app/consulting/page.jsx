'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Consulting() {
  const engagementModels = [
    {
      title: 'Strategic Advisory',
      description:
        'High-level guidance for C-Suite executives. We validate roadmaps, assess technical risks, and align technology with business goals.',
      idealFor: 'CTOs, VPs of Engineering, Founders',
    },
    {
      title: 'Technical Audit',
      description:
        'A deep-dive forensic analysis of your current infrastructure. We identify bottlenecks, security vulnerabilities, and scalability ceilings.',
      idealFor: 'Legacy Systems, Pre-Scaling Ventures',
    },
    {
      title: 'Team Augmentation',
      description:
        'Embed senior architects and leads into your teams to drive culture change and technical excellence from within.',
      idealFor: 'Growing Engineering Teams',
    },
  ];

  const frameworks = [
    {
      step: '01',
      title: 'Diagnosis & Baseline',
      description:
        'We don’t guess. We measure. Through code review, stakeholder interviews, and performance profiling, we establish the ground truth.',
    },
    {
      step: '02',
      title: 'Architecture Strategy',
      description:
        'We design the "To-Be" state. Not just the technology, but the team structure, deployment pipelines, and data flow needed to get there.',
    },
    {
      step: '03',
      title: 'Execution Oversight',
      description:
        'Strategy is useless without execution. We stay involved to ensure implementation matches the vision, handling critical pivots along the way.',
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
            <h5 className="text-[var(--primary)] font-bold tracking-widest uppercase mb-4 openSans">
              Strategic Consulting
            </h5>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black racing mb-8 leading-[0.9] tracking-tighter">
              CLARITY IN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-white/50">
                CHAOS.
              </span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center max-w-4xl">
              <div className="w-20 h-1 bg-[var(--primary)] rounded-full"></div>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] openSans font-light leading-relaxed max-w-2xl">
                We bridge the gap between business ambition and technical reality. No fluff. Just
                hard truths and actionable roadmaps.
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        {/* Framework Section */}
        <section className="py-20 border-t border-[var(--border-subtle)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-bold racing mb-4 sticky top-32">
                  THE <br /> FRAMEWORK
                </h2>
              </div>
              <div className="lg:w-2/3 space-y-16">
                {frameworks.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-6 group"
                  >
                    <span className="text-4xl font-black text-[var(--border-subtle)] group-hover:text-[var(--primary)] transition-colors racing">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 racing">{item.title}</h3>
                      <p className="text-lg text-[var(--text-secondary)] openSans leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-20 bg-[var(--bg-darker)] border-y border-[var(--border-subtle)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold racing mb-6">ENGAGEMENT MODELS</h2>
              <p className="text-[var(--text-secondary)] openSans max-w-2xl">
                Flexible structures designed to fit your organization's maturity and specific
                challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {engagementModels.map((model, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--primary)]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold racing mb-4 text-[var(--text-primary)]">
                      {model.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] openSans mb-8 text-sm leading-relaxed">
                      {model.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[var(--border-subtle)]">
                    <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                      Best For
                    </span>
                    <span className="text-sm font-medium text-[var(--primary)]">
                      {model.idealFor}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold racing mb-6">EXECUTE WITH CONFIDENCE</h2>
            <p className="text-xl text-[var(--text-secondary)] openSans mb-10 max-w-2xl mx-auto">
              Stop debating. Start building the right way.
            </p>
            <div className="flex justify-center gap-6">
              <Link
                href="/#contact"
                className="px-10 py-4 bg-[var(--primary)] text-white racing font-bold rounded-full hover:bg-[var(--primary-hover)] transition-all transform hover:-translate-y-1 shadow-xl shadow-[var(--primary)]/20"
              >
                Schedule Discovery
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
