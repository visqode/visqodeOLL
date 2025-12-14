'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ServicesDown = () => {
  const imageRef = useRef(null);
  const cardRefs = useRef([]);

  // /* !Scroll Animation making problem while loading the screen*/

  // useEffect(() => {
  //   if (imageRef.current) {
  //     gsap.fromTo(
  //       imageRef.current,
  //       { opacity: 0 }, // Minimal animation: only opacity
  //       {
  //         opacity: 1,
  //         ease: 'power4.out',
  //         scrollTrigger: {
  //           trigger: imageRef.current,
  //           start: 'top 100%',
  //           end: 'bottom 5%',
  //           scrub: 0.1,
  //           once: true,
  //         },
  //       }
  //     );
  //   }

  //   cardRefs.current.forEach((card) => {
  //     if (card) {
  //       gsap.fromTo(
  //         card,
  //         { opacity: 0 }, // Minimal animation: only opacity
  //         {
  //           opacity: 1,
  //           ease: 'power4.out',
  //           scrollTrigger: {
  //             trigger: card,
  //             start: 'top 100%',
  //             end: 'bottom 5%',
  //             scrub: 0.1,
  //             once: true,
  //           },
  //         }
  //       );
  //     }
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  /* Updated Services List to match Site Structure */
  const services = [
    {
      id: '01',
      title: 'Development',
      slug: 'development',
      description:
        'Scalable, secure, and high-performance digital infrastructure built with modern tech stacks.',
    },
    {
      id: '02',
      title: 'Brand Building',
      slug: 'brand-building',
      description:
        'Strategic identities that resonate. We define your voice, visuals, and market positioning.',
    },
    {
      id: '03',
      title: 'Creative Design',
      slug: 'creative-design',
      description:
        'UI/UX that converts. We blend aesthetics with psychology to create immersive experiences.',
    },
    {
      id: '04',
      title: 'Consulting',
      slug: 'consulting',
      description:
        'Technical leadership and roadmap strategy to navigate complex digital transformations.',
    },
    {
      id: '05',
      title: 'Hire Talent',
      slug: 'hire-talent',
      description:
        'Day-one ready senior engineers and designers to augment your team and accelerate delivery.',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-8 lg:gap-12">
      <motion.div
        className="w-full lg:w-auto flex justify-center order-2 lg:order-1"
        ref={imageRef}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Modern office workspace"
          className="w-full max-w-[400px] lg:max-w-[500px] h-auto lg:h-[500px] object-cover rounded-xl shadow-black shadow-md"
          loading="lazy"
        />
      </motion.div>

      <div className="w-full lg:w-auto order-1 lg:order-2">
        {services.map((service, index) => (
          <div key={service.id} ref={(el) => (cardRefs.current[index] = el)}>
            <div className="mt-6 lg:mt-10 transition-all cursor-pointer group">
              <Link href={`/services/${service.slug}`} className="block">
                <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2 sm:gap-6">
                  <motion.div
                    className="service-number openSans text-white/50 font-extrabold transition-all group-hover:text-[var(--primary)]"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {service.id}
                  </motion.div>
                  <motion.div
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-2 w-full"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <h3 className="text-xl md:text-2xl lg:text-3xl racing font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                      {service.title}
                    </h3>
                  </motion.div>
                </div>
                <div className="text-base md:text-lg lg:text-lg mt-2 md:mt-4 openSans text-white/80 max-w-lg group-hover:text-white transition-colors">
                  {service.description}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesDown;
