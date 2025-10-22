"use client"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const FreelancerProfile = () => {
  const heroRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
      )
    }

    // Sections animation
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const freelancer = {
    name: "Sarah Chen",
    title: "Senior UI/UX Designer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 85,
    completedJobs: 156,
    successRate: 98,
    responseTime: "1 hour",
    isOnline: true,
    location: "San Francisco, CA",
    memberSince: "2019",
    skills: ["UI Design", "UX Research", "Figma", "Prototyping", "User Testing", "Wireframing", "Design Systems"],
    bio: "I'm a passionate UI/UX designer with over 8 years of experience creating beautiful, user-centered digital experiences. I specialize in SaaS platforms, e-commerce solutions, and mobile applications. My approach combines data-driven insights with creative problem-solving to deliver designs that not only look great but also drive business results.",
    portfolio: [
      {
        id: 1,
        title: "E-commerce Mobile App",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
        category: "Mobile Design",
      },
      {
        id: 2,
        title: "SaaS Dashboard Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        category: "Web Design",
      },
      {
        id: 3,
        title: "Brand Identity System",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
        category: "Branding",
      },
      {
        id: 4,
        title: "Banking App Redesign",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        category: "Mobile Design",
      },
    ],
    testimonials: [
      {
        id: 1,
        client: "John Smith",
        company: "TechStart Inc.",
        rating: 5,
        text: "Sarah delivered exceptional work on our mobile app redesign. Her attention to detail and user-centered approach resulted in a 40% increase in user engagement.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      },
      {
        id: 2,
        client: "Maria Garcia",
        company: "E-Shop Solutions",
        rating: 5,
        text: "Working with Sarah was a pleasure. She understood our vision perfectly and delivered designs that exceeded our expectations. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div ref={heroRef} className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="relative">
                  <img
                    src={freelancer.avatar || "/placeholder.svg"}
                    alt={freelancer.name}
                    className="w-32 h-32 rounded-2xl object-cover"
                  />
                  {freelancer.isOnline && (
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs racing font-bold">
                      Online
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl racing font-bold text-gray-900 mb-2">{freelancer.name}</h1>
                  <p className="text-xl openSans text-gray-600 mb-4">{freelancer.title}</p>
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`bx bx${i < Math.floor(freelancer.rating) ? "s" : ""}-star`}></i>
                        ))}
                      </div>
                      <span className="openSans font-semibold text-gray-900">{freelancer.rating}</span>
                      <span className="openSans text-gray-500 ml-1">({freelancer.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="bx bx-map mr-1"></i>
                      <span className="openSans text-sm">{freelancer.location}</span>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <p className="racing font-bold text-2xl text-gray-900">{freelancer.completedJobs}</p>
                      <p className="openSans text-sm text-gray-600">Jobs Completed</p>
                    </div>
                    <div>
                      <p className="racing font-bold text-2xl text-gray-900">{freelancer.successRate}%</p>
                      <p className="openSans text-sm text-gray-600">Success Rate</p>
                    </div>
                    <div>
                      <p className="racing font-bold text-2xl text-gray-900">{freelancer.responseTime}</p>
                      <p className="openSans text-sm text-gray-600">Avg. Response</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hire Card */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-6">
                <div className="text-center mb-6">
                  <p className="racing font-bold text-3xl text-gray-900">${freelancer.hourlyRate}/hr</p>
                  <p className="openSans text-gray-600">Starting rate</p>
                </div>
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-[#a7ff59] text-black rounded-xl hover:bg-[#8fee3f] transition-colors racing font-bold text-lg"
                  >
                    Hire Sarah
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 border-2 border-[#a7ff59] text-[#a7ff59] rounded-xl hover:bg-[#a7ff59] hover:text-black transition-all duration-300 racing font-bold"
                  >
                    Send Message
                  </motion.button>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm openSans text-gray-600">
                    <span>Member since</span>
                    <span className="font-semibold">{freelancer.memberSince}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div
              ref={(el) => (sectionsRef.current[0] = el)}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl racing font-bold text-gray-900 mb-6">About Sarah</h2>
              <p className="openSans text-gray-700 leading-relaxed">{freelancer.bio}</p>
            </div>

            {/* Skills */}
            <div
              ref={(el) => (sectionsRef.current[1] = el)}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl racing font-bold text-gray-900 mb-6">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {freelancer.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-[#a7ff59] text-black rounded-xl racing font-bold"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Portfolio */}
            <div
              ref={(el) => (sectionsRef.current[2] = el)}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl racing font-bold text-gray-900 mb-6">Portfolio</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {freelancer.portfolio.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-video rounded-xl overflow-hidden mb-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="racing font-bold text-lg text-gray-900 group-hover:text-[#a7ff59] transition-colors">
                      {item.title}
                    </h3>
                    <p className="openSans text-gray-600 text-sm">{item.category}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div
              ref={(el) => (sectionsRef.current[3] = el)}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl racing font-bold text-gray-900 mb-6">Client Reviews</h2>
              <div className="space-y-6">
                {freelancer.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="border border-gray-200 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.client}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="racing font-bold text-gray-900">{testimonial.client}</h4>
                            <p className="openSans text-sm text-gray-600">{testimonial.company}</p>
                          </div>
                          <div className="flex text-yellow-400">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <i key={i} className="bx bxs-star"></i>
                            ))}
                          </div>
                        </div>
                        <p className="openSans text-gray-700 leading-relaxed">{testimonial.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Quick Stats */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="racing font-bold text-lg text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="openSans text-gray-600">Response Time</span>
                    <span className="openSans font-semibold text-gray-900">{freelancer.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="openSans text-gray-600">Success Rate</span>
                    <span className="openSans font-semibold text-gray-900">{freelancer.successRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="openSans text-gray-600">Repeat Clients</span>
                    <span className="openSans font-semibold text-gray-900">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="openSans text-gray-600">On-time Delivery</span>
                    <span className="openSans font-semibold text-gray-900">96%</span>
                  </div>
                </div>
              </div>

              {/* Similar Freelancers */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="racing font-bold text-lg text-gray-900 mb-4">Similar Freelancers</h3>
                <div className="space-y-4">
                  {[
                    { name: "Emily Johnson", title: "UI/UX Designer", rate: 75, rating: 4.8 },
                    { name: "David Park", title: "Product Designer", rate: 90, rating: 4.9 },
                  ].map((freelancer, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-[#a7ff59] rounded-full flex items-center justify-center">
                        <span className="racing font-bold text-black text-sm">
                          {freelancer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="racing font-bold text-sm text-gray-900">{freelancer.name}</h4>
                        <p className="openSans text-xs text-gray-600">{freelancer.title}</p>
                        <div className="flex items-center gap-2">
                          <span className="openSans text-xs font-semibold">${freelancer.rate}/hr</span>
                          <div className="flex text-yellow-400">
                            <i className="bx bxs-star text-xs"></i>
                            <span className="openSans text-xs ml-1">{freelancer.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FreelancerProfile
