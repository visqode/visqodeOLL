"use client"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const ServicesDown = () => {
  const imageRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.1,
            once: true,
          },
        },
      )
    }

    cardRefs.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 0.1,
              once: true,
            },
          },
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const services = [
    {
      id: "01",
      title: "Web Design",
      description: "Make the appearance of website pages so that they look so beautiful and pleasing to the eye.",
    },
    {
      id: "02",
      title: "UI/UX Design",
      description: "Create intuitive and engaging user experiences that convert visitors into customers.",
    },
    {
      id: "03",
      title: "Brand Design",
      description: "Develop compelling brand identities that resonate with your target audience.",
    },
    {
      id: "04",
      title: "Graphic Design",
      description: "Design stunning visual content that communicates your message effectively.",
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-8 lg:gap-12">
      <motion.div
        className="w-full lg:w-auto flex justify-center order-2 lg:order-1"
        ref={imageRef}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Modern office workspace"
          className="w-full max-w-[400px] lg:max-w-[500px] h-auto lg:h-[500px] object-cover rounded-lg shadow-black shadow-md"
        />
      </motion.div>

      <div className="w-full lg:w-auto order-1 lg:order-2">
        {services.map((service, index) => (
          <div key={service.id} ref={(el) => (cardRefs.current[index] = el)}>
            <div className="mt-6 lg:mt-10 transition-all cursor-default">
              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-6">
                <motion.div
                  className="service-number openSans text-gray-400 font-extrabold transition-all cursor-default"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {service.id}
                </motion.div>
                <motion.div
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-5 w-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <h3 className="service-title racing font-bold">{service.title}</h3>
                  <motion.i
                    className="bx bx-arrow-up-right bg-lime-400 rounded-full p-2 text-xl self-start sm:self-center"
                    whileHover={{ scale: 1.2, rotate: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  ></motion.i>
                </motion.div>
              </div>
              <div className="text-base md:text-lg lg:text-xl mt-2 md:mt-4 openSans text-gray-700 max-w-lg">
                {service.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesDown
