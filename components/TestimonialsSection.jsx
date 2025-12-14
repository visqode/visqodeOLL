'use client';
import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content:
        'VisQode transformed our digital presence. Their attention to detail exceeded expectations.',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, InnovateLab',
      content:
        'Working with VisQode was a game-changer — a stunning website that captures our brand.',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GrowthCo',
      content: 'Incredibly talented team — they created a digital experience our customers love.',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    // add more testimonials if you want a longer scroll
  ];

  // Configuration (tweak to taste)
  const baseSpeed = 80; // pixels per second
  const hoverFactor = 0.28; // fraction of base speed when hovered (0.28 => 28% speed)

  // Refs and state containers
  const containerRef = useRef(null);
  const trackRefs = useRef([null, null]);
  const xRefs = useRef([0, 0]); // current logical offset for each track
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const speedFactorRef = useRef(1);
  const trackWidthRef = useRef(0);

  // compute width of a single cycle (we duplicate items, so single = scrollWidth / 2)
  const computeTrackWidth = useCallback(() => {
    const r = trackRefs.current[0];
    if (!r) return 0;
    const total = r.scrollWidth || 0;
    const single = total / 2;
    trackWidthRef.current = single || 0;
    return trackWidthRef.current;
  }, []);

  // Set initial offset for the second row after we know the track width
  useEffect(() => {
    const setInitialOffset = () => {
      const w = computeTrackWidth();
      if (w) {
        // offset row 2 by half a cycle for staggered bento effect
        xRefs.current[1] = Math.floor(w / 2);
        // apply immediate transform to reflect offset before animation starts
        const node = trackRefs.current[1];
        if (node) node.style.transform = `translateX(${-(xRefs.current[1] % w)}px)`;
      }
    };

    setInitialOffset();
    const t = setTimeout(setInitialOffset, 300);
    window.addEventListener('load', setInitialOffset);
    return () => {
      clearTimeout(t);
      window.removeEventListener('load', setInitialOffset);
    };
  }, [computeTrackWidth]);

  // Core animation loop: updates transforms directly for smoothness
  useEffect(() => {
    const loop = (time) => {
      if (lastTimeRef.current == null) lastTimeRef.current = time;
      const dtSec = Math.min(0.05, (time - lastTimeRef.current) / 1000); // clamp dt to avoid large jumps
      lastTimeRef.current = time;

      const speed = baseSpeed * speedFactorRef.current;
      const singleWidth = trackWidthRef.current || computeTrackWidth();
      if (singleWidth) {
        for (let i = 0; i < 2; i++) {
          xRefs.current[i] += speed * dtSec;

          if (xRefs.current[i] >= singleWidth) {
            xRefs.current[i] -= singleWidth;
          }

          const node = trackRefs.current[i];
          if (node) {
            const translateX = -(xRefs.current[i] % singleWidth);
            node.style.transform = `translateX(${translateX}px)`;
          }
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    computeTrackWidth();
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
    };
  }, [computeTrackWidth]);

  // Recompute track width on resize (and re-apply transforms)
  useEffect(() => {
    const onResize = () => {
      computeTrackWidth();
      const w = trackWidthRef.current;
      for (let i = 0; i < 2; i++) {
        const node = trackRefs.current[i];
        if (node && w) node.style.transform = `translateX(${-(xRefs.current[i] % w)}px)`;
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [computeTrackWidth]);

  // Pointer handlers for hover slow and click-hold stop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handlePointerEnter = () => {
      speedFactorRef.current = hoverFactor;
    };
    const handlePointerLeave = () => {
      speedFactorRef.current = 1;
    };
    const handlePointerDown = () => {
      speedFactorRef.current = 0;
    };
    const handlePointerUp = () => {
      speedFactorRef.current = hoverFactor;
    };
    const handlePointerCancel = () => {
      speedFactorRef.current = 1;
    };

    container.addEventListener('pointerenter', handlePointerEnter);
    container.addEventListener('pointerleave', handlePointerLeave);
    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('pointercancel', handlePointerCancel);

    return () => {
      container.removeEventListener('pointerenter', handlePointerEnter);
      container.removeEventListener('pointerleave', handlePointerLeave);
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointercancel', handlePointerCancel);
    };
  }, []);

  // Card component — polished visuals
  const TestimonialCard = ({ t }) => (
    <article
      className="min-w-[260px] max-w-[320px] flex-shrink-0 rounded-2xl overflow-hidden transform transition-all duration-300"
      style={{
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)',
        border: '1px solid rgba(255,255,255,0.08)', // soft border (adjust alpha to taste: 0.1 for white/10)
        boxShadow: '0 6px 18px rgba(0,0,0,0.55)',
      }}
      aria-label={`${t.name} — ${t.role}`}
    >
      <div className="p-6 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
        <div className="flex mb-3 items-center">
          <div className="flex items-center mr-2">
            {[...Array(t.rating)].map((_, i) => (
              <svg
                key={i}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="var(--primary)"
                className="inline-block mr-1"
                aria-hidden="true"
              >
                <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.557L19.335 24 12 20.201 4.665 24 6.3 15.307 0.6 9.75l7.732-1.732z" />
              </svg>
            ))}
          </div>
        </div>

        <p
          className="text-gray-300 text-sm leading-snug mb-4 openSans cursor-default"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          "{t.content.length > 120 ? t.content.slice(0, 117).trim() + '...' : t.content}"
        </p>

        <div className="flex items-center">
          <img
            src={t.avatar || '/placeholder.svg'}
            alt={t.name}
            className="w-10 h-10 rounded-lg object-cover mr-3 flex-shrink-0"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.45)' }}
          />
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] text-sm racing">{t.name}</h4>
            <p className="text-gray-400 text-xs openSans">{t.role}</p>
          </div>
        </div>
      </div>
    </article>
  );

  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2 className="text-4xl lg:text-5xl racing font-bold text-[var(--text-primary)] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto openSans">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </motion.div>

        {/* Carousel container */}
        <div
          ref={containerRef}
          className="relative select-none overflow-hidden rounded-xl"
          aria-roledescription="carousel"
        >
          {/* Fade overlays (left & right) — softened so content isn't fully hidden */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-28 z-30"
            style={{
              background: 'linear-gradient(90deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.0) 72%)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-28 z-30"
            style={{
              background: 'linear-gradient(270deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.0) 72%)',
            }}
          />

          {/* Two rows to create bento grid effect. Use gap instead of margins. */}
          <div className="space-y-6 py-6">
            {/* Row 1 */}
            <div
              ref={(el) => (trackRefs.current[0] = el)}
              className="flex gap-x-6 items-start will-change-transform"
              style={{ transform: 'translateX(0px)' }}
            >
              {duplicated.map((t, i) => (
                <TestimonialCard key={`r1-${i}-${t.name}`} t={t} />
              ))}
            </div>

            {/* Row 2 (staggered; offset applied after measurement) */}
            <div
              ref={(el) => (trackRefs.current[1] = el)}
              className="flex gap-x-6 items-start will-change-transform"
              style={{ transform: 'translateX(0px)' }}
            >
              {duplicated.map((t, i) => (
                <TestimonialCard key={`r2-${i}-${t.name}`} t={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
