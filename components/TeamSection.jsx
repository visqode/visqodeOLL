'use client';
import { motion } from 'framer-motion';

const TeamSection = () => {
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
            <h2 className="text-4xl lg:text-5xl racing font-bold text-[#fffffd]">
              MINDS BEHIND THE MAGIC
            </h2>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#fffffd] mb-2 racing">{member.name}</h3>
                  <p className="text-white/70 openSans">{member.role}</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#FF6363]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-[#fffffd]">
                    <h3 className="text-xl font-bold mb-2 racing">{member.name}</h3>
                    <p className="mb-4 openSans">{member.role}</p>
                    <div className="flex justify-center space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="#"
                        className="w-10 h-10 bg-black/20 rounded-xl flex items-center justify-center hover:bg-black/30 transition-colors"
                      >
                        <i className="ri-linkedin-fill text-white"></i>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="#"
                        className="w-10 h-10 bg-black/20 rounded-xl flex items-center justify-center hover:bg-black/30 transition-colors"
                      >
                        <i className="ri-twitter-fill text-white"></i>
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
