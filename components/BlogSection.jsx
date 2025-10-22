"use client"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const BlogSection = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const cards = cardsRef.current

    cards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: index % 2 === 0 ? -60 : 60,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.2,
          },
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest technologies and frameworks shaping the future of web development.",
      author: "Sarah Chen",
      date: "Dec 15, 2023",
      readTime: "5 min read",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Next.js", "Web Dev"],
    },
    {
      id: 2,
      title: "Building a Strong Brand Identity: A Complete Guide",
      excerpt: "Learn how to create a memorable brand that resonates with your target audience.",
      author: "Marcus Rodriguez",
      date: "Dec 12, 2023",
      readTime: "8 min read",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Branding", "Design", "Strategy"],
    },
    {
      id: 3,
      title: "UI/UX Design Principles That Drive Conversions",
      excerpt: "Discover the design principles that turn visitors into customers and boost your business.",
      author: "Emily Johnson",
      date: "Dec 10, 2023",
      readTime: "6 min read",
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1581291518857-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["UI/UX", "Conversion", "Design"],
    },
    {
      id: 4,
      title: "Digital Marketing Strategies for Modern Businesses",
      excerpt: "Effective digital marketing tactics to grow your online presence and reach more customers.",
      author: "Alex Thompson",
      date: "Dec 8, 2023",
      readTime: "7 min read",
      category: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Marketing", "SEO", "Social Media"],
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl racing font-bold text-gray-900 mb-6">
            Insights, Tips & Tutorials
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto openSans leading-relaxed">
            Stay updated with the latest trends, best practices, and expert insights from our team.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              ref={(el) => (cardsRef.current[index] = el)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#a7ff59] text-black px-3 py-1 rounded-full text-sm racing font-bold">
                  {post.category}
                </div>

                {/* Read Time */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm openSans">
                  {post.readTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl racing font-bold text-gray-900 mb-3 group-hover:text-[#a7ff59] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 openSans leading-relaxed mb-6 text-sm lg:text-base line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs openSans font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author & Date */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#a7ff59] rounded-full flex items-center justify-center mr-3">
                      <span className="text-black font-bold text-sm racing">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold text-sm openSans">{post.author}</p>
                      <p className="text-gray-500 text-xs openSans">{post.date}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gray-900 text-white rounded-xl hover:bg-[#a7ff59] hover:text-black transition-all duration-300 racing font-semibold group-hover:bg-[#a7ff59] group-hover:text-black"
                >
                  Read More
                  <i className="bx bx-arrow-up-right ml-2 text-lg"></i>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Blog Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 lg:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 racing font-bold text-lg"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection
