"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import GeminiService from "@/lib/gemini";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! 👋 Welcome to VisQode. I'm your AI assistant, here to help with any questions about our digital services.",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
    {
      id: 2,
      text: "I can help you with pricing, services, project timelines, or connect you with our team. What would you like to know?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState([
    "  What are your pricing options?",
    "  How do I get started?",
    "  Can we schedule a call?",
    "  Show me your portfolio",
  ]);

  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);
  const geminiService = useRef(new GeminiService());

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => setIsOpen(!isOpen);

  const addMessage = (text, sender = "user") => {
    const newMessage = {
      id: Date.now() + Math.random(),
      text,
      sender,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = async (messageText = inputValue) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now() + Math.random(),
      text: messageText,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // ✅ Detect “connect/contact” messages
    const lower = messageText.toLowerCase();
    const contactKeywords = ["connect", "contact", "reach out", "talk", "team", "call"];
    const shouldShowContactInfo = contactKeywords.some((word) => lower.includes(word));

    if (shouldShowContactInfo) {
      setTimeout(() => {
        setIsTyping(false);
        addMessage(
          "You can connect with our team directly here:\n\n👉 [Contact Page](https://visqode.com/contact)\n📧 Email: hello@visqode.com",
          "bot",
        );
      }, 1000);
      return;
    }

    // 🤖 Normal AI flow
    try {
      const convo = [...messages, userMessage];
      const response = await geminiService.current.generateResponse(messageText, convo);

      setTimeout(
        () => {
          setIsTyping(false);

          if (response.success) {
            addMessage(response.message, "bot");
            const newQuickReplies = geminiService.current.getQuickReplies?.(messageText) ?? [];
            if (newQuickReplies.length > 0) {
              setQuickReplies(newQuickReplies.map((reply) => `💡 ${reply}`));
            }
          } else {
            addMessage(response.message, "bot");
          }
        },
        1000 + Math.random() * 1000,
      );
    } catch (error) {
      setIsTyping(false);
      addMessage(
        "I'm experiencing some technical difficulties. Please try again later or contact our team at hello@visqode.com.",
        "bot",
      );
    }
  };

  const handleQuickReply = (reply) => {
    const cleanReply = reply.replace(/[💰🚀📞💼💡]/gu, "").trim();
    handleSendMessage(cleanReply);
    setQuickReplies([]); // Clear quick replies after user clicks one
  };

  // ✅ Always show online
  const connectionStatus = {
    color: "bg-green-500",
    text: "AI Assistant Online",
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <motion.button
          onClick={toggleChat}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-[#e97f33] rounded-full shadow-lg flex items-center justify-center text-black hover:bg-[#f0883e] transition-all duration-300 relative"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.i
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="bx bx-x text-2xl"
              />
            ) : (
              <motion.i
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="bx bx-bot text-2xl"
              />
            )}
          </AnimatePresence>

          {!isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs racing font-bold"
            >
              AI
            </motion.div>
          )}
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#e97f33] to-[#f0883e] p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-3 relative">
                  <span className="text-[#e97f33] racing font-bold">V</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="racing font-bold text-black">VisQode AI Assistant</h4>
                  <div className="flex items-center">
                    <div className={`w-2 h-2 ${connectionStatus.color} rounded-full mr-2`}></div>
                    <span className="text-black/70 openSans text-sm">{connectionStatus.text}</span>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleChat}
                className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center hover:bg-black/20 transition-colors"
              >
                <i className="bx bx-x text-black"></i>
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] ${message.sender === "user" ? "order-2" : "order-1"}`}>
                    <div
                      className={`p-3 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-[#e97f33] text-black"
                          : "bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 border border-gray-200"
                      }`}
                    >
                      <p className="openSans text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 openSans">{message.timestamp}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-[#e97f33] to-[#f0883e] rounded-full flex items-center justify-center mr-2 relative">
                    <span className="text-black racing font-bold text-sm">V</span>
                  </div>
                  <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-3 rounded-2xl border border-gray-200">
                    <div className="flex space-x-1">
                      {[0, 0.2, 0.4].map((delay, i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 0.6,
                            repeat: Number.POSITIVE_INFINITY,
                            delay,
                          }}
                          className="w-2 h-2 bg-[#e97f33] rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ✅ Suggested Questions (restored) */}
            {quickReplies.length > 0 && messages.length <= 4 && (
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <p className="text-xs text-gray-500 mb-3 openSans">Suggested questions:</p>
                <div className="grid grid-cols-1 gap-2">
                  {quickReplies.slice(0, 3).map((reply, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleQuickReply(reply)}
                      className="p-3 bg-white hover:bg-[#e97f33]/10 hover:border-[#e97f33] border border-gray-200 rounded-xl text-xs openSans text-left transition-all duration-300 flex items-center"
                    >
                      <span className="mr-2">{reply.charAt(0)}</span>
                      {reply.slice(2)}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && !isTyping && handleSendMessage()}
                  placeholder={isTyping ? "AI is thinking..." : "Ask me anything about VisQode..."}
                  disabled={isTyping}
                  className="flex-1 p-3 border border-gray-200 rounded-xl focus:border-[#e97f33] focus:outline-none openSans text-sm disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
                <motion.button
                  whileHover={{ scale: isTyping ? 1 : 1.1 }}
                  whileTap={{ scale: isTyping ? 1 : 0.9 }}
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 bg-[#e97f33] rounded-xl flex items-center justify-center text-black hover:bg-[#f0883e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isTyping ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                    />
                  ) : (
                    <i className="bx bx-send"></i>
                  )}
                </motion.button>
              </div>

              <p className="text-xs text-gray-400 mt-2 openSans text-center">
                Powered by AI • Responses may vary • For urgent matters: visqode@gmail.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
