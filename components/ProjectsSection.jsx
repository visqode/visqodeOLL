"use client"
import { motion } from "framer-motion"

const ProjectsSection = () => {
  const projects = [
    {
      title: "Labore Real Estate",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern real estate platform with advanced search and virtual tours",
    },
    {
      title: "Musthala Music Platform",
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Streaming platform with intuitive music discovery features",
    },
    {
      title: "Bankol Financial Web",
      category: "Brand Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive financial dashboard with data visualization",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl racing font-bold text-gray-900 mb-4">BEST PROJECTS</h2>
            <p className="text-gray-600 text-lg">Explore some of our best projects</p>
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[#a7ff59] text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold mb-2 racing">{project.title}</h3>
                  <p className="text-sm opacity-90 openSans">{project.description}</p>
                </div>

                {/* Arrow Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-[#a7ff59] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <i className="bx bx-arrow-up-right text-black"></i>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
