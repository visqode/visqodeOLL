"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/Features/ScrollReveal";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
      desc: "Successfully delivered across various industries",
    },
    {
      number: "5+",
      label: "Years Experience",
      desc: "Years of expertise in digital solutions",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      desc: "Committed to exceeding expectations",
    },
  ];

  const values = [
    {
      icon: "bx-rocket",
      title: "Innovation",
      description:
        "We constantly push boundaries with cutting-edge technologies and creative solutions.",
    },
    {
      icon: "bx-heart",
      title: "Partnership",
      description:
        "We work closely with our clients as true partners in their digital transformation journey.",
    },
    {
      icon: "bx-shield-check",
      title: "Quality",
      description:
        "Every project meets the highest standards of excellence and attention to detail.",
    },
    {
      icon: "bx-trending-up",
      title: "Growth",
      description:
        "We focus on solutions that drive real business growth and long-term success.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white">
        <Navigation />
      </div>

      <PageHero
        title="About VisQode"
        subtitle="Your Digital Transformation Partner"
        description="A full-service digital agency focused on building brands, websites, and long-term digital strategies. We partner with individuals, startups, and enterprises to bring their vision to life."
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* What is VisQode Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl md:rounded-3xl shadow-lg w-full h-auto"
              />
            </motion.div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl racing font-bold">
                What is VisQode?
              </h2>
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                textClassName="text-base md:text-lg openSans leading-relaxed text-gray-700"
              >
                VisQode is a full-service digital agency focused on building
                brands, websites, and long-term digital strategies. We partner
                with individuals, startups, and enterprises to bring their
                vision to life — from concept to launch.
              </ScrollReveal>
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                textClassName="text-base md:text-lg openSans leading-relaxed text-gray-700"
              >
                We handle the creative, the technical, and the strategic so you
                can focus on your vision. Our comprehensive approach ensures
                every aspect of your digital presence works together seamlessly.
              </ScrollReveal>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className="text-4xl md:text-5xl racing text-[#e97f33] mb-4">
                  {stat.number}
                </div>
                <h3 className="text-lg md:text-xl racing mb-2">{stat.label}</h3>
                <p className="openSans text-gray-600 text-sm md:text-base">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Our Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl racing font-bold mb-6">
              Our Core Values
            </h2>
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              textClassName="text-lg openSans text-gray-600 max-w-3xl mx-auto"
            >
              These principles guide everything we do and shape how we work with
              our clients.
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#e97f33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`bx ${value.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl racing font-bold mb-3">{value.title}</h3>
                <p className="openSans text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
