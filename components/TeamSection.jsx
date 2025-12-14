'use client';
import { motion } from 'framer-motion';

import Link from 'next/link';

const TeamSection = ({ limit }) => {
  const team = [
    {
      name: 'A. Mahin',
      role: 'Founder & Chief Executive Officer',
      image: '/pfp.jpg',
    },
    {
      name: 'Abdul Rehman',
      role: 'Web Developer',
      image: '/remPfp.jpg',
    },
    {
      name: 'Yousuf Mollah',
      role: 'UI/UX Designer',
      image: '/yuPfp.jpg',
    },
    {
      name: 'Mohammad Bin Salim',
      role: 'AI Automation',
      image: '/mdpfp.jpg',
    },
  ];

  return (
    <section className="py-20 lg:py-32 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl racing font-bold text-[var(--text-primary)]">
              MINDS BEHIND THE MAGIC
            </h2>
          </motion.div>

          {/* VIEW MORE TEAMS BUTTON - Moved to Top Right */}
          {limit && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/about">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    borderColor: '#ffffff',
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
                    transition: { duration: 0.3 },
                  }}
                  className="hidden lg:block text-[var(--primary)] border border-[var(--primary)] px-6 py-2 rounded-lg openSans font-bold transition-all duration-300"
                >
                  SEE OUR TEAM
                </motion.button>
              </Link>
            </motion.div>
          )}
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {(limit ? team.slice(0, limit) : team).map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
              }}
              animate={{
                boxShadow: '0 0 0px 0px rgba(0, 0, 0, 0)',
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[var(--bg-card)] shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 text-center bg-[var(--bg-card)] relative z-10">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 racing">
                    {member.name}
                  </h3>
                  <p className="text-white/70 openSans">{member.role}</p>
                </div>

                {/* Hover overlay - Improved Contrast & Visibility */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center z-20">
                  <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2 racing tracking-wider text-[var(--primary)]">
                      {member.name}
                    </h3>
                    <p className="mb-6 openSans text-gray-300 font-medium tracking-wide">
                      {member.role}
                    </p>
                    <div className="flex justify-center space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.1, backgroundColor: 'var(--primary)' }}
                        href="#"
                        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:text-black transition-colors border border-white/20"
                      >
                        <i className="ri-linkedin-fill text-xl text-white"></i>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1, backgroundColor: 'var(--primary)' }}
                        href="#"
                        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:text-black transition-colors border border-white/20"
                      >
                        <i className="ri-twitter-x-fill text-xl text-white"></i>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
