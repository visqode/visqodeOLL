"use client"
import { motion } from "framer-motion"

const ConsultingServices = () => {
  const services = [
    {
      icon: "bx-trending-up",
      title: "Digital Strategy",
      description:
        "Comprehensive digital transformation roadmaps tailored to your business objectives and market position.",
      features: ["Market Analysis", "Competitive Research", "Technology Roadmap", "ROI Planning"],
    },
    {
      icon: "bx-cog",
      title: "Technology Consulting",
      description: "Expert guidance on technology stack selection, architecture design, and implementation strategies.",
      features: ["Tech Stack Selection", "Architecture Design", "Scalability Planning", "Security Assessment"],
    },
    {
      icon: "bx-analyse",
      title: "Business Analysis",
      description:
        "In-depth analysis of your business processes and identification of digital opportunities for growth.",
      features: ["Process Optimization", "Digital Opportunities", "Workflow Analysis", "Efficiency Improvements"],
    },
    {
      icon: "bx-rocket",
      title: "Growth Optimization",
      description:
        "Data-driven strategies to optimize your digital growth and maximize performance across all channels.",
      features: ["Performance Analytics", "Conversion Optimization", "User Experience", "Growth Hacking"],
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-gray-900 mb-6">Consulting Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert consultation across all aspects of digital transformation and business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#e97f33] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <i className={`bx ${service.icon} text-2xl text-black`}></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <div key={feature} className="flex items-center">
                    <i className="bx bx-check text-[#e97f33] text-lg mr-2"></i>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ConsultingServices
