import emailjs from "@emailjs/browser"

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: "service_8mxaxaa",
  templateId: "template_r02gudy",
  publicKey: "tKxkx74KmTruWC0Q6",
  privateKey: "iSnWePCPz0s7s_PoVU67b",
}

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey)

class EmailService {
  constructor() {
    this.isInitialized = false
    this.init()
  }

  init() {
    try {
      emailjs.init(EMAILJS_CONFIG.publicKey)
      this.isInitialized = true
    } catch (error) {
      console.error("EmailJS initialization failed:", error)
      this.isInitialized = false
    }
  }

  async sendContactForm(formData) {
    if (!this.isInitialized) {
      throw new Error("EmailJS not initialized")
    }

    try {
      // Format services array for email template
      const servicesText = Array.isArray(formData.services)
        ? formData.services.join(", ")
        : formData.services || "Not specified"

      // Prepare template parameters
      const templateParams = {
        to_email: "visqode@gmail.com",
        from_name: formData.fullName,
        from_email: formData.email,
        business_name: formData.businessName || "Not provided",
        services_interested: servicesText,
        budget_range: formData.budget || "Not specified",
        project_description: formData.description,
        submission_date: new Date().toLocaleString(),
        reply_to: formData.email,
        urgent_contact: "ibwmahin@gmail.com", // For urgent matters
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey,
      )

      return {
        success: true,
        message: "Your message has been sent successfully! We'll get back to you within 24 hours.",
        response,
      }
    } catch (error) {
      console.error("EmailJS send failed:", error)

      // Provide specific error messages
      let errorMessage = "Failed to send message. Please try again or contact us directly."

      if (error.status === 400) {
        errorMessage = "Invalid form data. Please check all fields and try again."
      } else if (error.status === 401) {
        errorMessage = "Authentication failed. Please contact support."
      } else if (error.status === 403) {
        errorMessage = "Service temporarily unavailable. Please try again later."
      } else if (error.status === 429) {
        errorMessage = "Too many requests. Please wait a moment and try again."
      }

      return {
        success: false,
        message: errorMessage,
        error: error.message,
      }
    }
  }

  // Send urgent notification (for AI or system alerts)
  async sendUrgentNotification(subject, message, fromSystem = "VisQode AI") {
    if (!this.isInitialized) {
      throw new Error("EmailJS not initialized")
    }

    try {
      const templateParams = {
        to_email: "ibwmahin@gmail.com",
        from_name: fromSystem,
        from_email: "noreply@visqode.com",
        subject: `[URGENT] ${subject}`,
        message: message,
        timestamp: new Date().toLocaleString(),
        priority: "HIGH",
      }

      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        "template_urgent", // You may need to create this template
        templateParams,
        EMAILJS_CONFIG.publicKey,
      )

      return {
        success: true,
        response,
      }
    } catch (error) {
      console.error("Urgent notification failed:", error)
      return {
        success: false,
        error: error.message,
      }
    }
  }

  // Validate email format
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Validate form data
  validateFormData(formData) {
    const errors = []

    if (!formData.fullName || formData.fullName.trim().length < 2) {
      errors.push("Full name is required (minimum 2 characters)")
    }

    if (!formData.email || !this.validateEmail(formData.email)) {
      errors.push("Valid email address is required")
    }

    if (!formData.services || formData.services.length === 0) {
      errors.push("Please select at least one service")
    }

    if (!formData.budget) {
      errors.push("Please select a budget range")
    }

    if (!formData.description || formData.description.trim().length < 10) {
      errors.push("Project description is required (minimum 10 characters)")
    }

    return {
      isValid: errors.length === 0,
      errors,
    }
  }
}

export default EmailService
