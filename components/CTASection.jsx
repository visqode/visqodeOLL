"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
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
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#dc2828]/10 to-transparent rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-[#dc2828]/5 to-transparent rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-playfair text-white mb-6 leading-tight">
              READY TO WORK WITH US?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Partner with our design agency for your business with amazing results. Let's create something
              extraordinary together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/consulting"
                className="px-10 py-5 bg-[#dc2828] text-black text-lg font-semibold rounded-full hover:bg-[#b91c1c] transition-all duration-300 btn-luxury inline-block"
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
          </motion.div>

          {/* Floating CTA Element */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-1/2 right-8 lg:right-16 transform -translate-y-1/2 hidden lg:block"
          >
            <div className="w-24 h-24 bg-[#dc2828] rounded-full flex items-center justify-center shadow-lg">
              <i className="bx bx-arrow-up-right text-black text-2xl"></i>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
