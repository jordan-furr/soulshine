'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { aboutContent } from '@/lib/content/about';

export default function TestimonialsPage() {
  const { locale } = useLocale();
  const t = aboutContent[locale];
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.testimonial-card');
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const i = Number(el.dataset.index || 0);
            setTimeout(() => el.classList.add('visible'), i * 120);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [locale]);

  return (
    <div className="testimonials-page">

      {/* ── Header ── */}
      <section className="testimonials-header">
        <p className="testimonials-header__label">{t.testimonial}</p>
        <h1 className="testimonials-header__headline reveal">
          {locale === 'de'
            ? 'Was Menschen über ihre Arbeit mit Sarah sagen.'
            : 'What people say about their work with Sarah.'}
        </h1>
      </section>

      {/* ── Grid ── */}
      <section className="testimonials-grid-section">
        <div className="testimonials-grid" ref={gridRef}>
          {t.testimonials.map((quote, i) => (
            <div key={i} className="testimonial-card" data-index={i}>
              <div className="testimonial-card__quote-mark">"</div>
              <p className="testimonial-card__text">{quote}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="testimonials-cta">
        <p className="testimonials-cta__label">
          {locale === 'de'
            ? 'Bereit, Ihre eigene Reise zu beginnen?'
            : 'Ready to begin your own journey?'}
        </p>
        <a href="/contact" className="testimonials-cta__btn">
          {t.ctaButton}
        </a>
      </section>

    </div>
  );
}