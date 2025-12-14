/**
 * @file gemini.js
 * @description AI Service integration using Google's Gemini Pro model.
 * Handles chat context, prompt engineering, and response generation.
 */

// services/geminiService.js
import { GoogleGenerativeAI } from '@google/generative-ai';
import EmailService from './emailjs';

// Initialize Gemini AI - API key should be in .env.local as NEXT_PUBLIC_GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

const VISQODE_CONTEXT = `
You are VisQode's AI assistant, representing a premium digital agency that specializes in:

SERVICES:
- Web Development (React, Next.js, custom solutions)
- Brand Identity & Logo Design
- UI/UX Design
- E-commerce Platforms
- Mobile App Development
- Digital Consulting
- Digital Marketing
- Hosting & Maintenance

COMPANY INFO:
- Company: VisQode
- Tagline: "We Build & Scale Digital Products"
- Mission: Founding successful companies by combining ideas with business expertise, capital and technical execution
- Experience: 5+ years in digital solutions
- Projects: 50+ completed projects
- Client Satisfaction: 100%
- Team: 24 expert professionals

TEAM MEMERS:
-FOUNDER AND CEO : ABDULLA AL MAHIN
-UI/UX EXPERT: YOUSUF MOLLAH
-AI AUTOMATION EXPERT: MOHAMMAD BIN SALIM
-DEVELOPER: ABDUL REHMAN

PRICING RANGES:
- Logo Design: From $500
- Complete Branding: From $2,000
- Website Development: From $3,500
- E-commerce Platform: From $5,000
- Mobile App: From $8,000
- Hosting & Maintenance: From $200/month

PROCESS:
1. Discovery & Consultation
2. Strategy Development
3. Design & Development
4. Testing & Quality Assurance
5. Launch & Deployment
6. Ongoing Support

CONTACT:
- Phone: +880 1854333256
- Email: visqode@gmail.com (general inquiries)
- Urgent Email: ibwmahin@gmail.com (urgent matters)
- Response Time: Within 24 hours

BRAND VOICE:
- Professional yet approachable
- Confident and knowledgeable
- Solution-focused
- Premium quality emphasis
- Results-driven

Always respond as VisQode's helpful assistant. Be concise, professional, and focus on how VisQode can help solve the user's digital challenges. Encourage users to book consultations or get quotes for specific projects. For urgent matters, direct users to ibwmahin@gmail.com.
`;

/**
 * Service class for interacting with Google Gemini AI.
 * Maintains conversation history and handles fallback logic.
 */
class GeminiService {
  constructor() {
    this.model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    this.conversationHistory = [];
    this.emailService = new EmailService();

    // Guards and telemetry used to avoid repeated fallback spam:
    this.lastBotMessage = ''; // last returned bot text (string)
    this.consecutiveErrors = 0; // consecutive exception/failure count
    this.consecutiveDuplicateResponses = 0; // same text returned repeatedly
    this.maxDuplicateThreshold = 2; // after this we'll return a stable fallback
  }

  /**
   * Safe extraction of text from the SDK response object.
   * Handles various return types from the Gemini SDK.
   * @param {Object|string} responseCandidate - Raw SDK response
   * @returns {Promise<string>} Extracted text content
   */
  async _extractTextFromResponse(responseCandidate) {
    // The SDK could return:
    // - a plain string
    // - an object with `.text()` that returns string or Promise<string>
    // - an object or stream-like response
    if (!responseCandidate) return '';

    try {
      // if it's a string already
      if (typeof responseCandidate === 'string') {
        return responseCandidate;
      }

      // if it has a text() function (common pattern)
      if (typeof responseCandidate.text === 'function') {
        const maybeText = responseCandidate.text();
        // await in case it's a Promise
        const text = await Promise.resolve(maybeText);
        if (typeof text === 'string') return text;
        return String(text);
      }

      // If it has .toString or is a simple object, try to coerce
      if (typeof responseCandidate === 'object') {
        if (typeof responseCandidate.toString === 'function') {
          return responseCandidate.toString();
        }
        return JSON.stringify(responseCandidate);
      }

      // Fallback coercion
      return String(responseCandidate);
    } catch (err) {
      // if extraction fails, return empty
      console.error('Failed to extract model text:', err);
      return '';
    }
  }

  /**
   * Generates an AI response using Google Gemini.
   * Features:
   * - Maintains conversation history context
   * - Detects urgent keywords
   * - Handles duplicates and failures gracefully
   * @param {string} userMessage - User's input text
   * @param {Array} conversationHistory - Previous messages
   * @returns {Promise<{success: boolean, message: string}>} Response object
   */
  async generateResponse(userMessage, conversationHistory = []) {
    try {
      // 1) urgent check (side-effect)
      await this.checkForUrgentMatters(userMessage);

      // 2) build context (keep last 6 messages)
      const contextMessages = conversationHistory
        .slice(-6)
        .map((msg) => `${msg.sender === 'user' ? 'User' : 'VisQode Assistant'}: ${msg.text}`)
        .join('\n');

      const prompt = `
${VISQODE_CONTEXT}

Previous conversation:
${contextMessages}

User: ${userMessage}

VisQode Assistant: `;

      // 3) call model
      const result = await this.model.generateContent(prompt);

      // The SDK you used returned something accessible at result.response in your original code.
      // Be defensive: try known access patterns.
      const possibleResponse = result?.response ?? result?.outputs?.[0] ?? result ?? null;

      const rawText = await this._extractTextFromResponse(possibleResponse);

      const text = (rawText || '').trim();

      // If model returned empty string -> treat as failure and fallback
      if (!text) {
        this.consecutiveErrors += 1;
        // return graceful fallback message (and mark as failure)
        return {
          success: false,
          message: this.getFallbackResponse(userMessage),
          reason: 'empty_model_response',
        };
      }

      // Duplicate detection
      if (text === this.lastBotMessage) {
        this.consecutiveDuplicateResponses += 1;
      } else {
        this.consecutiveDuplicateResponses = 0;
      }

      // If we've gotten the same model output repeatedly, avoid returning it endlessly.
      if (this.consecutiveDuplicateResponses > this.maxDuplicateThreshold) {
        // reset counters and return a stable fallback to avoid spam
        this.consecutiveDuplicateResponses = 0;
        this.consecutiveErrors += 1;
        return {
          success: false,
          message:
            "I'm having trouble generating a fresh response right now. Please try again in a moment or contact us at visqode@gmail.com for immediate help.",
          reason: 'repeated_duplicate_from_model',
        };
      }

      // Success path
      this.lastBotMessage = text;
      this.consecutiveErrors = 0;

      return {
        success: true,
        message: text,
      };
    } catch (error) {
      // catch-all: log and return fallback
      console.error('GeminiService.generateResponse Error:', error);
      this.consecutiveErrors += 1;

      // If errors keep happening, return an explicit stable message (helps UI avoid scheduling repeated reconnects)
      if (this.consecutiveErrors > 2) {
        return {
          success: false,
          message:
            "We're currently experiencing an outage with our AI responder. Please contact visqode@gmail.com or try again later.",
          error: error?.message ?? String(error),
        };
      }

      return {
        success: false,
        message: this.getFallbackResponse(userMessage),
        error: error?.message ?? String(error),
      };
    }
  }

  async checkForUrgentMatters(userMessage) {
    const urgentKeywords = [
      'urgent',
      'emergency',
      'asap',
      'immediately',
      'critical',
      'deadline',
      'help me now',
      'need help',
      'problem',
      'issue',
      'broken',
      'down',
      'not working',
      'error',
      'bug',
      'crash',
      'lost',
      'hacked',
    ];

    const lowerMessage = (userMessage || '').toLowerCase();
    const isUrgent = urgentKeywords.some((keyword) => lowerMessage.includes(keyword));

    if (isUrgent) {
      try {
        await this.emailService.sendUrgentNotification(
          'Urgent Chat Inquiry',
          `A user has indicated an urgent matter in the chat:

Message: "${userMessage}"
Timestamp: ${new Date().toLocaleString()}
User Agent: ${typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown'}

Please respond immediately to assist this user.`,
          'VisQode Chat AI'
        );
      } catch (err) {
        console.error('Failed to send urgent notification:', err);
      }
    }

    return isUrgent;
  }

  getFallbackResponse(userMessage) {
    const lowerMessage = (userMessage || '').toLowerCase();

    // urgent fallback
    const urgentKeywords = [
      'urgent',
      'emergency',
      'asap',
      'immediately',
      'critical',
      'help me now',
    ];
    const isUrgent = urgentKeywords.some((keyword) => lowerMessage.includes(keyword));

    if (isUrgent) {
      return `I understand this is urgent! For immediate assistance, please contact our team directly at ibwmahin@gmail.com or call +8801854333256. Our team will respond to urgent matters within 2 hours.`;
    }

    // common fallbacks
    if (
      lowerMessage.includes('price') ||
      lowerMessage.includes('cost') ||
      lowerMessage.includes('pricing')
    ) {
      return `Our projects typically range from $500 for logo design to $50,000+ for complex applications. I'd love to provide a personalized quote — email visqode@gmail.com to get started.`;
    }

    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      return `VisQode specializes in web development, brand identity, UI/UX design, e-commerce, mobile apps, and digital consulting. What type of project are you working on?`;
    }

    if (
      lowerMessage.includes('start') ||
      lowerMessage.includes('begin') ||
      lowerMessage.includes('how')
    ) {
      return `Getting started is easy — you can email visqode@gmail.com or use our site contact form. We'll respond within 24 hours to schedule a consultation.`;
    }

    if (
      lowerMessage.includes('time') ||
      lowerMessage.includes('timeline') ||
      lowerMessage.includes('long')
    ) {
      return `Typical timelines — Logo: 1-2 weeks; Website: 4-8 weeks; Complex apps: 8-16 weeks. What's your target date?`;
    }

    if (
      lowerMessage.includes('portfolio') ||
      lowerMessage.includes('work') ||
      lowerMessage.includes('examples')
    ) {
      return `You can view our case studies on the site — we have experience across SaaS, e-commerce, healthcare, and finance. Want examples from a particular industry?`;
    }

    if (
      lowerMessage.includes('contact') ||
      lowerMessage.includes('email') ||
      lowerMessage.includes('phone')
    ) {
      return `Reach us at visqode@gmail.com (general) or +1 (555) 123-4567. For urgent matters: ibwmahin@gmail.com.`;
    }

    // default fallback
    return `Thanks for your message — I'm here to help with VisQode services. For immediate assistance email visqode@gmail.com or for urgent matters: ibwmahin@gmail.com.`;
  }

  // Quick replies remain the same
  getQuickReplies(userMessage) {
    const lowerMessage = (userMessage || '').toLowerCase();

    if (lowerMessage.includes('urgent') || lowerMessage.includes('emergency')) {
      return ['Call now', 'Email urgent contact', 'Get immediate help'];
    }

    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return ['Get a quote', 'View pricing tiers', 'Book consultation'];
    }

    if (lowerMessage.includes('service')) {
      return ['Web development', 'Brand design', 'Mobile apps', 'View all services'];
    }

    if (lowerMessage.includes('start') || lowerMessage.includes('begin')) {
      return ['Book a call', 'Get quote', 'View portfolio', 'Contact team'];
    }

    return ['Get pricing', 'Book consultation', 'View services', 'See portfolio'];
  }
}

export default GeminiService;
