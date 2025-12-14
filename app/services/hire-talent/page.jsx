'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HireTalent() {
  const roles = [
    {
      title: 'Senior Frontend Engineers',
      skills: ['React / Next.js', 'Three.js / WebGL', 'Performance Optimization'],
    },
    {
      title: 'Backend Architects',
      skills: ['Node.js / Go / Rust', 'Microservices', 'Database Design'],
    },
    {
      title: 'Product Designers',
      skills: ['UI / UX Systems', 'User Research', 'Figma Mastery'],
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
              SCALE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-white/50">
                VELOCITY.
              </span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center max-w-4xl">
              <div className="w-20 h-1 bg-[var(--primary)] rounded-full"></div>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] openSans font-light leading-relaxed max-w-2xl">
                Talent is the bottleneck. We provide pre-vetted, senior-level engineers and
                designers who integrate into your team instantly. No juniors, no hand-holding.
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        {/* Why Us Section */}
        <section className="py-20 border-t border-[var(--border-subtle)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold racing mb-8">THE 1% RULE</h2>
                <p className="text-lg text-[var(--text-secondary)] openSans mb-6 leading-relaxed">
                  We reject 99% of applicants. Our rigorous vetting process includes technical
                  challenges, architectural reviews, and culture-fit interviews conducted by our own
                  Principal Engineers.
                </p>
                <p className="text-lg text-[var(--text-secondary)] openSans mb-6 leading-relaxed">
                  When you hire from VisQode, you aren't getting a freelancer. You are getting an
                  engineer who has shipped at scale.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-subtle)]">
                    <div className="text-3xl font-black racing text-[var(--primary)]">Top 1%</div>
                    <div className="text-sm text-[var(--text-muted)]">Talent Pool</div>
                  </div>
                  <div className="p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-subtle)]">
                    <div className="text-3xl font-black racing text-[var(--primary)]">48hr</div>
                    <div className="text-sm text-[var(--text-muted)]">Deployment Time</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                {/* Abstract Visual */}
                <div className="aspect-square bg-gradient-to-tr from-[var(--primary)]/20 to-transparent rounded-full blur-3xl absolute inset-0"></div>
                <div className="relative z-10 grid gap-6">
                  {roles.map((role, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 }}
                      className="bg-[var(--bg-card)]/80 backdrop-blur-md p-6 rounded-xl border border-[var(--border-subtle)]"
                    >
                      <h3 className="font-bold racing text-xl mb-3">{role.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs font-mono uppercase px-2 py-1 bg-white/5 rounded border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold racing mb-8">BUILD YOUR DREAM TEAM</h2>
            <div className="flex justify-center gap-6">
              <Link
                href="/contact"
                className="px-10 py-4 bg-[var(--primary)] text-white racing font-bold rounded-full hover:bg-[var(--primary-hover)] transition-all transform hover:-translate-y-1 shadow-xl shadow-[var(--primary)]/20"
              >
                Inquire About Talent
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
