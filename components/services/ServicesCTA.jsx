"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const ServicesCTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
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
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#e97f33]/10 to-transparent rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Let's discuss how our services can help transform your business and achieve your digital goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/consulting"
                className="px-10 py-5 bg-[#e97f33] text-black text-lg font-semibold rounded-full hover:bg-[#f0883e] transition-all duration-300 btn-luxury inline-block"
              >
                Get Started Today
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className="px-10 py-5 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 inline-block"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesCTA
