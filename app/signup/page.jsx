"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer"; // Declare the Footer variable

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!formData.terms) {
      alert("Please accept the terms and conditions");
      return;
    }
    console.log("Sign up attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e]">
      <div className="bg-black text-white">
        <Navigation />
      </div>

      <PageHero
        title="Join VisQode"
        subtitle="Start Your Digital Journey"
        description="Create your account and get access to our comprehensive digital solutions and expert guidance."
        backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <main className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-gray-200 rounded-3xl p-8 w-full max-w-lg shadow-lg"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl racing font-bold mb-2">Create Account</h1>
              <p className="openSans text-gray-600">
                Join our community and start building your digital presence
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block openSans font-semibold mb-2 text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dc2828] focus:border-transparent openSans transition-all duration-300"
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <label className="block openSans font-semibold mb-2 text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dc2828] focus:border-transparent openSans transition-all duration-300"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block openSans font-semibold mb-2 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dc2828] focus:border-transparent openSans transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block openSans font-semibold mb-2 text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dc2828] focus:border-transparent openSans transition-all duration-300"
                  placeholder="Create a password"
                  required
                />
              </div>

              <div>
                <label className="block openSans font-semibold mb-2 text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dc2828] focus:border-transparent openSans transition-all duration-300"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#dc2828] border-gray-300 rounded focus:ring-[#dc2828] mt-1"
                  required
                />
                <span className="ml-3 openSans text-sm text-gray-600">
                  I agree to the{" "}
                  <Link
                    href="#"
                    className="text-[#dc2828] hover:underline font-medium"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    className="text-[#dc2828] hover:underline font-medium"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-[#dc2828] text-black rounded-xl hover:bg-[#b91c1c] transition-all duration-300 racing font-bold"
              >
                Create Account
              </motion.button>
            </form>

            <div className="text-center mt-8">
              <p className="openSans text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="text-[#dc2828] hover:underline font-semibold"
                >
                  Sign in here
                </Link>
              </p>
            </div>

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500 openSans">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-500 hover:bg-gray-50 transition-all duration-300"
                >
                  <i className="bxl bx-google text-xl"></i>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-500 hover:bg-gray-50 transition-all duration-300"
                >
                  <i className="bxl bx-github text-xl"></i>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
