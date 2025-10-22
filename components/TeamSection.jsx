"use client"
import { motion } from "framer-motion"

const TeamSection = () => {
  const team = [
    {
      name: "Jordan Abigail",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Marcus Horizon",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Ahmad Jalaladin",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Jimmy Su",
      role: "Brand Strategist",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
          >
            <h2 className="text-4xl lg:text-5xl racing font-bold text-gray-900">OUR BEST DESIGNERS</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#a7ff59] text-black font-semibold rounded-full hover:bg-[#8fee3f] transition-all duration-300"
            >
              View More
            </motion.button>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 racing">{member.name}</h3>
                  <p className="text-gray-600 openSans">{member.role}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#a7ff59]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-black">
                    <h3 className="text-xl font-bold mb-2 racing">{member.name}</h3>
                    <p className="mb-4 openSans">{member.role}</p>
                    <div className="flex justify-center space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="#"
                        className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center hover:bg-black/30 transition-colors"
                      >
                        <i className="bxl bx-linkedin text-white"></i>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="#"
                        className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center hover:bg-black/30 transition-colors"
                      >
                        <i className="bxl bx-twitter text-white"></i>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
