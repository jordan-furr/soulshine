'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { aboutContent } from '@/lib/content/about';

const pullQuotes = {
  en: [
    '"From that point on, I knew that the sessions with her had an effect on me, that through her I would learn new things about myself and help me gain a fresh perspective."',
    '"She helped me free myself from fears that had blocked me since my childhood, so that I could close the door on the past."',
  ],
  de: [
    '„Ab da wusste ich, dass die Sitzungen bei ihr einen Effekt auf mich haben, dass ich durch sie Neues über mich in Erfahrung bringen und mir zu einer frischen Sichtweise verhelfen würden."',
    '„Sie hat mir geholfen, mich von Ängsten zu befreien, die mich bereits seit meiner Kindheit blockiert hatten, sodass ich mit der Vergangenheit abschliessen konnte."',
  ],
};

export default function TestimonialsPage() {
  const { locale } = useLocale();
  const t = aboutContent[locale];
  const gridRef = useRef<HTMLDivElement>(null);
  const quotes = pullQuotes[locale];

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

  const insertAfter = [2, 4];

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

      {/* ── Grid with interspersed pull-quotes ── */}
      <section className="testimonials-grid-section">
        <div className="testimonials-grid" ref={gridRef}>
          {t.testimonials.map((quote, i) => {
            const pullIndex = insertAfter.indexOf(i);
            return (
              <div key={i} style={{ display: 'contents' }}>
                {pullIndex !== -1 && (
                  <div className="testimonials-pullquote-card">
                    <blockquote className="testimonials-pullquote-card__text">
                      {quotes[pullIndex]}
                    </blockquote>
                  </div>
                )}
                <div className="testimonial-card" data-index={i}>
                  <div className="testimonial-card__quote-mark">&ldquo;</div>
                  <p className="testimonial-card__text">{quote}</p>
                </div>
              </div>
            );
          })}
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
