"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/Features/ScrollReveal";
import { motion } from "framer-motion";

export default function Services() {
  const currentServices = [
    {
      id: "01",
      title: "Web Development",
      description:
        "We build fast, responsive, and visually stunning websites using modern technologies — ensuring you stand out in today's digital world.",
      features: [
        "React & Next.js",
        "Responsive Design",
        "Performance Optimization",
        "SEO Friendly",
        "Cross-browser Compatibility",
      ],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: "02",
      title: "Brand Building",
      description:
        "End-to-end brand building, taking your idea from scratch to a full production-ready brand — from domain to deployment.",
      features: [
        "Domain & Hosting Setup",
        "Logo Design",
        "Visual Branding",
        "Marketing Collateral",
        "Website Design & Development",
        "Deployment Support",
      ],
      image:
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-green-500 to-teal-600",
    },
    {
      id: "03",
      title: "Digital Consulting",
      description:
        "We guide you in making the right digital decisions for your brand or business with expert advice tailored to your needs.",
      features: [
        "Tech Stack Selection",
        "Digital Strategy",
        "Branding & Marketing Guidance",
        "Development Consultation",
        "Launch Strategy",
        "Scale Planning",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-orange-500 to-red-600",
    },
  ];

  const comingSoon = [
    {
      title: "Freelancer Marketplace",
      description:
        "A platform where users can create accounts, post job listings, and hire from a vetted pool of freelancers.",
      features: [
        "User Account Creation",
        "Job Posting System",
        "Vetted Freelancer Pool",
        "Safe & Professional Platform",
      ],
      icon: "bx-group",
      status: "Coming Soon",
    },
    {
      title: "E-commerce Integration",
      description:
        "Complete online store setup with cart, checkout, payment integration, and order management features.",
      features: [
        "Online Store Setup",
        "Cart & Checkout",
        "Payment Integration",
        "Order Management",
        "Product Management",
      ],
      icon: "bx-store",
      status: "Coming Soon",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white">
        <Navigation />
      </div>

      <PageHero
        title="Our Services"
        subtitle="Comprehensive Digital Solutions"
        description="From web development to brand building and digital consulting — we offer everything you need to succeed in the digital world."
        backgroundImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Current Services */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl racing font-bold mb-6">
              What We Offer
            </h2>
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              textClassName="text-lg md:text-xl openSans text-gray-600 max-w-3xl mx-auto"
            >
              Our current services designed to transform your digital presence
              and drive business growth.
            </ScrollReveal>
          </div>

          <div className="space-y-16">
            {currentServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-12`}
              >
                <div className="flex-1 w-full">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-64 md:h-80 lg:h-96 object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}
                    ></div>
                  </div>
                </div>

                <div className="flex-1 space-y-6 text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                    <span className="text-5xl md:text-6xl racing text-gray-300 font-bold">
                      {service.id}
                    </span>
                    <h3 className="text-3xl md:text-4xl racing font-bold">
                      {service.title}
                    </h3>
                  </div>

                  <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    textClassName="text-base md:text-lg openSans leading-relaxed text-gray-700"
                  >
                    {service.description}
                  </ScrollReveal>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center lg:justify-start gap-3"
                      >
                        <i className="bx bx-check text-[#dc2828] text-xl flex-shrink-0"></i>
                        <span className="openSans text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="px-8 py-4 bg-[#dc2828] text-[#fffffd] rounded-full hover:bg-[#b91c1c] transition-all duration-300 racing font-bold">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coming Soon Services */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl racing font-bold mb-6">
              What's Coming Next
            </h2>
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              textClassName="text-lg md:text-xl openSans text-gray-600 max-w-3xl mx-auto"
            >
              Exciting new features and services we're developing to expand our
              offerings.
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {comingSoon.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-3xl hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-[#dc2828] text-[#fffffd] px-3 py-1 rounded-full text-xs racing font-bold">
                  {service.status}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#dc2828] rounded-full flex items-center justify-center">
                    <i className={`bx ${service.icon} text-2xl text-black`}></i>
                  </div>
                  <h3 className="text-2xl md:text-3xl racing font-bold">
                    {service.title}
                  </h3>
                </div>

                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={5}
                  blurStrength={10}
                  textClassName="openSans text-gray-700 leading-relaxed mb-6"
                >
                  {service.description}
                </ScrollReveal>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <i className="bx bx-check text-[#dc2828] text-lg flex-shrink-0"></i>
                      <span className="openSans text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
