'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Development() {
  const engineeringProcess = [
    {
      phase: '01',
      title: 'Architecture & System Design',
      description:
        'We don’t just code; we architect. We analyze requirements to select the right stack, ensuring scalability, security, and maintainability from day one.',
      points: [
        'Microservices vs Monolith selection',
        'Database schema design',
        'Cloud infrastructure planning',
      ],
    },
    {
      phase: '02',
      title: 'Agile Development',
      description:
        'Iterative development sprints allow for flexibility and transparency. You see progress every two weeks, ensuring the product aligns with the vision.',
      points: ['CI/CD Pipeline integration', 'Automated testing suites', 'Bi-weekly code reviews'],
    },
    {
      phase: '03',
      title: 'Performance Engineering',
      description:
        'Speed is a feature. We optimize every layer of the application, from database queries to frontend asset delivery, for sub-second load times.',
      points: ['Core Web Vitals optimization', 'Server-side rendering (SSR)', 'CDN edge caching'],
    },
  ];

  const techStack = [
    {
      category: 'Frontend',
      items: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    { category: 'Backend', items: ['Node.js', 'Python', 'Go', 'GraphQL', 'PostgreSQL'] },
    { category: 'DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'Vercel', 'GitHub Actions'] },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-body)] text-[var(--text-primary)] selection:bg-[var(--primary)] selection:text-white">
      <Navigation />

      {/* Editorial Header - No Generic Hero */}
      <header className="pt-32 pb-20 px-4 md:pt-48 md:pb-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black racing mb-8 leading-[0.9] tracking-tighter">
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-white/50">
                EXCELLENCE.
              </span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center max-w-4xl">
              <div className="w-20 h-1 bg-[var(--primary)] rounded-full"></div>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] openSans font-light leading-relaxed max-w-2xl">
                We build robust, scalable digital infrastructure. From high-frequency trading
                platforms to immersive consumer applications, we write code that drives revenue.
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
                  OUR <br /> METHODOLOGY
                </h2>
              </div>
              <div className="lg:w-2/3 space-y-20">
                {engineeringProcess.map((item, idx) => (
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
                          <i className="ri-check-line text-[var(--primary)]"></i>
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

        {/* Tech Stack Grid */}
        <section className="py-20 bg-[var(--bg-darker)] border-y border-[var(--border-subtle)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold racing mb-6">TECHNOLOGY STACK</h2>
              <p className="text-[var(--text-secondary)] openSans max-w-2xl">
                We don't follow trends; we choose the right tools for the job. Our stack is curated
                for performance, security, and developer velocity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {techStack.map((stack, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--primary)]/30 transition-colors"
                >
                  <h3 className="text-xl font-bold racing mb-6 text-[var(--primary)]">
                    {stack.category}
                  </h3>
                  <ul className="space-y-3">
                    {stack.items.map((tech, tIdx) => (
                      <li
                        key={tIdx}
                        className="text-[var(--text-secondary)] font-medium flex items-center justify-between border-b border-[var(--border-subtle)] pb-2 last:border-0"
                      >
                        <span>{tech}</span>
                        <i className="ri-arrow-right-up-line text-[var(--text-muted)]"></i>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Minimal */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold racing mb-8">BUILD FOR THE FUTURE</h2>
            <div className="flex justify-center gap-6">
              <Link
                href="/#contact"
                className="px-10 py-4 bg-[var(--primary)] text-white racing font-bold rounded-full hover:bg-[var(--primary-hover)] transition-all transform hover:-translate-y-1 shadow-xl shadow-[var(--primary)]/20"
              >
                Initiate Project
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
