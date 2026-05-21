'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { aboutContent } from '@/lib/content/about';

export default function TestimonialsPage() {
  const { locale } = useLocale();
  const t = aboutContent[locale];

  return (
    <div className="testimonials-page">

      {/* ── Header ── */}
      <section className="testimonials-header">
        <p className="testimonials-header__label">{t.testimonial}</p>
        <h1 className="testimonials-header__headline">
          {locale === 'de'
            ? 'Was Menschen über ihre Arbeit mit Sarah sagen.'
            : 'What people say about their work with Sarah.'}
        </h1>
      </section>

      {/* ── Grid ── */}
      <section className="testimonials-grid-section">
        <div className="testimonials-grid">
          {t.testimonials.map((quote, i) => (
            <div key={i} className="testimonial-card">
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