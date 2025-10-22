"use client"
import { motion } from "framer-motion"

const ServicesGrid = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: [
        "React & Next.js",
        "Node.js Backend",
        "Database Design",
        "API Integration",
        "Performance Optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive interfaces and exceptional user experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"],
      image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-pink-500 to-red-600",
    },
    {
      title: "Brand Identity",
      description: "Comprehensive branding solutions that establish strong brand presence and market differentiation.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials", "Brand Strategy"],
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns that drive growth and maximize your digital presence across all channels.",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "PPC Campaigns", "Analytics & Reporting"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-orange-500 to-yellow-600",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <motion.h3 whileHover={{ scale: 1.05 }} className="text-3xl font-bold font-playfair mb-4">
                    {service.title}
                  </motion.h3>
                  <p className="text-lg mb-6 opacity-90">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="flex items-center"
                      >
                        <i className="bx bx-check text-[#a7ff59] text-xl mr-3"></i>
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-3 bg-[#a7ff59] text-black font-semibold rounded-full hover:bg-[#8fee3f] transition-all duration-300 self-start"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
