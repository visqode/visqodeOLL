"use client"
import { motion } from "framer-motion"

const FreelancerCard = ({ freelancer, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <img
            src={freelancer.avatar || "/placeholder.svg"}
            alt={freelancer.name}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="racing font-bold text-lg text-gray-900 group-hover:text-[#a7ff59] transition-colors">
              {freelancer.name}
            </h3>
            <p className="openSans text-gray-600 text-sm">{freelancer.title}</p>
            <div className="flex items-center mt-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`bx bx${i < Math.floor(freelancer.rating) ? "s" : ""}-star text-sm`}></i>
                ))}
              </div>
              <span className="openSans text-xs text-gray-500 ml-2">
                {freelancer.rating} ({freelancer.reviews} reviews)
              </span>
            </div>
          </div>
        </div>
        {freelancer.isOnline && (
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="openSans text-xs text-green-600">Online</span>
          </div>
        )}
      </div>

      {/* Skills */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {freelancer.skills.slice(0, 4).map((skill, idx) => (
            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs openSans font-medium">
              {skill}
            </span>
          ))}
          {freelancer.skills.length > 4 && (
            <span className="px-3 py-1 bg-[#a7ff59] text-black rounded-full text-xs openSans font-medium">
              +{freelancer.skills.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="openSans text-gray-600 text-sm mb-4 line-clamp-3">{freelancer.description}</p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4 text-center">
        <div>
          <p className="racing font-bold text-lg text-gray-900">{freelancer.completedJobs}</p>
          <p className="openSans text-xs text-gray-500">Jobs Done</p>
        </div>
        <div>
          <p className="racing font-bold text-lg text-gray-900">{freelancer.successRate}%</p>
          <p className="openSans text-xs text-gray-500">Success Rate</p>
        </div>
        <div>
          <p className="racing font-bold text-lg text-gray-900">{freelancer.responseTime}</p>
          <p className="openSans text-xs text-gray-500">Response</p>
        </div>
      </div>

      {/* Price & CTA */}
      <div className="flex items-center justify-between">
        <div>
          <p className="racing font-bold text-xl text-gray-900">${freelancer.hourlyRate}/hr</p>
          <p className="openSans text-xs text-gray-500">Starting at</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-[#a7ff59] text-black rounded-xl hover:bg-[#8fee3f] transition-colors racing font-bold"
        >
          View Profile
        </motion.button>
      </div>
    </motion.div>
  )
}

export default FreelancerCard
