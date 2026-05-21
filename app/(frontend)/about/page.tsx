'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { aboutContent } from '@/lib/content/about';

export default function AboutPage() {
  const { locale } = useLocale();
  const t = aboutContent[locale];

  return (
    <div className="about-page">

      {/* ── Page header ── */}
      <section className="about-header">
        <p className="about-header__label">{t.pageLabel}</p>
        <h1 className="about-header__headline">{t.pageHeadline}</h1>
      </section>

      {/* ── Sarah ── */}
      <section className="about-section">
        <div className="about-section__inner">
          <div className="about-section__image-wrapper">
            <Image
              src="/images/drum.JPG"
              alt="Sarah"
              fill
              sizes="(max-width: 768px) 100vw, 680px"
              className="about-section__image"
            />
          </div>
          <p className="about-section__label">{t.sarahLabel}</p>
          <h2 className="about-section__headline">{t.sarahHeadline}</h2>
          {t.sarahBody.map((para, i) => (
            <p key={i} className="about-section__body">{para}</p>
          ))}
          <div className="about-section__quote">
            <p>{t.sarahQuote}</p>
          </div>
        </div>
      </section>

      {/* ── Soulwayo ── */}
      <section className="about-section about-section--alt">
        <div className="about-section__inner">
          <div className="about-section__image-wrapper">
            <Image
              src="/images/soulwayo.jpeg"
              alt="Sarah and Johannes — Soulwayo"
              fill
              sizes="(max-width: 768px) 100vw, 680px"
              className="about-section__image"
            />
          </div>
          <p className="about-section__label">{t.soulwayoLabel}</p>
          <h2 className="about-section__headline">{t.soulwayoHeadline}</h2>
          {t.soulwayoBody.map((para, i) => (
            <p key={i} className="about-section__body">{para}</p>
          ))}
          <div className="about-section__quote">
            <p>{t.soulwayoQuote}</p>
          </div>
          <a
            href={`https://${t.soulwayoLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="about-section__link"
          >
            {t.soulwayoLink} →
          </a>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="about-section">
        <div className="about-section__inner">
          <p className="about-section__label">{t.teamLabel}</p>
          <h2 className="about-section__headline">{t.teamHeadline}</h2>
          <div className="about-team">
            {t.teamMembers.map((member, i) => (
              <div key={i} className="about-team__member">
                <p className="about-team__name">{member.name}</p>
                <p className="about-section__body">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Training ── */}
      <section className="about-section about-section--alt">
        <div className="about-section__inner">
          <p className="about-section__label">{t.trainingLabel}</p>
          <h2 className="about-section__headline">{t.trainingHeadline}</h2>
          <ul className="about-training">
            {t.trainingItems.map((item, i) => (
              <li key={i} className="about-training__item">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="about-section">
        <div className="about-section__inner">
          <div className="about-section__image-wrapper">
            <Image
              src="/images/soulwayo.JPG"
              alt="Philosophy"
              fill
              sizes="(max-width: 768px) 100vw, 680px"
              className="about-section__image"
            />
          </div>
          <p className="about-section__label">{t.philosophyLabel}</p>
          <h2 className="about-section__headline">{t.philosophyHeadline}</h2>
          {t.philosophyBody.map((para, i) => (
            <p key={i} className="about-section__body">{para}</p>
          ))}
          <div className="about-section__quote">
            <p>{t.philosophyQuote}</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <Link href="/contact" className="about-cta__btn">
          {locale === 'de' ? 'Kontakt aufnehmen' : 'Get in touch'}
        </Link>
      </section>

    </div>
  );
}