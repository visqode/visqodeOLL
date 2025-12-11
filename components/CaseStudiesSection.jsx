"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CaseStudiesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.15,
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "TechFlow SaaS Platform",
      description:
        "Complete brand identity and web platform for a B2B SaaS startup targeting enterprise clients.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Web Development", "Branding", "SaaS"],
      category: "Web & Brand",
    },
    {
      id: 2,
      title: "GreenEarth E-commerce",
      description:
        "Sustainable fashion brand with custom e-commerce solution and comprehensive digital marketing.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["E-commerce", "Branding", "Marketing"],
      category: "E-commerce",
    },
    {
      id: 3,
      title: "FinanceHub Dashboard",
      description:
        "Modern financial dashboard with real-time analytics and intuitive user experience design.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["UI/UX", "Dashboard", "Finance"],
      category: "Web App",
    },
    {
      id: 4,
      title: "MedCare Mobile App",
      description:
        "Healthcare mobile application with patient management system and telemedicine features.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Mobile App", "Healthcare", "UI/UX"],
      category: "Mobile",
    },
    {
      id: 5,
      title: "RestaurantPro Brand",
      description:
        "Complete restaurant chain rebranding with digital menu system and online ordering platform.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Branding", "Web Development", "Food"],
      category: "Brand & Web",
    },
    {
      id: 6,
      title: "EduLearn Platform",
      description:
        "Online learning platform with interactive courses and student progress tracking system.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Education", "Web Platform", "UI/UX"],
      category: "EdTech",
    },
  ];

  return (
    <section id="work" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl racing font-bold text-gray-900 mb-6">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto openSans leading-relaxed">
            Discover how we've helped businesses transform their digital
            presence and achieve remarkable growth.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              ref={(el) => (cardsRef.current[index] = el)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#dc2828] text-black px-3 py-1 rounded-full text-sm racing font-bold">
                  {study.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl racing font-bold text-gray-900 mb-3 group-hover:text-[#dc2828] transition-colors duration-300">
                  {study.title}
                </h3>

                <p className="text-gray-600 openSans leading-relaxed mb-6 text-sm lg:text-base">
                  {study.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs openSans font-medium hover:bg-[#dc2828] hover:text-black transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gray-900 text-white rounded-xl hover:bg-[#dc2828] hover:text-black transition-all duration-300 racing font-semibold group-hover:bg-[#dc2828] group-hover:text-black"
                >
                  View Case Study
                  <i className="bx bx-arrow-up-right ml-2 text-lg"></i>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 lg:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 racing font-bold text-lg"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
