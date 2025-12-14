'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/Features/ScrollReveal';
import { motion } from 'framer-motion';

export default function Consulting() {
  const consultingAreas = [
    {
      icon: 'bx-cog',
      title: 'Tech Stack Selection',
      description:
        'Choose the right technology stack or platform for your project with expert guidance.',
      benefits: [
        'Future-proof solutions',
        'Cost-effective choices',
        'Scalability planning',
        'Performance optimization',
      ],
    },
    {
      icon: 'bx-trending-up',
      title: 'Digital Strategy',
      description:
        'Get a custom digital strategy for launch or scale tailored to your business goals.',
      benefits: ['Market analysis', 'Competitive research', 'Growth roadmap', 'ROI planning'],
    },
    {
      icon: 'bx-palette',
      title: 'Branding & Marketing',
      description:
        'Learn how to streamline branding, marketing, and development for maximum impact.',
      benefits: [
        'Brand positioning',
        'Marketing channels',
        'Content strategy',
        'Visual consistency',
      ],
    },
    {
      icon: 'bx-shield-check',
      title: 'Expert Guidance',
      description: 'Avoid expensive mistakes with expert advice tailored to your specific needs.',
      benefits: ['Risk assessment', 'Best practices', 'Industry insights', 'Cost optimization'],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery Call',
      description:
        'We start with a comprehensive discussion about your goals, challenges, and current situation.',
      duration: '30-60 minutes',
    },
    {
      step: '02',
      title: 'Analysis & Research',
      description:
        'Our team analyzes your requirements and researches the best solutions for your needs.',
      duration: '1-2 days',
    },
    {
      step: '03',
      title: 'Strategy Development',
      description:
        'We create a detailed roadmap and recommendations tailored to your specific situation.',
      duration: '2-3 days',
    },
    {
      step: '04',
      title: 'Implementation Support',
      description: 'We provide ongoing guidance and support as you implement our recommendations.',
      duration: 'Ongoing',
    },
  ];

  return (
    <div className="min-h-screen bg-[#161616]">
      <div className="bg-black text-white">
        <Navigation />
      </div>

      <PageHero
        title="Digital Consulting"
        subtitle="Expert Guidance for Your Digital Journey"
        description="We guide you in making the right digital decisions for your brand or business. You bring the vision. We bring the roadmap."
        backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Consulting Areas */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl racing font-bold mb-6">How We Guide You</h2>
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              textClassName="text-lg md:text-xl openSans text-gray-400 max-w-3xl mx-auto"
            >
              Our consulting services help you make informed decisions and avoid costly mistakes in
              your digital journey.
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {consultingAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1a1a1a] p-8 rounded-3xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-[#FF6363] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`bx ${area.icon} text-2xl text-[#fffffd]`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl racing font-bold mb-4">{area.title}</h3>
                    <ScrollReveal
                      baseOpacity={0}
                      enableBlur={true}
                      baseRotation={5}
                      blurStrength={10}
                      textClassName="openSans text-gray-300 leading-relaxed mb-6"
                    >
                      {area.description}
                    </ScrollReveal>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {area.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <i className="bx bx-check text-[#FF6363] text-sm flex-shrink-0"></i>
                      <span className="openSans text-sm text-gray-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl racing font-bold mb-6">Our Consulting Process</h2>
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              textClassName="text-lg md:text-xl openSans text-gray-400 max-w-3xl mx-auto"
            >
              A structured approach that ensures you get the guidance and support you need at every
              step.
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-8`}
              >
                <div className="flex-1 bg-[#161616] p-8 rounded-3xl shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl md:text-5xl racing text-[#FF6363] font-bold">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="text-2xl md:text-3xl racing font-bold">{step.title}</h3>
                      <span className="text-sm openSans text-gray-500">{step.duration}</span>
                    </div>
                  </div>
                  <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    textClassName="openSans text-gray-300 leading-relaxed"
                  >
                    {step.description}
                  </ScrollReveal>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#FF6363] rounded-full flex items-center justify-center text-[#fffffd] font-bold text-xl racing">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black text-white rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl racing font-bold mb-6">
            Ready to Get Expert Guidance?
          </h2>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            textClassName="text-lg md:text-xl openSans mb-8 text-gray-300"
          >
            Let's discuss your digital challenges and create a roadmap for success. Schedule your
            consultation today.
          </ScrollReveal>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#FF6363] text-[#fffffd] rounded-full hover:bg-[#b91c1c] transition-all duration-300 racing text-lg font-bold"
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
