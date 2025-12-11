"use client";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Labore Real Estate",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Modern real estate platform with advanced search and virtual tours",
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
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive financial dashboard with data visualization",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair mb-6 text-white">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Explore our portfolio of successful digital transformations and
              custom solutions.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-all duration-300 flex items-center gap-2">
              All Projects <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
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
              <div className="relative overflow-hidden rounded-2xl shadow-lg h-64">
                {/* Project Image */}
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Bottom Gradient Overlay - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/60 via-black/60 to-transparent"></div>

                {/* Light Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Project Info - Always Visible at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <span className="text-primary text-sm font-medium block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold racing mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-90 openSans line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Arrow Icon - Using SVG instead of Remix Icons */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90 z-20">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
