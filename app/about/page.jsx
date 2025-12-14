'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
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

  const processSteps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'We audit your current state, challenge your assumptions, and identify the true friction points in your business.',
    },
    {
      num: '02',
      title: 'Strategy',
      desc: "We architect a solution that balances technical feasibility with business impact. No features for features' sake.",
    },
    {
      num: '03',
      title: 'Execution',
      desc: 'Our senior engineers match military-grade discipline with artisan-level craft. We ship clean, scalable code.',
    },
    {
      num: '04',
      title: 'Evolution',
      desc: 'Launch is just day one. We monitor, iterate, and scale your product based on real-world user data.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-body)] text-[var(--text-primary)] selection:bg-[var(--primary)] selection:text-white">
      <Navigation />

      {/* 1. HERO HEADER */}
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
        {/* 2. OUR STORY (Who We Are) */}
        <section className="py-20 border-t border-[var(--border-subtle)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-bold racing mb-4 sticky top-32 text-[var(--text-primary)]">
                  WHO <br /> WE ARE
                </h2>
              </div>
              <div className="lg:w-2/3">
                <p className="text-2xl md:text-3xl leading-relaxed font-light text-[var(--text-primary)] mb-8">
                  We are not an agency. We are a product lab.
                </p>
                <div className="space-y-6 text-lg text-[var(--text-secondary)] openSans leading-relaxed">
                  <p>
                    Traditional agencies bill by the hour and prioritize headcount. We prioritize
                    impact. Founded by engineers and designers tired of "good enough," VisQode
                    exists to set a new standard for digital execution.
                  </p>
                  <p>
                    We integrate deeply with our partners, often serving as the interim CTO or Head
                    of Product. We handle the complexity so you can focus on the vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MISSION & VISION */}
        <section className="py-24 bg-[var(--bg-card)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold racing mb-8 text-[var(--text-primary)]">
                  OUR NORTH STAR
                </h2>
                <div className="space-y-12">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--primary)] mb-3 tracking-widest uppercase">
                      Mission
                    </h3>
                    <p className="text-2xl font-light leading-relaxed text-[var(--text-primary)]">
                      To dismantle the bloat of the modern web and rebuild it with purpose,
                      precision, and permanence.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--primary)] mb-3 tracking-widest uppercase">
                      Vision
                    </h3>
                    <p className="text-2xl font-light leading-relaxed text-[var(--text-primary)]">
                      A digital landscape where every interaction is instant, every interface is
                      intuitive, and every line of code serves a business goal.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-[var(--border-subtle)] flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
                <div className="text-center relative z-10 p-8">
                  <div className="text-9xl font-black racing text-white/5 tracking-tighter">
                    VXQ
                  </div>
                  <p className="mt-4 text-[var(--text-muted)] uppercase tracking-[0.5em] text-sm">
                    Est. 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. VALUES (Core Principles) */}
        <section className="py-20 border-y border-[var(--border-subtle)] bg-[var(--bg-darker)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="mb-16">
              <h2 className="text-3xl font-bold racing mb-4 text-[var(--text-primary)]">
                CORE VALUES
              </h2>
            </div>
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
                  <div className="w-12 h-1 bg-[var(--border-subtle)] group-hover:bg-[var(--primary)] transition-colors duration-300 mb-6"></div>
                  <h3 className="text-2xl font-bold racing mb-4 text-[var(--text-primary)]">
                    {p.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] openSans leading-relaxed">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PROCESS & METHODOLOGY */}
        <section className="py-24 px-4 overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold racing text-[var(--text-primary)] mb-4">
                THE VISQODE METHOD
              </h2>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                Chaos kills projects. We bring structure to the madness.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--primary)] transition-colors duration-300 group"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-6xl font-black racing text-[var(--primary)]">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 mt-8 racing text-[var(--text-primary)]">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHY CHOOSE US */}
        <section className="py-24 bg-[var(--primary)] text-black">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl lg:text-6xl font-black racing mb-6 leading-tight">
                  WHY WE ARE <br /> DIFFERENT
                </h2>
                <p className="text-xl font-medium openSans opacity-80 mb-8 max-w-lg">
                  Most agencies sell you hours. We sell you outcomes. Here is why industry leaders
                  trust us with their digital future.
                </p>
                <button className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-900 transition-colors">
                  START YOUR PROJECT
                </button>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Senior Talent Only',
                    desc: 'No juniors learning on your dime. Only battle-tested experts.',
                  },
                  {
                    title: 'Business-First Code',
                    desc: 'We write code that improves your bottom line, not just code that runs.',
                  },
                  {
                    title: 'No Vendor Lock-In',
                    desc: 'You own everything. Clean, documented, transferrable code.',
                  },
                  {
                    title: 'Rapid Deployment',
                    desc: 'We ship periodically. Feedback loops are tight and constant.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-black/10"
                  >
                    <h4 className="font-bold text-lg mb-2 racing">{item.title}</h4>
                    <p className="text-sm opacity-80 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. LEADERSHIP / CULTURE (TeamSection) */}
        <div className="bg-[var(--bg-body)]">
          <TeamSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
