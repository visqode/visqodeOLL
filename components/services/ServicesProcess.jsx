"use client"
import { motion } from "framer-motion"

const ServicesProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Our team develops a comprehensive strategy and roadmap tailored to your specific needs and objectives.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "We create stunning designs and prototypes that align with your brand and provide exceptional user experience.",
    },
    {
      number: "04",
      title: "Development",
      description: "Our developers bring the designs to life using cutting-edge technologies and best practices.",
    },
    {
      number: "05",
      title: "Testing",
      description: "Rigorous testing ensures your project meets the highest standards of quality and performance.",
    },
    {
      number: "06",
      title: "Launch",
      description: "We deploy your project and provide ongoing support to ensure continued success and growth.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-white mb-6">Our Process</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery and exceptional results every time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#1a1a1a] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/5"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesProcess
