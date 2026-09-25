'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { retreatsContent, retreatData } from '@/lib/content/services';
import { getTranslations } from '@/lib/i18n/translations';

const pillars = {
  en: [
    { title: 'Body', text: 'Coming home to the body as the place where healing becomes real.' },
    { title: 'Mind', text: 'Stepping back from mental noise to notice patterns with clarity.' },
    { title: 'Heart', text: 'Room to feel whatever is genuinely present, without forcing anything.' },
    { title: 'Soul', text: 'Listening beneath everyday roles for what feels true now.' },
  ],
  de: [
    { title: 'Körper', text: 'Zum Körper zurückkehren als dem Ort, wo Heilung wirklich wird.' },
    { title: 'Geist', text: 'Vom mentalen Lärm zurücktreten, um Muster klar zu erkennen.' },
    { title: 'Herz', text: 'Raum, um zu fühlen, was wirklich da ist, ohne etwas zu erzwingen.' },
    { title: 'Seele', text: 'Unter den Alltagsrollen lauschen, was sich jetzt wahr anfühlt.' },
  ],
};

export default function RetreatsPage() {
  const { locale } = useLocale();
  const content = retreatsContent[locale];
  const retreat = retreatData[locale];
  const t = getTranslations(locale);

  return (
    <div className="service-page">

      {/* ── Hero ── */}
      <section className="service-hero">
        <div className="service-hero__content">
          <p className="service-hero__label">{content.label}</p>
          <h1 className="service-hero__headline reveal">{content.headline}</h1>
        </div>
        <div className="service-hero__image-wrapper">
          <Image
            src="/images/services/shamanic-ceremonies.png"
            alt={content.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="service-hero__image"
          />
        </div>
      </section>

      {/* ── Body ── */}
      <section className="service-body">
        <div className="service-prose">
          {content.intro.split('\n\n').map((para, i) => (
            <p key={i} className={i === 0 ? 'service-prose__intro' : undefined}>{para}</p>
          ))}

          {/* Next retreat card */}
          <div className="service-prose__highlight">
            <h2>{retreat.name}</h2>
            <p><strong>{retreat.dates} · {retreat.location}</strong></p>
            <p>{retreat.description}</p>
            <a
              href={retreat.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="service-hero__cta"
            >
              {retreat.bookingLabel} →
            </a>
          </div>

          {/* Future dates */}
          <p><strong>{retreat.futureLabel}:</strong> {retreat.futureDates.join(' · ')}</p>

          {/* What the days hold */}
          <h2>{content.subSections?.[0]?.heading}</h2>
          <div className="service-prose__grid">
            {pillars[locale].map((p) => (
              <div key={p.title} className="service-prose__grid-item">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>

          {/* Wellbeing note */}
          <h2>{locale === 'de' ? 'Dein Wohlbefinden kommt zuerst' : 'Your wellbeing comes first'}</h2>
          <p>{content.closingNote}</p>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="service-cta-section">
        <a
          href={content.ctaOverride!.href}
          target="_blank"
          rel="noopener noreferrer"
          className="service-cta-section__btn"
        >
          {content.ctaOverride!.label}
        </a>
      </section>

    </div>
  );
}
