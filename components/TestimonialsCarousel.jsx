"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechFlow Solutions",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote:
        "VisQode transformed our entire digital presence. Their attention to detail and innovative approach exceeded all our expectations. The team delivered a stunning website that perfectly captures our brand essence.",
      rating: 5,
      project: "Complete Brand & Web Redesign",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder",
      company: "GreenEarth Co.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote:
        "Working with VisQode was a game-changer for our business. They didn't just build us a website; they created a complete digital ecosystem that drives real results. Our conversion rate increased by 300%.",
      rating: 5,
      project: "E-commerce Platform Development",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "FinanceHub",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote:
        "The team at VisQode is incredibly talented and professional. They took our complex financial platform and made it intuitive and beautiful. Our users love the new interface, and our engagement has skyrocketed.",
      rating: 5,
      project: "Dashboard UI/UX Redesign",
    },
    {
      id: 4,
      name: "David Park",
      role: "CTO",
      company: "MedCare Systems",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote:
        "VisQode's technical expertise and creative vision helped us launch our healthcare platform ahead of schedule. Their consulting services saved us months of development time and thousands in costs.",
      rating: 5,
      project: "Healthcare Platform Development",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Brand Manager",
      company: "RestaurantPro",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote:
        "From concept to launch, VisQode handled everything flawlessly. Our new brand identity and digital presence have helped us expand to 15 new locations. They truly understand what businesses need to succeed.",
      rating: 5,
      project: "Complete Brand Identity & Web Platform",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // GSAP Animation on scroll
  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#e97f33]/5 to-transparent rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl racing font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto openSans leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-gray-50 rounded-3xl p-8 lg:p-12 shadow-xl"
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.i
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className="bx bxs-star text-[#e97f33] text-2xl mx-1"
                  ></motion.i>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-gray-800 text-center mb-8 openSans leading-relaxed italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="text-center sm:text-left">
                  <h4 className="text-xl racing font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-[#e97f33] openSans font-semibold">
                    {testimonials[currentIndex].role} at{" "}
                    {testimonials[currentIndex].company}
                  </p>
                  <p className="text-gray-600 openSans text-sm mt-1">
                    {testimonials[currentIndex].project}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#e97f33] hover:text-black transition-all duration-300 z-10"
          >
            <i className="bx bx-chevron-left text-2xl"></i>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#e97f33] hover:text-black transition-all duration-300 z-10"
          >
            <i className="bx bx-chevron-right text-2xl"></i>
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#e97f33] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 lg:mt-20"
        >
          <p className="text-center text-gray-500 openSans mb-8">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="text-2xl font-bold text-gray-400 racing cursor-pointer"
              >
                {testimonial.company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
