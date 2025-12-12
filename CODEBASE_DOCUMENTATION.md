# VisQode Codebase Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Page Routes](#page-routes)
4. [Component Documentation](#component-documentation)
5. [Services & Utilities](#services--utilities)
6. [Styling System](#styling-system)
7. [Dependencies Analysis](#dependencies-analysis)

---

## Project Overview

**VisQode** is a digital agency website built with modern web technologies, offering services including web development, brand building, and digital consulting.

### Tech Stack

| Technology           | Version | Purpose                         |
| -------------------- | ------- | ------------------------------- |
| Next.js              | 15.5.3  | React framework with App Router |
| React                | 19.1.1  | UI library                      |
| Tailwind CSS         | 3.4.17  | Utility-first CSS               |
| Framer Motion        | latest  | Animation library               |
| GSAP                 | latest  | Advanced animations             |
| EmailJS              | latest  | Email service                   |
| Google Generative AI | latest  | AI chatbot                      |

---

## Architecture

```
visqodeOLL/
├── app/                    # Next.js App Router pages
│   ├── layout.jsx          # Root layout
│   ├── page.jsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── about/              # About page
│   ├── consulting/         # Consulting page
│   ├── freelance-hire/     # Freelance marketplace page
│   ├── services/           # Services pages
│   │   ├── page.jsx        # Main services
│   │   ├── development/    # Development service
│   │   ├── brand-building/ # Brand building service
│   │   └── graphic-design/ # Graphic design service
│   ├── signin/             # Sign in page
│   └── signup/             # Sign up page
├── components/             # React components
│   ├── Features/           # Animation utility components
│   ├── Dashboard/          # UNUSED - Client dashboard
│   ├── Marketplace/        # UNUSED - Freelancer marketplace
│   ├── about/              # UNUSED - About section components
│   ├── consulting/         # UNUSED - Consulting components
│   ├── services/           # UNUSED - Services components
│   └── ui/                 # shadcn/ui components
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and services
├── public/                 # Static assets
└── styles/                 # Additional styles (deprecated)
```

---

## Page Routes

### Active Pages

| Route                      | File                                   | Description             | Components Used                                                                                                    |
| -------------------------- | -------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `/`                        | `app/page.jsx`                         | Homepage                | HeroSection, AboutSection, OurService, TeamSection, TestimonialsSection, ValueTrustLayer, LeadCaptureLayer, Footer |
| `/about`                   | `app/about/page.jsx`                   | About page (incomplete) | Navigation, Footer                                                                                                 |
| `/services`                | `app/services/page.jsx`                | Services overview       | Navigation, PageHero, ScrollReveal, Footer                                                                         |
| `/services/development`    | `app/services/development/page.jsx`    | Development services    | Navigation, PageHero, ScrollReveal, Footer                                                                         |
| `/services/brand-building` | `app/services/brand-building/page.jsx` | Brand building services | Navigation, PageHero, ScrollReveal, Footer                                                                         |
| `/services/graphic-design` | `app/services/graphic-design/page.jsx` | Graphic design services | Navigation, PageHero, ScrollReveal, Footer                                                                         |
| `/consulting`              | `app/consulting/page.jsx`              | Consulting services     | Navigation, PageHero, ScrollReveal, Footer                                                                         |
| `/freelance-hire`          | `app/freelance-hire/page.jsx`          | Hire freelancers        | Navigation, PageHero, ScrollReveal, Footer                                                                         |
| `/signin`                  | `app/signin/page.jsx`                  | User sign in            | Navigation, PageHero, Footer                                                                                       |
| `/signup`                  | `app/signup/page.jsx`                  | User sign up            | Navigation, PageHero, Footer                                                                                       |

---

## Component Documentation

### Core Components (Actively Used)

#### Navigation

**File:** `components/Navigation.jsx`
**Size:** 11KB (285 lines)
**Purpose:** Main navigation bar with mobile responsive menu

| Props | Type | Default | Description              |
| ----- | ---- | ------- | ------------------------ |
| None  | -    | -       | Self-contained component |

**Features:**

- Fixed position with scroll effect
- Mobile slide-out menu
- Services dropdown menu
- Smooth scroll to contact section

**Dependencies:**

- `next/link`
- `next/navigation` (usePathname, useRouter)
- React hooks (useState, useEffect)

---

#### HeroSection

**File:** `components/HeroSection.jsx`
**Size:** 4KB (103 lines)
**Purpose:** Main hero banner for homepage

**Child Components Used:**

- `Navigation`
- `SplitText` (text animation)
- `ShinyText` (shimmer effect)
- `CircularText` (unused in current implementation)

**Dependencies:**

- `framer-motion` (not directly, through child components)
- `gsap` (through SplitText)

---

#### AboutSection

**File:** `components/AboutSection.jsx`
**Size:** 3KB (66 lines)
**Purpose:** About us section with image and description

**Child Components Used:**

- `ScrollReveal`
- `GlareHover`

**Dependencies:**

- `framer-motion` (motion)

---

#### OurService

**File:** `components/OurService.jsx`
**Size:** 1KB (33 lines)
**Purpose:** Services overview section header with link to services page

**Child Components Used:**

- `ServicesDown`

---

#### ServicesDown

**File:** `components/ServicesDown.jsx`
**Size:** 4KB
**Purpose:** Services grid display with hover effects

**Dependencies:**

- `framer-motion` (motion)
- `gsap` (ScrollTrigger)

---

#### TeamSection

**File:** `components/TeamSection.jsx`
**Size:** 4KB
**Purpose:** Team members display

**Dependencies:**

- `framer-motion` (motion)

---

#### TestimonialsSection

**File:** `components/TestimonialsSection.jsx`
**Size:** 4KB (104 lines)
**Purpose:** Customer testimonials grid

**Dependencies:**

- `framer-motion` (motion)

---

#### ValueTrustLayer

**File:** `components/ValueTrustLayer.jsx`
**Size:** 0.5KB (19 lines)
**Purpose:** Wrapper for trust-building components

**Child Components Used:**

- `NewsletterSection` (active)
- ~~`CaseStudiesSection`~~ (commented out)
- ~~`BlogSection`~~ (commented out)
- ~~`TestimonialsCarousel`~~ (commented out)

---

#### LeadCaptureLayer

**File:** `components/LeadCaptureLayer.jsx`
**Size:** 0.3KB (17 lines)
**Purpose:** Wrapper for lead capture components

**Child Components Used:**

- `ContactForm` (active)
- `ChatWidget` (active)
- ~~`QuoteCalculator`~~ (commented out)

---

#### ContactForm

**File:** `components/ContactForm.jsx`
**Size:** 25KB (658 lines)
**Purpose:** Multi-step contact form with email integration

**Features:**

- Service selection
- Budget range selection
- Form validation
- EmailJS integration
- Success state animation
- Auto-scroll to section via hash

**Dependencies:**

- `framer-motion` (motion)
- `gsap` (ScrollTrigger)
- `@/lib/emailjs` (EmailService)

---

#### ChatWidget

**File:** `components/ChatWidget.jsx`
**Size:** 14KB (390 lines)
**Purpose:** AI-powered floating chat assistant

**Features:**

- Gemini AI integration
- Typing indicators
- Quick reply suggestions
- Contact detection

**Dependencies:**

- `framer-motion` (motion, AnimatePresence)
- `@/lib/gemini` (GeminiService)

---

#### NewsletterSection

**File:** `components/NewsletterSection.jsx`
**Size:** 10KB
**Purpose:** Newsletter subscription section

**Dependencies:**

- `framer-motion` (motion)

---

#### Footer

**File:** `components/Footer.jsx`
**Size:** 4KB
**Purpose:** Site footer with navigation and social links

---

#### PageHero

**File:** `components/PageHero.jsx`
**Size:** 2KB
**Purpose:** Reusable page header with background image

| Props           | Type   | Required | Description        |
| --------------- | ------ | -------- | ------------------ |
| title           | string | Yes      | Main heading       |
| subtitle        | string | Yes      | Subheading         |
| description     | string | Yes      | Description text   |
| backgroundImage | string | Yes      | URL for background |

---

### Feature Components (Animation Utilities)

#### ScrollReveal

**File:** `components/Features/ScrollReveal.jsx`
**Size:** 3KB
**Purpose:** Text reveal animation on scroll

| Props         | Type    | Default | Description        |
| ------------- | ------- | ------- | ------------------ |
| baseOpacity   | number  | 0       | Starting opacity   |
| enableBlur    | boolean | true    | Enable blur effect |
| baseRotation  | number  | 5       | Starting rotation  |
| blurStrength  | number  | 10      | Blur intensity     |
| textClassName | string  | ""      | Text CSS classes   |
| children      | node    | -       | Text content       |

---

#### SplitText

**File:** `components/Features/SplitText.jsx`
**Size:** 2KB
**Purpose:** Character-by-character text animation

| Props     | Type    | Default | Description        |
| --------- | ------- | ------- | ------------------ |
| text      | string  | -       | Text to animate    |
| className | string  | ""      | CSS classes        |
| delay     | number  | 100     | Animation delay    |
| duration  | number  | 0.3     | Animation duration |
| splitType | "chars" | "chars" | Split method       |
| from      | object  | {}      | GSAP from values   |
| to        | object  | {}      | GSAP to values     |

---

#### ShinyText

**File:** `components/Features/ShinyText.jsx`
**Size:** 0.6KB
**Purpose:** Shimmer/shine text effect

---

#### GlareHover

**File:** `components/Features/GlareHover.jsx`
**Size:** 2KB
**Purpose:** Glare effect on hover over images

---

#### CircularText

**File:** `components/Features/CircularText.jsx`
**Size:** 3KB
**Purpose:** Rotating circular text animation

---

#### ScrollVelocity

**File:** `components/Features/ScrollVelocity.jsx`
**Size:** 4KB
**Purpose:** Infinite scroll marquee effect

---

### UNUSED Components (Candidates for Removal)

#### Dashboard Components

All 6 files in `components/Dashboard/` are never imported:

- `DashboardOverview.jsx` (11KB) - Client dashboard main view
- `DashboardSidebar.jsx` (4KB) - Sidebar navigation
- `FilesTab.jsx` (12KB) - File management
- `InvoicesTab.jsx` (12KB) - Invoice management
- `ProjectsTab.jsx` (10KB) - Project management
- `SupportTab.jsx` (14KB) - Support tickets

#### Marketplace Components

All 4 files in `components/Marketplace/` are never imported:

- `FreelancerCard.jsx` (4KB)
- `FreelancerListing.jsx` (9KB)
- `FreelancerProfile.jsx` (17KB)
- `PostJobForm.jsx` (15KB)

---

## Services & Utilities

### EmailService

**File:** `lib/emailjs.js`
**Size:** 5KB
**Purpose:** Email sending via EmailJS

**Methods:**
| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `sendContactForm(formData)` | formData object | Promise<{success, message}> | Sends contact form |
| `sendUrgentNotification(subject, message, from)` | strings | Promise<{success}> | Sends urgent alert |
| `validateFormData(formData)` | formData object | {isValid, errors[]} | Validates form |

> ⚠️ **Security Issue:** Contains hardcoded credentials

---

### GeminiService

**File:** `lib/gemini.js`
**Size:** 12KB
**Purpose:** AI chat responses via Google Gemini

**Methods:**
| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `generateResponse(message, history)` | string, array | Promise<{success, message}> | Gets AI response |
| `checkForUrgentMatters(message)` | string | Promise<boolean> | Detects urgent keywords |
| `getFallbackResponse(message)` | string | string | Returns fallback if AI fails |
| `getQuickReplies(message)` | string | string[] | Returns suggested replies |

> ⚠️ **Security Issue:** Contains hardcoded API key

---

### Utilities

**File:** `lib/utils.ts`
**Size:** 0.2KB
**Purpose:** Tailwind class merging utility

```typescript
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Styling System

### CSS Variables (globals.css)

```css
:root {
  --primary: #dc2828; /* Brand red */
  --primary-dark: #b91c1c; /* Darker red */
  --dark: #161616; /* Background dark */
  --white: #fffffd; /* Off-white text */
  --gray-light: #f8f9fa;
  --gray-medium: #6c757d;
}
```

### Custom Utility Classes

| Class               | Purpose                  |
| ------------------- | ------------------------ |
| `.racing`           | Racing Sans One font     |
| `.openSans`         | Open Sans font           |
| `.font-rajdhani`    | Rajdhani font            |
| `.font-raleway`     | Raleway font             |
| `.gradient-primary` | Red gradient background  |
| `.gradient-dark`    | Dark gradient background |
| `.glass`            | Glassmorphism effect     |
| `.btn-luxury`       | Button with shine effect |
| `.animate-shine`    | Shine animation          |
| `.animate-fadeInUp` | Fade in from bottom      |

### Font Loading

Currently loading fonts from:

1. Google Fonts CSS imports in globals.css (3 fonts)
2. Google Fonts link in layout.jsx (1 font)
3. BoxIcons CDN in layout.jsx
4. RemixIcon CSS import in layout.jsx

---

## Dependencies Analysis

### Production Dependencies

| Package                  | Status     | Notes               |
| ------------------------ | ---------- | ------------------- |
| @emailjs/browser         | ✅ Used    | Contact form        |
| @google/generative-ai    | ✅ Used    | Chat widget         |
| @hookform/resolvers      | ⚠️ Partial | May be unused       |
| @radix-ui/\*             | ⚠️ Partial | Many unused         |
| @vercel/analytics        | ❓ Unknown | Not visible in code |
| class-variance-authority | ✅ Used    | UI components       |
| clsx                     | ✅ Used    | Class merging       |
| cmdk                     | ❌ Unused  | Command palette     |
| date-fns                 | ❌ Unused  | Date utilities      |
| embla-carousel-react     | ❌ Unused  | Carousel            |
| framer-motion            | ✅ Used    | Animations          |
| gsap                     | ✅ Used    | Animations          |
| lucide-react             | ✅ Used    | Icons               |
| next                     | ✅ Used    | Framework           |
| next-themes              | ❌ Unused  | Theme switching     |
| react-day-picker         | ❌ Unused  | Date picker         |
| react-hook-form          | ⚠️ Partial | May be unused       |
| react-resizable-panels   | ❌ Unused  | Resizable panels    |
| recharts                 | ❌ Unused  | Charts              |
| remixicon                | ✅ Used    | Icons               |
| sonner                   | ❌ Unused  | Toasts              |
| tailwind-merge           | ✅ Used    | Class merging       |
| vaul                     | ❌ Unused  | Drawer              |
| zod                      | ⚠️ Partial | May be unused       |

---

## Known Issues & Technical Debt

1. **Security:** Exposed API keys in source code
2. **Performance:** No lazy loading for heavy components
3. **Performance:** Render-blocking font loading
4. **Maintenance:** 60%+ of components are unused
5. **Maintenance:** Duplicate CSS files
6. **Consistency:** Mixed color schemes (#e97f33 vs #dc2828)
7. **Accessibility:** Missing ARIA labels on some interactive elements
8. **SEO:** Pages missing meta descriptions
9. **Authentication:** Signin/signup pages have no backend
10. **Animation:** Both GSAP and Framer Motion used (redundant)
