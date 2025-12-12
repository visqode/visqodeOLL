# VisQode Optimization Report

## Quick Summary

| Metric                  | Current | After Optimization |
| ----------------------- | ------- | ------------------ |
| Components              | 104     | ~35                |
| Bundle Size (estimated) | ~800KB  | ~350KB             |
| npm Dependencies        | 40+     | ~25                |
| CSS Files               | 2       | 1                  |
| External Fonts          | 4       | 2 (optimized)      |

---

## 🔴 Critical Issues (Fix Immediately)

### 1. Exposed API Keys

**Files affected:**

- `lib/gemini.js` - Line 6: Gemini API key
- `lib/emailjs.js` - Lines 4-9: EmailJS credentials

**Fix:**

```bash
# Create .env.local file
echo "NEXT_PUBLIC_GEMINI_API_KEY=your_key_here" >> .env.local
echo "NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_8mxaxaa" >> .env.local
echo "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_r02gudy" >> .env.local
echo "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tKxkx74KmTruWC0Q6" >> .env.local
```

Then update the files to use `process.env.NEXT_PUBLIC_*` variables.

---

## 🟠 Unused Code to Remove

### Complete Directories (Safe to Delete)

```bash
# These directories contain 23 files that are never imported anywhere
rm -rf components/Dashboard/
rm -rf components/Marketplace/
rm -rf components/about/
rm -rf components/consulting/
rm -rf components/services/
rm -rf styles/
```

### Individual Components (Safe to Delete)

```bash
rm components/ServicesSection.jsx
rm components/ProjectsSection.jsx
rm components/CTASection.jsx
rm components/TrustedBy.jsx
rm components/theme-provider.tsx
rm components/ui/ScrollText.jsx
rm components/ui/ServicesDown.jsx
```

### Unused UI Components (40+ files)

```bash
# Keep only these UI components:
# - button.tsx, input.tsx, card.tsx (verify usage first)
# Delete all others from components/ui/
```

### Unused npm Packages

```bash
npm uninstall recharts embla-carousel-react react-day-picker date-fns \
  input-otp react-resizable-panels cmdk vaul next-themes sonner
```

---

## 🟡 Performance Optimizations

### 1. Lazy Load Heavy Components

**File:** `components/LeadCaptureLayer.jsx`

```jsx
import dynamic from 'next/dynamic';

const ChatWidget = dynamic(() => import('./ChatWidget'), { ssr: false });
const ContactForm = dynamic(() => import('./ContactForm'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-800 rounded-xl" />,
});
```

### 2. Optimize Font Loading

**File:** `app/layout.jsx`

```jsx
// Replace synchronous link with async loading
<link href="https://fonts.googleapis.com/css2?family=Funnel+Sans..." rel="preload" as="style" />
```

### 3. Add Next.js Image Optimization

Replace `<img>` tags with `<Image>` from `next/image` in:

- `HeroSection.jsx`
- `AboutSection.jsx`
- `TestimonialsSection.jsx`
- All service pages

---

## 🟢 Code Quality Improvements

### 1. Fix Color Inconsistency

Update old color `#e97f33` to `#dc2828` in:

- `app/signin/page.jsx`
- `app/signup/page.jsx`

### 2. Remove Commented Code

Clean up unused imports in:

- `components/LeadCaptureLayer.jsx` (QuoteCalculator)
- `components/ValueTrustLayer.jsx` (CaseStudiesSection, BlogSection, TestimonialsCarousel)

### 3. Consolidate Animation Libraries

Consider removing GSAP and using only Framer Motion, or vice versa.

---

## Files to Keep

### Essential Components (23 files)

```
components/
├── Navigation.jsx
├── HeroSection.jsx
├── AboutSection.jsx
├── OurService.jsx
├── ServicesDown.jsx
├── TeamSection.jsx
├── TestimonialsSection.jsx
├── ValueTrustLayer.jsx
├── LeadCaptureLayer.jsx
├── ContactForm.jsx
├── ChatWidget.jsx
├── NewsletterSection.jsx
├── PageHero.jsx
├── Footer.jsx
├── QuoteCalculator.jsx (optional - currently commented)
├── CaseStudiesSection.jsx (optional - currently commented)
├── BlogSection.jsx (optional - currently commented)
├── TestimonialsCarousel.jsx (optional - currently commented)
└── Features/
    ├── ScrollReveal.jsx
    ├── SplitText.jsx
    ├── ShinyText.jsx
    ├── GlareHover.jsx
    ├── CircularText.jsx
    └── ScrollVelocity.jsx
```

### UI Components to Keep (verify usage)

```
components/ui/
├── button.tsx
├── input.tsx
├── card.tsx
├── (verify and keep others as needed)
```

---

## Testing Checklist

After cleanup, verify:

- [ ] Homepage loads without errors
- [ ] Navigation works (desktop + mobile)
- [ ] All service pages render
- [ ] Contact form submits successfully
- [ ] Chat widget opens and responds
- [ ] Signin/signup pages display
- [ ] No console errors in browser
- [ ] Build completes without errors

---

## Commands

```bash
# 1. Backup current state
git add -A && git commit -m "Backup before optimization"

# 2. Analyze current bundle
npm run build

# 3. After changes, analyze new bundle
npm run build

# 4. Run development server
npm run dev

# 5. Check for unused exports
npx depcheck
```

---

## Estimated Impact

| Metric                 | Improvement       |
| ---------------------- | ----------------- |
| Initial bundle         | -40% to -60%      |
| First Contentful Paint | -0.5s to -1.5s    |
| Time to Interactive    | -1s to -2s        |
| Lighthouse Performance | +15 to +25 points |
| Build time             | -20% to -30%      |
