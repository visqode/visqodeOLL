'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer'; // Import Footer component

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e]">
      <div className="bg-black text-white">
        <Navigation />
      </div>
      <PageHero
        title="Welcome Back"
        subtitle="Sign In to Your Account"
        description="Access your VisQode dashboard and continue your digital journey with us."
        backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <main className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-gray-200 rounded-3xl p-8 w-full max-w-md shadow-lg"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl racing font-bold mb-2">Sign In</h1>
              <p className="openSans text-gray-600">
                Enter your credentials to access your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block openSans font-semibold mb-2 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6363] focus:border-transparent openSans transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block openSans font-semibold mb-2 text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6363] focus:border-transparent openSans transition-all duration-300"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#FF6363] border-gray-300 rounded focus:ring-[#FF6363]"
                  />
                  <span className="ml-2 openSans text-sm text-gray-600">Remember me</span>
                </label>
                <Link
                  href="#"
                  className="openSans text-sm text-[#FF6363] hover:underline font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-[#FF6363] text-black rounded-xl hover:bg-[#b91c1c] transition-all duration-300 racing font-bold"
              >
                Sign In
              </motion.button>
            </form>

            <div className="text-center mt-8">
              <p className="openSans text-gray-600">
                Don't have an account?{' '}
                <Link href="/signup" className="text-[#FF6363] hover:underline font-semibold">
                  Sign up here
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
                  <span className="px-2 bg-white text-gray-500 openSans">Or continue with</span>
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
      <Footer /> {/* Use Footer component */}
    </div>
  );
}
