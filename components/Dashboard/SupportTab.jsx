"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SupportTab = () => {
  const [activeTicket, setActiveTicket] = useState(null);
  const ticketsRef = useRef([]);

  useEffect(() => {
    ticketsRef.current.forEach((ticket, index) => {
      if (ticket) {
        gsap.fromTo(
          ticket,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ticket,
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

  const tickets = [
    {
      id: "TICK-001",
      subject: "Logo file format question",
      status: "Open",
      priority: "Medium",
      created: "2 hours ago",
      lastUpdate: "1 hour ago",
      project: "Brand Identity Package",
      messages: [
        {
          from: "John Doe",
          message:
            "Hi, I need the logo in SVG format for web use. Can you provide that?",
          time: "2 hours ago",
          isClient: true,
        },
        {
          from: "Emily Johnson",
          message:
            "Hi John! Absolutely, I'll prepare the SVG version and upload it to your files section within the next hour.",
          time: "1 hour ago",
          isClient: false,
        },
      ],
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "TICK-002",
      subject: "Website loading speed concern",
      status: "In Progress",
      priority: "High",
      created: "1 day ago",
      lastUpdate: "3 hours ago",
      project: "E-commerce Website",
      messages: [
        {
          from: "John Doe",
          message:
            "The website seems to be loading slowly on mobile devices. Can we optimize this?",
          time: "1 day ago",
          isClient: true,
        },
        {
          from: "Marcus Rodriguez",
          message:
            "Thanks for bringing this up! I'm currently optimizing the images and implementing lazy loading. Should be resolved by tomorrow.",
          time: "3 hours ago",
          isClient: false,
        },
      ],
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: "TICK-003",
      subject: "Additional page request",
      status: "Resolved",
      priority: "Low",
      created: "3 days ago",
      lastUpdate: "2 days ago",
      project: "E-commerce Website",
      messages: [
        {
          from: "John Doe",
          message: "Can we add a FAQ page to the website?",
          time: "3 days ago",
          isClient: true,
        },
        {
          from: "Sarah Chen",
          message:
            "Great idea! I've added the FAQ page to the project scope. It will be included in the next update.",
          time: "2 days ago",
          isClient: false,
        },
      ],
      statusColor: "bg-gray-100 text-gray-800",
    },
  ];

  const quickActions = [
    { icon: "bx-message", label: "New Ticket", color: "bg-blue-500" },
    { icon: "bx-phone", label: "Schedule Call", color: "bg-green-500" },
    { icon: "bx-help-circle", label: "FAQ", color: "bg-purple-500" },
    { icon: "bx-book", label: "Knowledge Base", color: "bg-orange-500" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl racing font-bold text-gray-900">
            Support Center
          </h1>
          <p className="openSans text-gray-600 mt-1">
            Get help with your projects and account
          </p>
        </div>
        <button className="px-6 py-3 bg-[#e97f33] text-black rounded-xl hover:bg-[#f0883e] transition-colors racing font-bold">
          <i className="bx bx-plus mr-2"></i>
          New Ticket
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickActions.map((action, index) => (
          <motion.button
            key={action.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div
              className={`w-16 h-16 ${action.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              <i className={`bx ${action.icon} text-white text-2xl`}></i>
            </div>
            <span className="racing font-bold text-gray-900 group-hover:text-[#e97f33] transition-colors">
              {action.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Support Tickets */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Tickets List */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-xl racing font-bold text-gray-900">
            Your Tickets
          </h2>
          <div className="space-y-4">
            {tickets.map((ticket, index) => (
              <div
                key={ticket.id}
                ref={(el) => (ticketsRef.current[index] = el)}
                onClick={() => setActiveTicket(ticket)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  activeTicket?.id === ticket.id
                    ? "bg-[#e97f33] border-[#e97f33] text-black"
                    : "bg-white border-gray-200 hover:border-[#e97f33] hover:shadow-lg"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="racing font-bold text-sm">{ticket.id}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      activeTicket?.id === ticket.id
                        ? "bg-black text-white"
                        : ticket.statusColor
                    }`}
                  >
                    {ticket.status}
                  </span>
                </div>
                <p className="openSans text-sm mb-2 line-clamp-2">
                  {ticket.subject}
                </p>
                <div className="flex justify-between items-center text-xs openSans opacity-75">
                  <span>{ticket.priority} Priority</span>
                  <span>{ticket.lastUpdate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Details */}
        <div className="lg:col-span-2">
          {activeTicket ? (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              {/* Ticket Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl racing font-bold text-gray-900 mb-2">
                    {activeTicket.subject}
                  </h2>
                  <div className="flex items-center gap-4 text-sm openSans text-gray-600">
                    <span>Ticket: {activeTicket.id}</span>
                    <span>Project: {activeTicket.project}</span>
                    <span>Created: {activeTicket.created}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${activeTicket.statusColor}`}
                  >
                    {activeTicket.status}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      activeTicket.priority === "High"
                        ? "bg-red-100 text-red-800"
                        : activeTicket.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {activeTicket.priority}
                  </span>
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-4 mb-6">
                {activeTicket.messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.isClient ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-md p-4 rounded-2xl ${
                        message.isClient
                          ? "bg-[#e97f33] text-black"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="racing font-bold text-sm">
                          {message.from}
                        </span>
                        <span className="openSans text-xs opacity-75">
                          {message.time}
                        </span>
                      </div>
                      <p className="openSans text-sm">{message.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reply Form */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="racing font-bold text-lg text-gray-900 mb-4">
                  Reply to Ticket
                </h3>
                <div className="space-y-4">
                  <textarea
                    placeholder="Type your message here..."
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e97f33] focus:border-transparent openSans"
                  ></textarea>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <i className="bx bx-paperclip"></i>
                        <span className="openSans text-sm">Attach File</span>
                      </button>
                    </div>
                    <button className="px-6 py-3 bg-[#e97f33] text-black rounded-xl hover:bg-[#f0883e] transition-colors racing font-bold">
                      Send Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="bx bx-message text-gray-400 text-2xl"></i>
              </div>
              <h3 className="racing font-bold text-xl text-gray-900 mb-2">
                Select a Ticket
              </h3>
              <p className="openSans text-gray-600">
                Choose a support ticket from the list to view details and
                messages
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="racing font-bold text-xl text-gray-900 mb-6">
          Need Immediate Help?
        </h3>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="bx bx-phone text-green-600 text-2xl"></i>
            </div>
            <h4 className="racing font-bold text-gray-900 mb-2">Call Us</h4>
            <p className="openSans text-gray-600 mb-3">+1 (555) 123-4567</p>
            <p className="openSans text-sm text-gray-500">
              Mon-Fri 9AM-6PM EST
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="bx bx-envelope text-blue-600 text-2xl"></i>
            </div>
            <h4 className="racing font-bold text-gray-900 mb-2">Email Us</h4>
            <p className="openSans text-gray-600 mb-3">visqode@gmail.com</p>
            <p className="openSans text-sm text-gray-500">
              Response within 24 hours
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="bx bx-chat text-purple-600 text-2xl"></i>
            </div>
            <h4 className="racing font-bold text-gray-900 mb-2">Live Chat</h4>
            <p className="openSans text-gray-600 mb-3">Available now</p>
            <p className="openSans text-sm text-gray-500">Instant support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportTab;
