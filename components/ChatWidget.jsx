'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import GeminiService from '@/lib/gemini';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! 👋 Welcome to VisQode. I'm your AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  // Simplify quick replies
  const [quickReplies, setQuickReplies] = useState([
    'What services do you offer?',
    'How much does a website cost?',
    'I need to hire a developer',
    "Let's schedule a call",
  ]);

  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);
  const geminiService = useRef(new GeminiService());

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => setIsOpen(!isOpen);

  const addMessage = (text, sender = 'user') => {
    const newMessage = {
      id: Date.now() + Math.random(),
      text,
      sender,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = async (messageText = inputValue) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now() + Math.random(),
      text: messageText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Keyword detection
    const lower = messageText.toLowerCase();
    const contactKeywords = ['connect', 'contact', 'talk', 'human', 'call', 'email'];
    if (contactKeywords.some((k) => lower.includes(k))) {
      setTimeout(() => {
        setIsTyping(false);
        addMessage(
          'You can reach our team strictly via:\n\n👉 [Contact Page](/contact)\n📧 hello@visqode.com',
          'bot'
        );
      }, 1000);
      return;
    }

    try {
      const convo = [...messages, userMessage];
      const response = await geminiService.current.generateResponse(messageText, convo);

      setTimeout(() => {
        setIsTyping(false);
        if (response.success) {
          addMessage(response.message, 'bot');
        } else {
          addMessage("I'm having trouble connecting right now. Please try again.", 'bot');
        }
      }, 1000 + Math.random() * 500);
    } catch (err) {
      setIsTyping(false);
      addMessage('System offline. Please contact us via email.', 'bot');
    }
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
    // Optional: Remove clicked reply or rotate them
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <motion.button
          onClick={toggleChat}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 md:w-16 md:h-16 bg-[var(--primary)] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[var(--primary-hover)] transition-all"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.i
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="ri-close-line text-2xl md:text-3xl"
              />
            ) : (
              <motion.i
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="ri-chat-smile-2-line text-2xl md:text-3xl"
              />
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-4 md:right-6 w-[90vw] md:w-96 h-[500px] md:h-[600px] bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[var(--bg-darker)] p-4 flex items-center justify-between border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-bold racing">
                  V
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] racing text-sm">
                    VisQode AI
                  </h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                      Online
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-[var(--text-secondary)] hover:text-[var(--primary)]"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--bg-body)]">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[var(--primary)] text-white rounded-br-none'
                        : 'bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] p-3 rounded-2xl rounded-bl-none flex gap-1">
                    <span className="w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length < 4 && (
              <div className="p-2 bg-[var(--bg-card)] border-t border-[var(--border-subtle)] overflow-x-auto whitespace-nowrap">
                <div className="flex gap-2 px-2">
                  {quickReplies.map((qr, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuickReply(qr)}
                      className="px-3 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-body)] text-xs text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                    >
                      {qr}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-[var(--bg-card)] border-t border-[var(--border-subtle)]">
              <div className="flex gap-2">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 bg-[var(--bg-body)] border border-[var(--border-subtle)] rounded-xl px-4 py-2 text-sm text-[var(--text-primary)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 flex items-center justify-center bg-[var(--primary)] text-white rounded-xl hover:bg-[var(--primary-hover)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <i className="ri-send-plane-fill"></i>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
