"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const InvoicesTab = () => {
  const invoicesRef = useRef([]);

  useEffect(() => {
    invoicesRef.current.forEach((invoice, index) => {
      if (invoice) {
        gsap.fromTo(
          invoice,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: invoice,
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

  const invoices = [
    {
      id: "INV-2023-001",
      project: "E-commerce Website Redesign",
      amount: 4250,
      status: "Paid",
      dueDate: "Dec 1, 2023",
      paidDate: "Nov 28, 2023",
      items: [
        { description: "UI/UX Design", quantity: 1, rate: 2500, amount: 2500 },
        {
          description: "Frontend Development",
          quantity: 1,
          rate: 1750,
          amount: 1750,
        },
      ],
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "INV-2023-002",
      project: "Brand Identity Package",
      amount: 3200,
      status: "Pending",
      dueDate: "Dec 15, 2023",
      paidDate: null,
      items: [
        { description: "Logo Design", quantity: 1, rate: 1200, amount: 1200 },
        {
          description: "Brand Guidelines",
          quantity: 1,
          rate: 1000,
          amount: 1000,
        },
        {
          description: "Marketing Materials",
          quantity: 1,
          rate: 1000,
          amount: 1000,
        },
      ],
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: "INV-2023-003",
      project: "Mobile App Design",
      amount: 5800,
      status: "Paid",
      dueDate: "Nov 15, 2023",
      paidDate: "Nov 10, 2023",
      items: [
        { description: "App Design", quantity: 1, rate: 3500, amount: 3500 },
        {
          description: "Prototype Development",
          quantity: 1,
          rate: 2300,
          amount: 2300,
        },
      ],
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "INV-2023-004",
      project: "Website Maintenance",
      amount: 200,
      status: "Overdue",
      dueDate: "Nov 30, 2023",
      paidDate: null,
      items: [
        {
          description: "Monthly Maintenance",
          quantity: 1,
          rate: 200,
          amount: 200,
        },
      ],
      statusColor: "bg-red-100 text-red-800",
    },
  ];

  const totalPaid = invoices
    .filter((inv) => inv.status === "Paid")
    .reduce((sum, inv) => sum + inv.amount, 0);
  const totalPending = invoices
    .filter((inv) => inv.status !== "Paid")
    .reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl racing font-bold text-gray-900">
            Invoices & Billing
          </h1>
          <p className="openSans text-gray-600 mt-1">
            Track your project invoices and payment history
          </p>
        </div>
        <button className="px-6 py-3 bg-[#dc2828] text-black rounded-xl hover:bg-[#b91c1c] transition-colors racing font-bold">
          <i className="bx bx-download mr-2"></i>
          Download All
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <i className="bx bx-check-circle text-green-600 text-2xl"></i>
            </div>
          </div>
          <h3 className="text-2xl racing font-bold text-gray-900">
            ${totalPaid.toLocaleString()}
          </h3>
          <p className="openSans text-gray-600">Total Paid</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <i className="bx bx-time text-yellow-600 text-2xl"></i>
            </div>
          </div>
          <h3 className="text-2xl racing font-bold text-gray-900">
            ${totalPending.toLocaleString()}
          </h3>
          <p className="openSans text-gray-600">Pending Payment</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <i className="bx bx-receipt text-blue-600 text-2xl"></i>
            </div>
          </div>
          <h3 className="text-2xl racing font-bold text-gray-900">
            {invoices.length}
          </h3>
          <p className="openSans text-gray-600">Total Invoices</p>
        </div>
      </div>

      {/* Invoices List */}
      <div className="space-y-6">
        {invoices.map((invoice, index) => (
          <div
            key={invoice.id}
            ref={(el) => (invoicesRef.current[index] = el)}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              {/* Invoice Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl racing font-bold text-gray-900 mb-1">
                      {invoice.id}
                    </h3>
                    <p className="openSans text-gray-600 mb-2">
                      {invoice.project}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${invoice.statusColor}`}
                    >
                      {invoice.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl racing font-bold text-gray-900">
                      ${invoice.amount.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Invoice Details */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-gray-500 openSans">Due Date</span>
                    <p className="font-semibold text-gray-900 openSans">
                      {invoice.dueDate}
                    </p>
                  </div>
                  {invoice.paidDate && (
                    <div>
                      <span className="text-gray-500 openSans">Paid Date</span>
                      <p className="font-semibold text-gray-900 openSans">
                        {invoice.paidDate}
                      </p>
                    </div>
                  )}
                  <div>
                    <span className="text-gray-500 openSans">Items</span>
                    <p className="font-semibold text-gray-900 openSans">
                      {invoice.items.length} item(s)
                    </p>
                  </div>
                </div>

                {/* Invoice Items */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="racing font-bold text-gray-900 mb-3">
                    Invoice Items
                  </h4>
                  <div className="space-y-2">
                    {invoice.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center"
                      >
                        <div className="flex-1">
                          <span className="openSans text-sm text-gray-900">
                            {item.description}
                          </span>
                          <span className="openSans text-xs text-gray-500 ml-2">
                            ({item.quantity} × ${item.rate})
                          </span>
                        </div>
                        <span className="openSans font-semibold text-gray-900">
                          ${item.amount.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="lg:w-48 space-y-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-[#dc2828] text-black rounded-xl hover:bg-[#b91c1c] transition-colors racing font-bold"
                >
                  <i className="bx bx-download mr-2"></i>
                  Download PDF
                </motion.button>

                {invoice.status === "Pending" && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors racing font-bold"
                  >
                    <i className="bx bx-credit-card mr-2"></i>
                    Pay Now
                  </motion.button>
                )}

                {invoice.status === "Overdue" && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors racing font-bold"
                  >
                    <i className="bx bx-error mr-2"></i>
                    Pay Overdue
                  </motion.button>
                )}

                <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors racing font-bold">
                  <i className="bx bx-envelope mr-2"></i>
                  Email Invoice
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="racing font-bold text-xl text-gray-900 mb-6">
          Payment Methods
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              name: "Credit Card",
              icon: "bx-credit-card",
              desc: "Visa ending in 4242",
            },
            { name: "PayPal", icon: "bxl-paypal", desc: "john.doe@email.com" },
            {
              name: "Bank Transfer",
              icon: "bx-building-house",
              desc: "Wire transfer available",
            },
          ].map((method, index) => (
            <div
              key={method.name}
              className="flex items-center p-4 border border-gray-200 rounded-xl"
            >
              <div className="w-10 h-10 bg-[#dc2828] rounded-lg flex items-center justify-center mr-4">
                <i className={`bx ${method.icon} text-black text-xl`}></i>
              </div>
              <div>
                <h4 className="racing font-bold text-gray-900">
                  {method.name}
                </h4>
                <p className="openSans text-sm text-gray-600">{method.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvoicesTab;
