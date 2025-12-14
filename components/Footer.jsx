'use client';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialIcons = [
    'facebook-fill',
    'twitter-fill',
    'linkedin-fill',
    'instagram-fill',
    'youtube-fill',
  ];

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-center m-2 md:m-5 md:mx-auto">
      <motion.div
        className="bg-black rounded-2xl md:rounded-3xl p-6 md:p-10 w-full"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#E5E5E5] racing mb-4">
              READY TO WORK WITH US?
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-[#B0B0B0] openSans">
              PARTNER WITH OUR DESIGN AGENCY FOR YOUR BUSINESS WITH AMAZING RESULTS.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer flex-shrink-0"
          >
            <div className="bg-[var(--primary)] rounded-3xl w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center text-black font-bold shadow-[0_0_20px_rgba(220,40,40,0.5)] racing text-center text-sm md:text-base">
              <span>GET STARTED</span>
              <i className="ri-arrow-left-line mt-1 text-lg md:text-xl"></i>
            </div>
          </motion.div>
        </div>

        <hr className="border-t border-gray-700 my-8 md:my-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold text-[#E5E5E5] mb-3 racing">VisQode</h2>
            <p className="text-sm text-[#B0B0B0] leading-relaxed mb-4 openSans">
              We know how important customer experience is for a business and therefore, we strive.
            </p>
            <div className="flex justify-center sm:justify-start space-x-2">
              {socialIcons.map((icon) => (
                <motion.div
                  key={icon}
                  whileHover={{ scale: 1.2 }}
                  className="bg-[#333333] rounded-lg w-9 h-9 flex items-center justify-center cursor-pointer"
                >
                  <i className={`ri-${icon}`} style={{ color: 'white', fontSize: '1rem' }}></i>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold text-[#E5E5E5] mb-3 racing">Data Science</h2>
            <ul className="text-sm text-[#B0B0B0] space-y-2 openSans">
              <li>Business Use-Case</li>
              <li>Data Roles</li>
              <li>Blog</li>
              <li>Machine Learning</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold text-[#E5E5E5] mb-3 racing">About</h2>
            <ul className="text-sm text-[#B0B0B0] space-y-2 openSans">
              <li>Contact Us</li>
              <li>Support Us</li>
              <li>Community</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold text-[#E5E5E5] mb-3 racing">Programs</h2>
            <ul className="text-sm text-[#B0B0B0] space-y-2 openSans">
              <li>Learning Modules</li>
              <li>Partnership</li>
              <li>Events</li>
              <li>Data Analyst</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-10 text-[#B0B0B0] text-sm gap-3 openSans">
          <span>VisQode, INC.</span>
          <span>COPYRIGHT © 2023 VisQode</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
