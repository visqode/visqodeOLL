'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FreelanceHire() {
  const vettingSteps = [
    {
      step: '01',
      title: 'Global Sourcing',
      description:
        'We don’t wait for applications. Our headhunters actively recruit top contributors from open source projects and leading tech firms.',
    },
    {
      step: '02',
      title: 'Algorithmic + Human Screen',
      description:
        'Candidates pass automated coding challenges before a 60-minute technical interview with a senior engineer in their stack.',
    },
    {
      step: '03',
      title: 'Communication Audit',
      description:
        'Technical skill is baseline. We verify English fluency, time-zone overlap, and remote work emotional intelligence.',
    },
    {
      step: '04',
      title: 'The "First Week" Guarantee',
      description:
        'We track performance intensely during the first sprint. If they don’t ship code, you don’t pay.',
    },
  ];

  const benefits = [
    {
      icon: 'ri-shield-check-line',
      title: 'Zero Compliance Risk',
      description:
        'We manage all contractor agreements, IP transfers, and tax forms globally. Your legal team rests easy.',
    },
    {
      icon: 'ri-time-line',
      title: '48-Hour Deployment',
      description:
        'Skip the 60-day hiring cycle. Our bench is pre-vetted and ready to spin up environments immediately.',
    },
    {
      icon: 'ri-team-line',
      title: 'Embedded Culture',
      description:
        'Our talent integrates into your Slack and Jira. They attend standups and feel like core team members.',
    },
  ];

  const talentPools = [
    {
      role: 'Senior React Engineers',
      rate: 'From $60/hr',
      skills: ['Next.js', 'Redux', 'Performance'],
    },
    { role: 'Backend Architects', rate: 'From $70/hr', skills: ['Node.js', 'Go', 'Microservices'] },
    {
      role: 'Product Designers',
      rate: 'From $65/hr',
      skills: ['Figma', 'User Research', 'Systems'],
    },
    { role: 'DevOps Specialists', rate: 'From $80/hr', skills: ['AWS', 'K8s', 'Terraform'] },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-body)] text-[var(--text-primary)] selection:bg-[var(--primary)] selection:text-white">
      <Navigation />

      {/* Trust Header */}
      <header className="pt-32 pb-20 px-4 md:pt-48 md:pb-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold uppercase tracking-wider rounded-full border border-[var(--primary)]/20">
                Enterprise Ready
              </span>
              <span className="px-3 py-1 bg-[var(--bg-card)] text-[var(--text-muted)] text-xs font-bold uppercase tracking-wider rounded-full border border-[var(--border-subtle)]">
                Top 1% Talent
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black racing mb-8 leading-[0.9] tracking-tighter">
              SCALE WITH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-white/50">
                CERTAINTY.
              </span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center max-w-4xl">
              <div className="w-20 h-1 bg-[var(--primary)] rounded-full"></div>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] openSans font-light leading-relaxed max-w-2xl">
                Deploy senior pre-vetted engineers into your team in 48 hours. No recruiters. No
                fluff. Just code.
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        {/* Value Props Grid */}
        <section className="py-20 border-t border-[var(--border-subtle)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-subtle)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <i className={`${item.icon} text-4xl text-[var(--primary)] mb-6 block`}></i>
                  <h3 className="text-xl font-bold racing mb-3">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] openSans leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vetting Process */}
        <section className="py-20 bg-[var(--bg-darker)] border-y border-[var(--border-subtle)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-bold racing mb-4 sticky top-32">
                  THE 1% <br /> STANDARD
                </h2>
              </div>
              <div className="lg:w-2/3 space-y-12">
                {vettingSteps.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-6 border-b border-[var(--border-subtle)] pb-12 last:border-0 last:pb-0"
                  >
                    <span className="text-2xl font-bold text-[var(--text-muted)] font-mono">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold racing mb-2">{item.title}</h3>
                      <p className="text-[var(--text-secondary)] openSans">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Talent Pools Table */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold racing mb-6">AVAILABLE ROLES</h2>
              <p className="text-[var(--text-secondary)]">Live availability. Instant impact.</p>
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-[var(--border-subtle)] bg-[var(--bg-darker)] text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                <div className="col-span-6 md:col-span-4">Role</div>
                <div className="hidden md:block col-span-4">Core Skills</div>
                <div className="col-span-6 md:col-span-4 text-right">Starts From</div>
              </div>
              {talentPools.map((pool, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="grid grid-cols-12 gap-4 p-6 border-b border-[var(--border-subtle)] last:border-0 items-center hover:bg-[var(--bg-darker)] transition-colors"
                >
                  <div className="col-span-6 md:col-span-4 font-bold racing text-lg">
                    {pool.role}
                  </div>
                  <div className="hidden md:block col-span-4 text-sm text-[var(--text-secondary)]">
                    {pool.skills.join(', ')}
                  </div>
                  <div className="col-span-6 md:col-span-4 text-right font-mono text-[var(--primary)] font-medium">
                    {pool.rate}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 border-t border-[var(--border-subtle)]">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold racing mb-6">STOP HIRING BLINDLY</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
              <Link
                href="/#contact"
                className="px-10 py-4 bg-[var(--primary)] text-white racing font-bold rounded-full hover:bg-[var(--primary-hover)] transition-all shadow-xl shadow-[var(--primary)]/20"
              >
                Match Me with Talent
              </Link>
              <Link
                href="/services"
                className="px-10 py-4 border border-[var(--border-subtle)] text-[var(--text-primary)] racing font-bold rounded-full hover:bg-[var(--bg-card)] transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
