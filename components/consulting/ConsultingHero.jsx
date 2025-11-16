"use client"
import { motion } from "framer-motion"

const ConsultingHero = () => {
  return (
    <section className="pt-20 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
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
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl lg:text-7xl font-bold font-playfair text-white mb-6 leading-tight">
            Digital Consulting
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Strategic guidance to navigate the digital landscape and unlock your business potential through expert
            consultation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ConsultingHero
