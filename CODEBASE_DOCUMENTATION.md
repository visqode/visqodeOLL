# VisQode Codebase Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Architecture](#architecture)
4. [Page Routes](#page-routes)
5. [Component Documentation](#component-documentation)
6. [Services & Utilities](#services--utilities)
7. [Styling System](#styling-system)
8. [Dependencies Analysis](#dependencies-analysis)

---

## Project Overview

**VisQode** is a digital agency website built with cutting-edge web technologies. It features a modern, animated interface to showcase services like web development, brand building, and digital consulting.

### Tech Stack

| Technology           | Version | Purpose                         |
| -------------------- | ------- | ------------------------------- |
| Next.js              | 16.0.10 | React framework with App Router |
| React                | 19.2.3  | UI library                      |
| Tailwind CSS         | 3.4.17  | Utility-first CSS               |
| Framer Motion        | latest  | Animation library               |
| GSAP                 | latest  | Advanced animations             |
| EmailJS              | latest  | Email service                   |
| Google Generative AI | latest  | AI chatbot                      |

---

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or pnpm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd visqodeOLL
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Environment Setup:**
    Create a `.env.local` file in the root directory and add the following keys:
    ```env
    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
    NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

Build the application for deployment:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## Architecture

The project follows the standard Next.js App Router structure.

```
visqodeOLL/
├── app/                    # Next.js App Router pages
│   ├── layout.jsx          # Root layout (fonts, metadata)
│   ├── page.jsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── about/              # About page
│   ├── consulting/         # Consulting page
│   ├── freelance-hire/     # Freelance marketplace page
│   ├── services/           # Services pages
│   ├── signin/             # Sign in page
│   └── signup/             # Sign up page
├── components/             # React components
│   ├── Features/           # Animation utility components
│   ├── Dashboard/          # UNUSED - Client dashboard components
│   ├── Marketplace/        # UNUSED - Freelancer marketplace components
│   ├── about/              # UNUSED - About section components
│   ├── consulting/         # UNUSED - Consulting components
│   ├── services/           # UNUSED - Services components
│   └── ui/                 # Reusable UI elements (Button, Input)
├── lib/                    # Utilities and services
│   ├── emailjs.js          # Email service wrapper
│   ├── gemini.js           # AI service wrapper
│   └── utils.ts            # Class merging utility
├── public/                 # Static assets
└── styles/                 # Additional styles
```

### Data Flow

1.  **Pages** (`app/*`) are the entry points.
2.  **Components** (`components/*`) render the UI.
3.  **Services** (`lib/*`) handle external mutations (sending emails, calling AI).
4.  **Utilities** (`lib/utils.ts`) help with styling logic.

---

## Page Routes

| Route                      | File                                   | Description             |
| -------------------------- | -------------------------------------- | ----------------------- |
| `/`                        | `app/page.jsx`                         | Homepage                |
| `/about`                   | `app/about/page.jsx`                   | About page              |
| `/services`                | `app/services/page.jsx`                | Services overview       |
| `/services/development`    | `app/services/development/page.jsx`    | Development services    |
| `/services/brand-building` | `app/services/brand-building/page.jsx` | Brand building services |
| `/consulting`              | `app/consulting/page.jsx`              | Consulting services     |
| `/freelance-hire`          | `app/freelance-hire/page.jsx`          | Hire freelancers        |
| `/signin`                  | `app/signin/page.jsx`                  | User sign in            |
| `/signup`                  | `app/signup/page.jsx`                  | User sign up            |

---

## Component Documentation

### Core Components

#### Navigation (`components/Navigation.jsx`)

- **Purpose**: Main navigation bar with responsive mobile menu.
- **Features**: Scroll-aware visibility, mobile slide-out, smooth scrolling links.

#### Footer (`components/Footer.jsx`)

- **Purpose**: Site-wide footer containing links and social info.

#### ContactForm (`components/ContactForm.jsx`)

- **Purpose**: Multi-step form for user inquiries.
- **Integration**: Uses `EmailService` to send data.
- **Validation**: Validates input before submission.

#### ChatWidget (`components/ChatWidget.jsx`)

- **Purpose**: Floating AI assistant.
- **Integration**: Uses `GeminiService` for responses.
- **Features**: Urgent matter detection, fallback responses, typing indicators.

### UI Components (`components/ui`)

Reusable base components tailored for the design system.

- **Button** (`components/ui/button.tsx`): Standard button with variants (default, destructive, outline, secondary, ghost, link).
- **Input** (`components/ui/input.tsx`): Standard text input field.

### Feature Components (`components/Features`)

Specialized components for visual effects.

- **ScrollReveal.jsx**: Animates text appearance on scroll.
- **SplitText.jsx**: Animates text character by character.
- **ShinyText.jsx**: Adds a shimmering light effect to text.
- **GlareHover.jsx**: Adds a 3D glare effect to images on hover.
- **ScrollVelocity.jsx**: Creates an infinite scrolling marquee.

---

## Services & Utilities

### EmailService (`lib/emailjs.js`)

Wrapper around `@emailjs/browser` to handle email dispatching.

**Key Methods:**

- `init()`: Initializes the EmailJS SDK.
- `sendContactForm(formData)`: Formats and sends contact form data. Returns a promise with success/failure status.
- `sendUrgentNotification(subject, message)`: Sends critical alerts to the admin email.
- `validateFormData(formData)`: synchronous validation helper.

**Usage:**

```javascript
import EmailService from '@/lib/emailjs';
const emailService = new EmailService();
await emailService.sendContactForm(data);
```

### GeminiService (`lib/gemini.js`)

Service for interacting with Google's Gemini AI.

**Key Methods:**

- `generateResponse(userMessage, history)`: Sends message to Gemini and returns AI response. Maintains context of "VisQode" brand.
- `checkForUrgentMatters(message)`: Analyze text for keywords like "urgent", "hack", "broken". If found, triggers an urgent email notification.
- `getFallbackResponse(message)`: Returns static, safe responses if the AI is unreachable or fails.

**Usage:**

```javascript
import GeminiService from '@/lib/gemini';
const gemini = new GeminiService();
const response = await gemini.generateResponse('Hello');
```

### Utilities (`lib/utils.ts`)

- `cn(...inputs)`: Merges Tailwind CSS classes, handling conflicts using `clsx` and `tailwind-merge`.

---

## Styling System

The project uses **Tailwind CSS** with a custom configuration.

### Global Variables

Located in `app/globals.css`.

- `--primary`: #ff6363 (Brand Red)
- `--dark`: #161616 (Background)

### Fonts

- **Racing Sans One**: Headlines & Display.
- **Open Sans**: Body text.
- **Rajdhani / Raleway**: Accents.

---

## Dependencies Analysis

### Production

- **Next.js 16+**: Latest framework features (Server Actions, App Router).
- **React 19**: Supporting latest React paradigms.
- **Framer Motion & GSAP**: High-fidelity animations.
- **Generative AI**: For the Chat Widget.

### Unused/Partial

- **Radix UI**: Many `@radix-ui` primitive packages are installed (accordion, dialog, etc.) but only a few seem actively used in `components/ui`.
- **Zod / React Hook Form**: Installed but usage appears minimal or refactored out in some areas.

### Known Issues

- **Hardcoded Secrets**: Some `lib` files may contain fallback empty strings or rely on proper `.env` setup which is critical.
- **Unused Components**: A significant number of components in `components/Dashboard`, `components/Marketplace`, etc., are present but not imported in the active routes.
