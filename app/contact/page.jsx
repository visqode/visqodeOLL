'use client';

import { useState, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import EmailService from '@/lib/emailjs';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const emailService = useRef(new EmailService());

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Map form fields to EmailService expected format
      // Note: EmailService expects 'services', 'budget', 'description'
      // We are mapping our simple form to these fields
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        services: [formData.subject], // Using subject as service interest
        budget: 'Not specified',
        description: formData.message,
        businessName: 'Not provided',
      };

      const result = await emailService.current.sendContactForm(payload);

      if (result.success) {
        setStatus('success');
        setFormData({ fullName: '', email: '', subject: 'General Inquiry', message: '' });
      } else {
        console.error('Submission failed:', result.message);
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };
  return (
    <div className="min-h-screen bg-[var(--bg-body)] text-[var(--text-primary)] selection:bg-[var(--primary)] selection:text-white">
      <Navigation />

      {/* Hero */}
      <header className="pt-32 pb-20 px-4 md:pt-48 md:pb-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black racing mb-8 leading-[0.9] tracking-tighter">
              START THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-white/50">
                CONVERSATION.
              </span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center max-w-4xl">
              <div className="w-20 h-1 bg-[var(--primary)] rounded-full"></div>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] openSans font-light leading-relaxed max-w-2xl">
                Ready to transform your digital presence? We are ready to help. Fill out the form
                below or reach out directly.
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        <section className="py-20 border-t border-[var(--border-subtle)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold racing mb-6 text-[var(--text-primary)]">
                    CONTACT INFO
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--bg-card)] flex items-center justify-center border border-[var(--border-subtle)]">
                        <i className="ri-mail-line text-[var(--primary)]"></i>
                      </div>
                      <span className="text-lg text-[var(--text-secondary)]">
                        hello@visqode.com
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--bg-card)] flex items-center justify-center border border-[var(--border-subtle)]">
                        <i className="ri-phone-line text-[var(--primary)]"></i>
                      </div>
                      <span className="text-lg text-[var(--text-secondary)]">
                        +1 (555) 000-0000
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--bg-card)] flex items-center justify-center border border-[var(--border-subtle)]">
                        <i className="ri-map-pin-line text-[var(--primary)]"></i>
                      </div>
                      <span className="text-lg text-[var(--text-secondary)]">
                        San Francisco, CA
                      </span>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div>
                  <h2 className="text-2xl font-bold racing mb-6 text-[var(--text-primary)]">
                    FOLLOW US
                  </h2>
                  <div className="flex gap-4">
                    {['linkedin', 'twitter-x', 'instagram', 'github'].map((icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="w-12 h-12 rounded-full bg-[var(--bg-card)] flex items-center justify-center border border-[var(--border-subtle)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                      >
                        <i className={`ri-${icon}-fill text-xl`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-subtle)]">
                <h2 className="text-2xl font-bold racing mb-8 text-[var(--text-primary)]">
                  SEND A MESSAGE
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">
                        Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full bg-[var(--bg-darker)] border border-[var(--border-subtle)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[var(--bg-darker)] border border-[var(--border-subtle)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-[var(--bg-darker)] border border-[var(--border-subtle)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors"
                    >
                      <option>General Inquiry</option>
                      <option>Project Proposal</option>
                      <option>Careers</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full bg-[var(--bg-darker)] border border-[var(--border-subtle)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    disabled={status === 'loading'}
                    className="w-full bg-[var(--primary)] text-black font-bold racing py-4 rounded-lg hover:bg-[var(--primary-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-center"
                    >
                      Message sent successfully! We'll be in touch.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-center"
                    >
                      Something went wrong. Please try again.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
