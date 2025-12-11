"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/Features/ScrollReveal";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Development() {
  const features = [
    {
      icon: "bx-code-alt",
      title: "Modern Tech Stack",
      description:
        "React, Next.js, Node.js, and cutting-edge technologies for robust applications",
    },
    {
      icon: "bx-mobile",
      title: "Responsive Design",
      description:
        "Pixel-perfect interfaces that work flawlessly across all devices",
    },
    {
      icon: "bx-rocket",
      title: "Performance Optimized",
      description: "Lightning-fast load times and optimized user experience",
    },
    {
      icon: "bx-search-alt",
      title: "SEO Friendly",
      description:
        "Built with search engine optimization best practices from the ground up",
    },
    {
      icon: "bx-shield-quarter",
      title: "Secure & Scalable",
      description:
        "Enterprise-grade security and infrastructure that grows with your business",
    },
    {
      icon: "bx-support",
      title: "Ongoing Support",
      description:
        "Continuous maintenance and updates to keep your site running smoothly",
    },
  ];

  const technologies = [
    "React & Next.js",
    "TypeScript",
    "Node.js & Express",
    "TailwindCSS",
    "MongoDB & PostgreSQL",
    "AWS & Vercel",
  ];

  return (
    <div className="min-h-screen bg-[#161616] text-[#fffffd]">
      <Navigation />

      <PageHero
        title="Development Services"
        subtitle="Building Digital Excellence"
        description="We create fast, responsive, and visually stunning websites using modern technologies that help your business stand out in today's digital world."
        backgroundImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
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
            Transform Your Digital Presence
          </motion.h2>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            textClassName="text-lg md:text-xl openSans text-gray-400 leading-relaxed"
          >
            Our development team specializes in creating custom web applications
            that are not only beautiful but also powerful and user-friendly. We
            use the latest technologies to ensure your project is built to last.
          </ScrollReveal>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl racing font-bold text-center mb-12">
            What We Deliver
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1a1a1a] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-white/5 hover:border-[#dc2828]/30"
              >
                <div className="w-16 h-16 bg-[#dc2828] rounded-full flex items-center justify-center mb-6">
                  <i
                    className={`bx ${feature.icon} text-3xl text-[#fffffd]`}
                  ></i>
                </div>
                <h4 className="text-xl racing font-bold mb-3">
                  {feature.title}
                </h4>
                <p className="openSans text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl racing font-bold text-center mb-12"
          >
            Technologies We Use
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[#1a1a1a] px-6 py-4 rounded-xl text-center border border-white/5 hover:border-[#dc2828]/30 transition-all duration-300"
              >
                <span className="openSans font-semibold">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-gradient-to-r from-[#dc2828]/10 to-transparent p-12 rounded-3xl border border-[#dc2828]/20"
        >
          <h3 className="text-3xl md:text-4xl racing font-bold mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg openSans text-gray-400 mb-8">
            Let's discuss how we can bring your vision to life with cutting-edge
            development solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#contact">
              <button className="px-8 py-4 bg-[#dc2828] text-[#fffffd] rounded-full hover:bg-[#b91c1c] transition-all duration-300 racing font-bold">
                Get Started
              </button>
            </Link>
            <Link href="/services">
              <button className="px-8 py-4 border-2 border-[#dc2828] text-[#dc2828] rounded-full hover:bg-[#dc2828] hover:text-[#fffffd] transition-all duration-300 racing font-bold">
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
