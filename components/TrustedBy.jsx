"use client"
import { motion } from "framer-motion"

const TrustedBy = () => {
  const companies = [
    {
      name: "Papale",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "Dorfus",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "Martino",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "Solace",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "Colonia",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gray-600 text-lg font-medium">Trusted by industry leaders</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex justify-center items-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-gray-400 hover:text-gray-700 transition-colors">
                {company.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
