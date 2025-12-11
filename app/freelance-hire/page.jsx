"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/Features/ScrollReveal";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FreelanceHire() {
  const benefits = [
    {
      icon: "bx-user-check",
      title: "Vetted Professionals",
      description:
        "All freelancers are carefully screened and verified for quality and expertise",
    },
    {
      icon: "bx-time-five",
      title: "Flexible Engagement",
      description:
        "Hire for projects, part-time, or full-time based on your needs",
    },
    {
      icon: "bx-shield-check",
      title: "Quality Guaranteed",
      description:
        "We ensure high-quality deliverables with our satisfaction guarantee",
    },
    {
      icon: "bx-dollar-circle",
      title: "Transparent Pricing",
      description: "No hidden fees – clear, upfront pricing for all services",
    },
    {
      icon: "bx-support",
      title: "Dedicated Support",
      description:
        "Our team is here to help throughout the entire project lifecycle",
    },
    {
      icon: "bx-rocket",
      title: "Fast Turnaround",
      description:
        "Get matched with the right talent quickly and start your project",
    },
  ];

  const skillCategories = [
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Graphic Design",
    "Content Writing",
    "Digital Marketing",
    "SEO Specialist",
    "Video Editing",
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Tell Us Your Needs",
      description:
        "Share your project requirements and the skills you're looking for",
    },
    {
      step: "02",
      title: "Get Matched",
      description:
        "We'll connect you with pre-vetted freelancers that fit your criteria",
    },
    {
      step: "03",
      title: "Review & Select",
      description:
        "Review profiles, portfolios, and ratings to choose your freelancer",
    },
    {
      step: "04",
      title: "Start Working",
      description: "Begin your project with clear milestones and deliverables",
    },
  ];

  return (
    <div className="min-h-screen bg-[#161616] text-[#fffffd]">
      <Navigation />

      <PageHero
        title="Hire Freelance Talent"
        subtitle="Your Project, Our Experts"
        description="Connect with top-tier freelance professionals who can bring your projects to life. Vetted, reliable, and ready to work."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
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
            Access Top Freelance Talent
          </motion.h2>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            textClassName="text-lg md:text-xl openSans text-gray-400 leading-relaxed"
          >
            Whether you need a developer, designer, marketer, or content
            creator, our platform connects you with skilled freelancers who can
            deliver exceptional results for your business.
          </ScrollReveal>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl racing font-bold text-center mb-12">
            Why Choose Our Platform
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1a1a1a] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-white/5 hover:border-[#dc2828]/30"
              >
                <div className="w-16 h-16 bg-[#dc2828] rounded-full flex items-center justify-center mb-6">
                  <i
                    className={`bx ${benefit.icon} text-3xl text-[#fffffd]`}
                  ></i>
                </div>
                <h4 className="text-xl racing font-bold mb-3">
                  {benefit.title}
                </h4>
                <p className="openSans text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl racing font-bold text-center mb-12"
          >
            Available Skill Sets
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillCategories.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[#1a1a1a] px-6 py-4 rounded-xl text-center border border-white/5 hover:border-[#dc2828]/30 transition-all duration-300"
              >
                <span className="openSans font-semibold">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl racing font-bold text-center mb-12">
            How It Works
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 items-start bg-[#1a1a1a] p-8 rounded-2xl border border-white/5"
              >
                <div className="w-16 h-16 bg-[#dc2828] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl racing font-bold text-[#fffffd]">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h4 className="text-xl racing font-bold mb-3">
                    {item.title}
                  </h4>
                  <p className="openSans text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
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
            Ready to Find Your Perfect Freelancer?
          </h3>
          <p className="text-lg openSans text-gray-400 mb-8">
            Tell us about your project and we'll connect you with vetted
            professionals who can deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#contact">
              <button className="px-8 py-4 bg-[#dc2828] text-[#fffffd] rounded-full hover:bg-[#b91c1c] transition-all duration-300 racing font-bold">
                Get Started
              </button>
            </Link>
            <Link href="/services">
              <button className="px-8 py-4 border-2 border-[#dc2828] text-[#dc2828] rounded-full hover:bg-[#dc2828] hover:text-[#fffffd] transition-all duration-300 racing font-bold">
                View Our Services
              </button>
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
