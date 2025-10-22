"use client"
import { motion } from "framer-motion"

const AboutStory = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our story"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-[#a7ff59] rounded-full opacity-20"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-[#a7ff59] font-semibold text-lg">Our Story</span>
              <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-gray-900 mt-4 mb-6">
                Building Digital Excellence Since Day One
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded with a vision to transform digital experiences, VisQode has been at the forefront of web
                development and brand building. We combine creativity with technical expertise to deliver exceptional
                results that exceed expectations.
              </p>
              <p>
                Our journey began with a simple belief: that every business deserves a digital presence that truly
                represents their vision and values. Today, we've helped hundreds of companies achieve their digital
                goals through innovative solutions and strategic thinking.
              </p>
              <p>
                We don't just build websites and brands – we create digital experiences that connect, engage, and
                inspire. Our team of passionate professionals brings together diverse skills and perspectives to solve
                complex challenges with elegant solutions.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#a7ff59] text-black font-semibold rounded-full hover:bg-[#8fee3f] transition-all duration-300 btn-luxury"
            >
              Learn More About Our Journey
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutStory
