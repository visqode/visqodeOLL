"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/Features/ScrollReveal";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BrandBuilding() {
  const stages = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "Understanding your vision, target audience, and competitive landscape",
      icon: "bx-bulb",
    },
    {
      number: "02",
      title: "Brand Identity",
      description:
        "Creating your logo, color palette, typography, and visual guidelines",
      icon: "bx-palette",
    },
    {
      number: "03",
      title: "Digital Presence",
      description: "Domain setup, website design, and social media branding",
      icon: "bx-globe",
    },
    {
      number: "04",
      title: "Launch & Deploy",
      description:
        "Going live with your complete brand presence and marketing materials",
      icon: "bx-rocket",
    },
  ];

  const deliverables = [
    "Custom Logo Design",
    "Brand Style Guide",
    "Domain & Hosting Setup",
    "Professional Website",
    "Social Media Kit",
    "Business Cards & Stationery",
    "Email Templates",
    "Marketing Collateral",
  ];

  return (
    <div className="min-h-screen bg-[#161616] text-[#fffffd]">
      <Navigation />

      <PageHero
        title="Brand Building"
        subtitle="From Concept to Launch"
        description="End-to-end brand building services that take your idea from scratch to a full production-ready brand — from domain to deployment."
        backgroundImage="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
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
            Build Your Brand Identity
          </motion.h2>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            textClassName="text-lg md:text-xl openSans text-gray-400 leading-relaxed"
          >
            We don't just create logos — we build complete brand ecosystems.
            From your initial concept to a fully launched digital presence, we
            handle every aspect of bringing your brand to life.
          </ScrollReveal>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl racing font-bold text-center mb-12">
            Our Process
          </h3>
          <div className="space-y-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-start gap-6 bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-[#dc2828]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#dc2828] rounded-full flex items-center justify-center flex-shrink-0">
                    <i
                      className={`bx ${stage.icon} text-3xl text-[#fffffd]`}
                    ></i>
                  </div>
                  <span className="text-5xl md:text-6xl racing text-[#dc2828]/30 font-bold">
                    {stage.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl racing font-bold mb-3">
                    {stage.title}
                  </h4>
                  <p className="openSans text-gray-400 leading-relaxed text-lg">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl racing font-bold text-center mb-12"
          >
            What You Get
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 bg-[#1a1a1a] px-6 py-4 rounded-xl border border-white/5"
              >
                <i className="bx bx-check text-[#dc2828] text-2xl flex-shrink-0"></i>
                <span className="openSans font-semibold">{item}</span>
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
            Ready to Build Your Brand?
          </h3>
          <p className="text-lg openSans text-gray-400 mb-8">
            Let's create a powerful brand identity that resonates with your
            audience and stands the test of time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#contact">
              <button className="px-8 py-4 bg-[#dc2828] text-[#fffffd] rounded-full hover:bg-[#b91c1c] transition-all duration-300 racing font-bold">
                Start Building
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
