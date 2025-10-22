"use client"
import { motion } from "framer-motion"
import SplitText from "./Features/SplitText"

const PageHero = ({
  title,
  subtitle,
  description,
  backgroundImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
}) => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
      }}
      className="h-[50vh] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center text-center px-4 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-white"
      >
        <SplitText
          className="text-4xl md:text-5xl lg:text-6xl racing font-bold mb-4"
          text={title}
          delay={80}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          textAlign="center"
        />

        {subtitle && (
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl racing text-[#a7ff59] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {subtitle}
          </motion.h2>
        )}

        {description && (
          <motion.p
            className="text-base md:text-lg openSans text-gray-200 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}

export default PageHero
