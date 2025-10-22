"use client"
import { motion } from "framer-motion"
import { useState } from "react"

const PostJobForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    skills: [],
    budget: "",
    timeline: "",
    experience: "",
    projectType: "",
  })

  const [skillInput, setSkillInput] = useState("")

  const categories = [
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Graphic Design",
    "Digital Marketing",
    "Content Writing",
    "Data Science",
    "DevOps",
  ]

  const budgetRanges = [
    "Under $500",
    "$500 - $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
  ]

  const timelines = [
    "Less than 1 week",
    "1-2 weeks",
    "2-4 weeks",
    "1-3 months",
    "3-6 months",
    "6+ months",
  ]

  const experienceLevels = [
    "Entry Level",
    "Intermediate",
    "Expert",
  ]

  const projectTypes = [
    "One-time project",
    "Ongoing work",
    "Complex project",
  ]

  const addSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skillInput.trim()],
      })
      setSkillInput("")
    }
  }

  const removeSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((skill) => skill !== skillToRemove),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Job posted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl racing font-bold text-gray-900 mb-4">
            Post a <span className="text-[#a7ff59]">Job</span>
          </h1>
          <p className="text-xl openSans text-gray-600 max-w-2xl mx-auto">
            Find the perfect freelancer for your project. Describe your needs and get proposals from qualified professionals.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Job Title */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3 racing">
                Job Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Build a responsive e-commerce website"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a7ff59] focus:border-transparent openSans text-lg"
                required
              />
              <p className="openSans text-sm text-gray-500 mt-2">
                Write a clear, descriptive title for your project
              </p>
            </div>

            {/* Category & Project Type */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3 racing">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a7ff59] focus:border-transparent openSans"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3 racing">
                  Project Type *
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a7ff59] focus:border-transparent openSans"
                  required
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3 racing">
                Project Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe your project in detail. Include specific requirements, goals, and any important information freelancers should know..."
                rows={6}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a7ff59] focus:border-transparent openSans"
                required
              />
              <p className="openSans text-sm text-gray-500 mt-2">
                Minimum 100 characters. Be specific about your requirements.
              </p>
            </div>

            {/* Skills */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3 racing">
                Required Skills *
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                  placeholder="e.g., React, Node.js, UI Design"
                  className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a7ff59] focus:border-transparent openSans"
                />
                <button
                  type="button"
                  onClick={addSkill}
                  className="px-6 py-3 bg-[#a7ff59] text-black rounded-xl hover:bg-[#8fee3f] transition-colors racing font-bold"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full text-sm openSans font-medium flex items-center gap-2"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <i className="bx bx-x"></i>
                    </button>
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Budget & Timeline */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3 racing">
                  Budget Range *
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a7ff59] focus:border-transparent openSans"
                  required
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3 racing">
                  Timeline *
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a7ff59] focus:border-transparent openSans"
                  required
                >
                  <option value="">Select timeline</option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Experience Level */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3 racing">
                Experience Level Required *
              </label>
              <div className="grid sm:grid-cols-3 gap-4">
                {experienceLevels.map((level) => (
                  <label
                    key={level}
                    className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      formData.experience === level
                        ? "border-[#a7ff59] bg-[#a7ff59]/10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="experience"
                      value={level}
                      checked={formData.experience === level}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="sr-only"
                    />
                    <div className="text-center w-full">
                      <p className="racing font-bold text-gray-900">{level}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3 racing">
                Attachments (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#a7ff59] transition-colors">
                <i className="bx bx-cloud-upload text-4xl text-gray-400 mb-4"></i>
                <p className="openSans text-gray-600 mb-2">
                  Drag and drop files here, or <span className="text-[#a7ff59] font-semibold">browse</span>
                </p>
                <p className="openSans text-sm text-gray-500">
                  Upload project briefs, mockups, or reference materials (Max 10MB)
                </p>
                <input type="file" multiple className="hidden" />
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-4 pt-6">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-4 bg-[#a7ff59] text-black rounded-xl hover:bg-[#8fee3f] transition-colors racing font-bold text-lg"
              >
                Post Job
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors racing font-bold"
              >
                Save Draft
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
        >
          <h3 className="racing font-bold text-xl text-gray-900 mb-6">Tips for a Great Job Post</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#a7ff59] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="bx bx-check text-black"></i>
              </div>
              <div>
                <h4 className="racing font-bold text-gray-900 mb-2">Be Specific</h4>
                <p className="openSans text-gray-600 text-sm">
                  Clearly describe what you need, including specific requirements and deliverables.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#a7ff59] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="bx bx-target-lock text-black"></i>
              </div>
              <div>
                <h4 className="racing font-bold text-gray-900 mb-2">Set Clear Goals</h4>
                <p className="openSans text-gray-600 text-sm">
                  Define success metrics and expected outcomes for your project.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#a7ff59] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="bx bx-dollar text-black"></i>
              </div>
              <div>
                <h4 className="racing font-bold text-gray-900 mb-2">Fair Budget</h4>
                <p className="openSans text-gray-600 text-sm">
                  Set a realistic budget that reflects the scope and complexity of your project.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#a7\
