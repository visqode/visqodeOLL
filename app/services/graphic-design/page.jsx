'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/Features/ScrollReveal';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GraphicDesign() {
  const services = [
    {
      icon: 'bx-palette',
      title: 'Logo Design',
      description: 'Memorable, scalable logos that capture your brand essence',
      features: ['Multiple Concepts', 'Vector Format', 'Brand Guidelines'],
    },
    {
      icon: 'bx-layout',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love',
      features: ['Wireframing', 'Prototyping', 'User Testing'],
    },
    {
      icon: 'bx-image',
      title: 'Marketing Materials',
      description: 'Eye-catching graphics for all your marketing needs',
      features: ['Social Media', 'Print Design', 'Advertising'],
    },
    {
      icon: 'bx-badge-check',
      title: 'Brand Identity',
      description: 'Complete visual identity systems for your brand',
      features: ['Style Guides', 'Color Palettes', 'Typography'],
    },
    {
      icon: 'bx-photo-album',
      title: 'Illustrations',
      description: 'Custom illustrations that bring your ideas to life',
      features: ['Digital Art', 'Icon Sets', 'Infographics'],
    },
    {
      icon: 'bx-package',
      title: 'Packaging Design',
      description: 'Stunning product packaging that stands out on shelves',
      features: ['3D Mockups', 'Label Design', 'Print Ready'],
    },
  ];

  const tools = [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Figma',
    'Adobe XD',
    'Sketch',
    'After Effects',
  ];

  return (
    <div className="min-h-screen bg-[#161616] text-[#fffffd]">
      <Navigation />

      <PageHero
        title="Graphic Design"
        subtitle="Visual Storytelling"
        description="Creative graphic design solutions that capture attention, communicate your message, and leave a lasting impression."
        backgroundImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl racing font-bold mb-6"
          >
            Design That Makes an Impact
          </motion.h2>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            textClassName="text-lg md:text-xl openSans text-gray-400 leading-relaxed"
          >
            Our design team creates stunning visuals that not only look beautiful but also
            effectively communicate your brand message and drive results.
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl racing font-bold text-center mb-12">
            Design Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1a1a1a] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-white/5 hover:border-[#FF6363]/30 group"
              >
                <div className="w-16 h-16 bg-[#FF6363] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`bx ${service.icon} text-3xl text-[#fffffd]`}></i>
                </div>
                <h4 className="text-xl racing font-bold mb-3">{service.title}</h4>
                <p className="openSans text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <i className="bx bx-check text-[#FF6363]"></i>
                      <span className="openSans text-sm text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl racing font-bold text-center mb-12"
          >
            Design Tools We Master
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[#1a1a1a] px-6 py-4 rounded-xl text-center border border-white/5 hover:border-[#FF6363]/30 transition-all duration-300"
              >
                <span className="openSans font-semibold">{tool}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-gradient-to-r from-[#FF6363]/10 to-transparent p-12 rounded-3xl border border-[#FF6363]/20"
        >
          <h3 className="text-3xl md:text-4xl racing font-bold mb-6">
            Ready to Elevate Your Brand?
          </h3>
          <p className="text-lg openSans text-gray-400 mb-8">
            Let's create stunning designs that make your brand unforgettable and drive your business
            forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#contact">
              <button className="px-8 py-4 bg-[#FF6363] text-[#fffffd] rounded-full hover:bg-[#b91c1c] transition-all duration-300 racing font-bold">
                Start Designing
              </button>
            </Link>
            <Link href="/services">
              <button className="px-8 py-4 border-2 border-[#FF6363] text-[#FF6363] rounded-full hover:bg-[#FF6363] hover:text-[#fffffd] transition-all duration-300 racing font-bold">
                View All Services
              </button>
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
