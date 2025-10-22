"use client"
import { motion } from "framer-motion"

const AboutValues = () => {
  const values = [
    {
      icon: "bx-rocket",
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: "bx-heart",
      title: "Passion",
      description:
        "Every project is approached with genuine enthusiasm and dedication to creating something extraordinary.",
    },
    {
      icon: "bx-shield-check",
      title: "Quality",
      description: "We maintain the highest standards in everything we do, ensuring excellence in every detail.",
    },
    {
      icon: "bx-group",
      title: "Collaboration",
      description: "We believe in the power of teamwork and close partnership with our clients to achieve success.",
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
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-gray-900 mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do and shape the way we work with our clients and each other.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-[#a7ff59] rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <i className={`bx ${value.icon} text-2xl text-black`}></i>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutValues
