'use client';
import dynamic from 'next/dynamic';

// Lazy load heavy components for better performance
const ContactForm = dynamic(() => import('./ContactForm'), {
  loading: () => (
    <div className="py-20 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-96 animate-pulse bg-[#1a1a1a] rounded-2xl" />
      </div>
    </div>
  ),
});

const ChatWidget = dynamic(() => import('./ChatWidget'), {
  ssr: false, // Client-only component
});

const LeadCaptureLayer = () => {
  return (
    <>
      <ContactForm />
      <ChatWidget />
    </>
  );
};

export default LeadCaptureLayer;
