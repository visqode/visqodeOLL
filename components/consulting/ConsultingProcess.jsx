"use client"
import { motion } from "framer-motion"

const ConsultingProcess = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Assessment",
      description:
        "Comprehensive evaluation of your current digital landscape, business processes, and growth opportunities.",
      duration: "1-2 weeks",
    },
    {
      phase: "Phase 2",
      title: "Strategy Development",
      description:
        "Creation of a detailed digital strategy and roadmap aligned with your business objectives and market position.",
      duration: "2-3 weeks",
    },
    {
      phase: "Phase 3",
      title: "Implementation Planning",
      description:
        "Detailed planning of implementation phases, resource allocation, and timeline development for execution.",
      duration: "1-2 weeks",
    },
    {
      phase: "Phase 4",
      title: "Execution Support",
      description:
        "Ongoing guidance and support during implementation to ensure successful delivery and optimal results.",
      duration: "Ongoing",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-gray-900 mb-6">Our Consulting Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured approach that ensures comprehensive analysis and strategic planning for your digital
            transformation.
          </p>
        </motion.div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="text-[#a7ff59] font-semibold text-lg mr-4">{phase.phase}</span>
                  <span className="text-gray-500 text-sm">{phase.duration}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#a7ff59] rounded-full flex items-center justify-center text-black font-bold text-xl">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ConsultingProcess
