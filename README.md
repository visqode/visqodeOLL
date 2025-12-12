# VisQode - Digital Agency Website

We Build & Scale Digital Products

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```bash
# Google Gemini AI - Get your key from https://makersuite.google.com/app/apikey
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here

# EmailJS Configuration - Get credentials from https://www.emailjs.com/
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Installation

```bash
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm run start
```

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS
- **Animations:** Framer Motion, GSAP
- **Icons:** Remix Icon, Box Icons, Lucide React
- **Forms:** EmailJS integration
- **AI:** Google Gemini AI for chat assistant

## Project Structure

```
├── app/                 # Next.js App Router pages
├── components/          # React components
│   ├── Features/        # Animation utilities
│   └── ui/              # UI components
├── lib/                 # Services and utilities
├── public/              # Static assets
└── styles/              # Additional styles
```

## Documentation

- [Codebase Documentation](./CODEBASE_DOCUMENTATION.md)
- [Optimization Report](./OPTIMIZATION_REPORT.md)
