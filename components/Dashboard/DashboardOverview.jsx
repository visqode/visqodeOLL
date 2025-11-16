"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DashboardOverview = () => {
  const cardsRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
    // Animate cards on scroll
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });

    // Animate stats
    statsRef.current.forEach((stat, index) => {
      if (stat) {
        gsap.fromTo(
          stat,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const projects = [
    {
      id: 1,
      name: "E-commerce Website",
      status: "In Progress",
      progress: 75,
      dueDate: "Dec 15, 2023",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Brand Identity Package",
      status: "Review",
      progress: 90,
      dueDate: "Dec 10, 2023",
      color: "bg-yellow-500",
    },
    {
      id: 3,
      name: "Mobile App Design",
      status: "Completed",
      progress: 100,
      dueDate: "Nov 28, 2023",
      color: "bg-green-500",
    },
  ];

  const stats = [
    {
      label: "Active Projects",
      value: "3",
      icon: "bx-briefcase",
      color: "text-blue-600",
    },
    {
      label: "Completed",
      value: "12",
      icon: "bx-check-circle",
      color: "text-green-600",
    },
    {
      label: "Total Spent",
      value: "$24,500",
      icon: "bx-dollar",
      color: "text-purple-600",
    },
    {
      label: "Support Tickets",
      value: "1",
      icon: "bx-support",
      color: "text-orange-600",
    },
  ];

  const recentMessages = [
    {
      id: 1,
      from: "Sarah Chen",
      role: "Project Manager",
      message:
        "Your e-commerce project is ahead of schedule! We'll have the first preview ready by tomorrow.",
      time: "2 hours ago",
      avatar: "SC",
    },
    {
      id: 2,
      from: "Marcus Rodriguez",
      role: "Lead Developer",
      message:
        "The mobile app wireframes have been uploaded to your files section for review.",
      time: "1 day ago",
      avatar: "MR",
    },
    {
      id: 3,
      from: "Emily Johnson",
      role: "Designer",
      message:
        "Brand guidelines document is ready. Please check the latest version in your files.",
      time: "2 days ago",
      avatar: "EJ",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[#e97f33] to-[#f0883e] rounded-3xl p-8 text-black"
      >
        <h1 className="text-3xl lg:text-4xl racing font-bold mb-2">
          Welcome back, John! 👋
        </h1>
        <p className="text-lg openSans opacity-80">
          Here's what's happening with your projects today. Your e-commerce site
          is looking amazing!
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            ref={(el) => (statsRef.current[index] = el)}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 ${stat.color.replace("text", "bg")}/10 rounded-xl flex items-center justify-center`}
              >
                <i className={`bx ${stat.icon} text-2xl ${stat.color}`}></i>
              </div>
            </div>
            <h3 className="text-2xl racing font-bold text-gray-900 mb-1">
              {stat.value}
            </h3>
            <p className="openSans text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Active Projects */}
        <div className="space-y-6">
          <h2 className="text-2xl racing font-bold text-gray-900">
            Active Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="racing font-bold text-lg text-gray-900 mb-1">
                      {project.name}
                    </h3>
                    <div className="flex items-center">
                      <span
                        className={`inline-block w-2 h-2 ${project.color} rounded-full mr-2`}
                      ></span>
                      <span className="openSans text-sm text-gray-600">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <span className="openSans text-sm text-gray-500">
                    {project.dueDate}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="openSans text-sm text-gray-600">
                      Progress
                    </span>
                    <span className="openSans text-sm font-semibold text-gray-900">
                      {project.progress}%
                    </span>
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

                <button className="w-full py-3 bg-gray-50 hover:bg-[#e97f33] hover:text-black rounded-xl transition-all duration-300 openSans font-medium">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Messages */}
        <div className="space-y-6">
          <h2 className="text-2xl racing font-bold text-gray-900">
            Recent Messages
          </h2>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="space-y-4">
              {recentMessages.map((message, index) => (
                <div
                  key={message.id}
                  ref={(el) => (cardsRef.current[projects.length + index] = el)}
                  className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <div className="w-10 h-10 bg-[#e97f33] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="racing font-bold text-black text-sm">
                      {message.avatar}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="racing font-bold text-sm text-gray-900">
                        {message.from}
                      </h4>
                      <span className="openSans text-xs text-gray-500">
                        {message.time}
                      </span>
                    </div>
                    <p className="openSans text-xs text-gray-600 mb-1">
                      {message.role}
                    </p>
                    <p className="openSans text-sm text-gray-800 leading-relaxed">
                      {message.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-3 bg-[#e97f33] text-black rounded-xl hover:bg-[#f0883e] transition-colors racing font-bold">
              View All Messages
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h2 className="text-2xl racing font-bold text-gray-900 mb-6">
          Quick Actions
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: "bx-upload", label: "Upload Files", color: "bg-blue-500" },
            {
              icon: "bx-message",
              label: "Send Message",
              color: "bg-green-500",
            },
            {
              icon: "bx-receipt",
              label: "View Invoices",
              color: "bg-purple-500",
            },
            {
              icon: "bx-support",
              label: "Get Support",
              color: "bg-orange-500",
            },
          ].map((action, index) => (
            <motion.button
              key={action.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center p-6 bg-gray-50 hover:bg-[#e97f33]/10 rounded-xl transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
              >
                <i className={`bx ${action.icon} text-white text-xl`}></i>
              </div>
              <span className="openSans font-medium text-gray-700 group-hover:text-gray-900">
                {action.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
