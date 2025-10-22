"use client"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const ProjectsTab = () => {
  const projectsRef = useRef([])

  useEffect(() => {
    projectsRef.current.forEach((project, index) => {
      if (project) {
        gsap.fromTo(
          project,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 90%",
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

  const projects = [
    {
      id: 1,
      name: "E-commerce Website Redesign",
      description: "Complete overhaul of the existing e-commerce platform with modern UI/UX",
      status: "In Progress",
      progress: 75,
      startDate: "Nov 1, 2023",
      dueDate: "Dec 15, 2023",
      budget: "$8,500",
      team: ["Sarah Chen", "Marcus Rodriguez", "Emily Johnson"],
      tasks: {
        completed: 12,
        total: 16,
      },
      color: "bg-blue-500",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      id: 2,
      name: "Brand Identity Package",
      description: "Logo design, brand guidelines, and marketing materials",
      status: "Review",
      progress: 90,
      startDate: "Oct 15, 2023",
      dueDate: "Dec 10, 2023",
      budget: "$3,200",
      team: ["Emily Johnson", "Alex Thompson"],
      tasks: {
        completed: 9,
        total: 10,
      },
      color: "bg-yellow-500",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 3,
      name: "Mobile App Design",
      description: "iOS and Android app design with interactive prototypes",
      status: "Completed",
      progress: 100,
      startDate: "Sep 20, 2023",
      dueDate: "Nov 28, 2023",
      budget: "$5,800",
      team: ["Sarah Chen", "David Park"],
      tasks: {
        completed: 14,
        total: 14,
      },
      color: "bg-green-500",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 4,
      name: "Website Maintenance",
      description: "Ongoing maintenance and updates for existing website",
      status: "Active",
      progress: 100,
      startDate: "Jan 1, 2023",
      dueDate: "Ongoing",
      budget: "$200/month",
      team: ["Marcus Rodriguez"],
      tasks: {
        completed: 24,
        total: 24,
      },
      color: "bg-purple-500",
      statusColor: "bg-purple-100 text-purple-800",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl racing font-bold text-gray-900">Your Projects</h1>
          <p className="openSans text-gray-600 mt-1">Track progress and manage your active projects</p>
        </div>
        <button className="px-6 py-3 bg-[#a7ff59] text-black rounded-xl hover:bg-[#8fee3f] transition-colors racing font-bold">
          <i className="bx bx-plus mr-2"></i>
          New Project
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectsRef.current[index] = el)}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              {/* Project Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl racing font-bold text-gray-900 mb-2">{project.name}</h3>
                    <p className="openSans text-gray-600 mb-3">{project.description}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="openSans text-sm text-gray-600">Progress</span>
                    <span className="openSans text-sm font-semibold text-gray-900">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={`h-2 ${project.color} rounded-full`}
                    ></motion.div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 openSans">Start Date</span>
                    <p className="font-semibold text-gray-900 openSans">{project.startDate}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 openSans">Due Date</span>
                    <p className="font-semibold text-gray-900 openSans">{project.dueDate}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 openSans">Budget</span>
                    <p className="font-semibold text-gray-900 openSans">{project.budget}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 openSans">Tasks</span>
                    <p className="font-semibold text-gray-900 openSans">
                      {project.tasks.completed}/{project.tasks.total}
                    </p>
                  </div>
                </div>
              </div>

              {/* Team & Actions */}
              <div className="lg:w-64 space-y-4">
                {/* Team */}
                <div>
                  <span className="text-gray-500 openSans text-sm mb-2 block">Team</span>
                  <div className="flex -space-x-2">
                    {project.team.map((member, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 bg-[#a7ff59] rounded-full flex items-center justify-center border-2 border-white"
                        title={member}
                      >
                        <span className="racing font-bold text-black text-xs">
                          {member
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 px-4 bg-[#a7ff59] text-black rounded-lg hover:bg-[#8fee3f] transition-colors racing font-bold text-sm"
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <i className="bx bx-message text-gray-600"></i>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Stats */}
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="bx bx-briefcase text-blue-600 text-2xl"></i>
          </div>
          <h3 className="text-2xl racing font-bold text-gray-900">4</h3>
          <p className="openSans text-gray-600">Total Projects</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="bx bx-check-circle text-green-600 text-2xl"></i>
          </div>
          <h3 className="text-2xl racing font-bold text-gray-900">1</h3>
          <p className="openSans text-gray-600">Completed</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
          <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="bx bx-time text-yellow-600 text-2xl"></i>
          </div>
          <h3 className="text-2xl racing font-bold text-gray-900">2</h3>
          <p className="openSans text-gray-600">In Progress</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectsTab
