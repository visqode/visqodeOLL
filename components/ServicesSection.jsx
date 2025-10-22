"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const ServicesSection = () => {
  const services = [
    {
      number: "01",
      title: "Web Design",
      description: "Make the appearance of website pages so that they look beautiful and pleasing to the eye.",
      icon: "bx-code-alt",
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: "Create intuitive and engaging user experiences that convert visitors into customers.",
      icon: "bx-palette",
    },
    {
      number: "03",
      title: "Brand Design",
      description: "Develop compelling brand identities that resonate with your target audience.",
      icon: "bx-diamond",
    },
    {
      number: "04",
      title: "Graphic Design",
      description: "Design stunning visual content that communicates your message effectively.",
      icon: "bx-brush",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6 lg:gap-12">
              <h2 className="section-title text-4xl lg:text-5xl font-bold font-playfair text-gray-900">OUR SERVICES</h2>
              <div className="hidden lg:block w-px h-16 bg-gray-300"></div>
              <p className="text-gray-600 text-lg max-w-md">This part of our service that can give you satisfaction</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#a7ff59] text-black font-semibold rounded-full hover:bg-[#8fee3f] transition-all duration-300 btn-luxury"
              >
                View More
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Services Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern office workspace"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          </motion.div>

          {/* Services List */}
          <div className="order-1 lg:order-2 space-y-8 lg:space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="service-number text-5xl lg:text-6xl font-bold text-gray-300 group-hover:text-[#a7ff59] transition-colors duration-300"
                  >
                    {service.number}
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl lg:text-3xl font-bold font-playfair text-gray-900 group-hover:text-[#a7ff59] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        className="w-12 h-12 bg-[#a7ff59] rounded-full flex items-center justify-center group-hover:bg-[#8fee3f] transition-colors duration-300"
                      >
                        <i className="bx bx-arrow-up-right text-black text-xl"></i>
                      </motion.div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
