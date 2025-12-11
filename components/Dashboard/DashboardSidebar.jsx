"use client"
import { motion } from "framer-motion"

const DashboardSidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "bx-home", badge: null },
    { id: "projects", label: "Projects", icon: "bx-briefcase", badge: "3" },
    { id: "files", label: "Files", icon: "bx-folder", badge: null },
    { id: "invoices", label: "Invoices", icon: "bx-receipt", badge: "2" },
    { id: "support", label: "Support", icon: "bx-support", badge: "1" },
  ]

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <motion.div
        variants={sidebarVariants}
        animate={isOpen ? "open" : "closed"}
        className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-50 lg:relative lg:translate-x-0 lg:z-auto"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl racing font-bold text-gray-900">VisQode</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <i className="bx bx-x text-xl"></i>
            </button>
          </div>
          <p className="text-sm text-gray-600 openSans mt-1">Client Portal</p>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                setActiveTab(item.id)
                setIsOpen(false)
              }}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                activeTab === item.id
                  ? "bg-[#dc2828] text-black"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center">
                <i className={`bx ${item.icon} text-xl mr-3`}></i>
                <span className="openSans font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    activeTab === item.id ? "bg-black text-white" : "bg-[#dc2828] text-black"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </motion.button>
          ))}
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#dc2828] rounded-full flex items-center justify-center mr-3">
              <span className="racing font-bold text-black">JD</span>
            </div>
            <div className="flex-1">
              <p className="racing font-bold text-sm">John Doe</p>
              <p className="openSans text-xs text-gray-600">Premium Client</p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <i className="bx bx-log-out text-gray-600"></i>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default DashboardSidebar
