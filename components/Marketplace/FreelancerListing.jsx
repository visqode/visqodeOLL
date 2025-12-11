"use client"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FreelancerCard from "./FreelancerCard"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const FreelancerListing = () => {
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: "all",
    rating: "all",
  })
  const headerRef = useRef(null)

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
      )
    }
  }, [])

  const freelancers = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Senior UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      reviews: 127,
      hourlyRate: 85,
      completedJobs: 156,
      successRate: 98,
      responseTime: "1 hour",
      isOnline: true,
      skills: ["UI Design", "UX Research", "Figma", "Prototyping", "User Testing"],
      description:
        "Experienced UI/UX designer with 8+ years creating beautiful, user-centered digital experiences. Specialized in SaaS platforms and e-commerce solutions.",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Full-Stack Developer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      reviews: 89,
      hourlyRate: 95,
      completedJobs: 134,
      successRate: 96,
      responseTime: "2 hours",
      isOnline: false,
      skills: ["React", "Node.js", "Python", "AWS", "MongoDB"],
      description:
        "Full-stack developer passionate about building scalable web applications. Expert in modern JavaScript frameworks and cloud architecture.",
    },
    {
      id: 3,
      name: "Emily Johnson",
      title: "Brand Identity Designer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5.0,
      reviews: 203,
      hourlyRate: 75,
      completedJobs: 289,
      successRate: 99,
      responseTime: "30 min",
      isOnline: true,
      skills: ["Logo Design", "Brand Strategy", "Illustrator", "Photoshop", "Print Design"],
      description:
        "Creative brand designer helping businesses establish strong visual identities. Specialized in logo design, brand guidelines, and marketing materials.",
    },
    {
      id: 4,
      name: "David Park",
      title: "Mobile App Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4.7,
      reviews: 76,
      hourlyRate: 90,
      completedJobs: 98,
      successRate: 94,
      responseTime: "3 hours",
      isOnline: true,
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      description:
        "Mobile app developer with expertise in cross-platform development. Creating high-performance apps for startups and enterprises.",
    },
    {
      id: 5,
      name: "Alex Thompson",
      title: "Digital Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 4.6,
      reviews: 145,
      hourlyRate: 65,
      completedJobs: 187,
      successRate: 92,
      responseTime: "1 hour",
      isOnline: false,
      skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Content Strategy"],
      description:
        "Digital marketing expert helping businesses grow their online presence. Specialized in SEO, PPC campaigns, and conversion optimization.",
    },
    {
      id: 6,
      name: "Lisa Wang",
      title: "Content Writer & Strategist",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      reviews: 112,
      hourlyRate: 55,
      completedJobs: 234,
      successRate: 97,
      responseTime: "2 hours",
      isOnline: true,
      skills: ["Content Writing", "SEO Writing", "Copywriting", "Blog Writing", "Social Media"],
      description:
        "Professional content writer creating engaging, SEO-optimized content for websites, blogs, and marketing campaigns. 6+ years experience.",
    },
  ]

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "design", label: "Design" },
    { value: "development", label: "Development" },
    { value: "marketing", label: "Marketing" },
    { value: "writing", label: "Writing" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl racing font-bold text-gray-900 mb-4">
            Find Top <span className="text-[#dc2828]">Freelancers</span>
          </h1>
          <p className="text-xl openSans text-gray-600 max-w-3xl mx-auto">
            Connect with skilled professionals ready to bring your projects to life. Quality guaranteed.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 openSans">Category</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#dc2828] focus:border-transparent openSans"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 openSans">Price Range</label>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#dc2828] focus:border-transparent openSans"
              >
                <option value="all">All Prices</option>
                <option value="0-50">$0 - $50/hr</option>
                <option value="50-100">$50 - $100/hr</option>
                <option value="100+">$100+/hr</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 openSans">Rating</label>
              <select
                value={filters.rating}
                onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#dc2828] focus:border-transparent openSans"
              >
                <option value="all">All Ratings</option>
                <option value="4.5+">4.5+ Stars</option>
                <option value="4.0+">4.0+ Stars</option>
                <option value="3.5+">3.5+ Stars</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full py-3 bg-[#dc2828] text-black rounded-xl hover:bg-[#b91c1c] transition-colors racing font-bold">
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <p className="openSans text-gray-600">
            Showing <span className="font-semibold">{freelancers.length}</span> freelancers
          </p>
          <div className="flex items-center gap-4">
            <span className="openSans text-sm text-gray-600">Sort by:</span>
            <select className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2828] focus:border-transparent openSans text-sm">
              <option>Relevance</option>
              <option>Rating</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Freelancers Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {freelancers.map((freelancer, index) => (
            <FreelancerCard key={freelancer.id} freelancer={freelancer} index={index} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-white border-2 border-[#dc2828] text-[#dc2828] rounded-xl hover:bg-[#dc2828] hover:text-black transition-all duration-300 racing font-bold">
            Load More Freelancers
          </button>
        </div>
      </div>
    </div>
  )
}

export default FreelancerListing
