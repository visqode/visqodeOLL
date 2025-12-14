'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function About() {
  const principles = [
    {
      title: 'Precision Over Speed',
      text: 'We do not rush. We engineer. Every line of code and every pixel is intentional. We build systems that survive, not just MVPs that demo well.',
    },
    {
      title: 'Transparent Partners',
      text: 'We are not a "vendor". We are a partner. We challenge bad ideas, pivot on data, and share the hard truths needed to succeed.',
    },
    {
      title: 'User-Centric Obsession',
      text: 'Technology is useless if it confuses the human using it. We advocate for the user in every meeting, ensuring the product solves real problems.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-body)] text-[var(--text-primary)] selection:bg-[var(--primary)] selection:text-white">
      <Navigation />

      {/* Manifesto Header */}
      <header className="pt-32 pb-20 px-4 md:pt-48 md:pb-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h5 className="text-[var(--primary)] font-bold tracking-widest uppercase mb-4 openSans">
              Our Philosophy
            </h5>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black racing mb-8 leading-[0.9] tracking-tighter">
              BUILT TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-white/50">
                ENDURE.
              </span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center max-w-4xl">
              <div className="w-20 h-1 bg-[var(--primary)] rounded-full"></div>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] openSans font-light leading-relaxed max-w-2xl">
                In a world of disposable software, we build digital infrastructure designed to last.
                VisQode is a collective of seniors, architects, and strategists.
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        {/* The Narrative */}
        <section className="py-20 border-t border-[var(--border-subtle)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-bold racing mb-4 sticky top-32">
                  WHO <br /> WE ARE
                </h2>
              </div>
              <div className="lg:w-2/3">
                <p className="text-2xl md:text-3xl leading-relaxed font-light text-[var(--text-primary)] mb-8">
                  We are not an agency. We are a product lab.
                </p>
                <p className="text-lg text-[var(--text-secondary)] openSans leading-relaxed mb-6">
                  Traditional agencies bill by the hour and prioritize headcount. We prioritize
                  impact. Founded by engineers and designers tired of "good enough," VisQode exists
                  to set a new standard for digital execution.
                </p>
                <p className="text-lg text-[var(--text-secondary)] openSans leading-relaxed">
                  We integrate deeply with our partners, often serving as the interim CTO or Head of
                  Product. We handle the complexity so you can focus on the vision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-20 bg-[var(--bg-darker)] border-y border-[var(--border-subtle)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-12">
              {principles.map((p, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="w-12 h-1 bg-[var(--border-subtle)] group-hover:bg-[var(--primary)] transition-colors mb-6"></div>
                  <h3 className="text-2xl font-bold racing mb-4">{p.title}</h3>
                  <p className="text-[var(--text-secondary)] openSans leading-relaxed">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats / Proof */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl md:text-6xl font-black racing text-[var(--primary)]">
                  5+
                </div>
                <div className="text-sm uppercase tracking-wider text-[var(--text-muted)] mt-2">
                  Years Average Exp
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-6xl font-black racing text-[var(--primary)]">
                  100%
                </div>
                <div className="text-sm uppercase tracking-wider text-[var(--text-muted)] mt-2">
                  Delivery Rate
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-6xl font-black racing text-[var(--primary)]">
                  24h
                </div>
                <div className="text-sm uppercase tracking-wider text-[var(--text-muted)] mt-2">
                  Critical Response
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-6xl font-black racing text-[var(--primary)]">
                  Global
                </div>
                <div className="text-sm uppercase tracking-wider text-[var(--text-muted)] mt-2">
                  Client Base
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
