'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/lib/i18n/LocaleContext'
import { getTranslations } from '@/lib/i18n/translations'
import type { ServiceContent } from '@/lib/content/services'

type ServiceLayoutProps = {
  content: ServiceContent
  image: string
}

export default function ServiceLayout({ content, image }: ServiceLayoutProps) {
  const { locale } = useLocale()
  const t = getTranslations(locale)

  return (
    <div className="service-page">

      {/* ── Hero: text left, image right ── */}
      <section className="service-hero">
        <div className="service-hero__content">
          <p className="service-hero__label">{content.label}</p>
          <h1 className="service-hero__headline reveal">{content.headline}</h1>
          {content.ctaOverride ? (
            <a
              href={content.ctaOverride.href}
              target={content.ctaOverride.external ? '_blank' : undefined}
              rel={content.ctaOverride.external ? 'noopener noreferrer' : undefined}
              className="service-hero__cta"
            >
              {content.ctaOverride.label}
            </a>
          ) : (
            <Link href="/contact" className="service-hero__cta">
              {t.common.bookSession}
            </Link>
          )}
        </div>
        <div className="service-hero__image-wrapper">
          <Image
            src={image}
            alt={content.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="service-hero__image"
          />
        </div>
      </section>

      {/* ── Body content ── */}
      <section className="service-body">
        <div className="service-prose">

          {/* Intro */}
          <p className="service-prose__intro">{content.intro}</p>

          {/* Body paragraphs */}
          {content.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          {/* Supports list */}
          {content.supports && content.supports.length > 0 && (
            <>
              <h2>{locale === 'de' ? 'Diese Arbeit unterstützt' : 'This work supports'}</h2>
              <ul>
                {content.supports.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {/* Quote */}
          {content.quote && (
            <div className="service-prose__quote">
              <p>{content.quote}</p>
            </div>
          )}

          {/* Sub sections */}
          {content.subSections && content.subSections.map((section, i) => (
            <div key={i}>
              <h2>{section.heading}</h2>
              {section.text.split('\n\n').map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>
          ))}

          {/* Closing note */}
          {content.closingNote && (
            <p className="service-prose__muted">
              {content.closingNote}
              {content.closingNoteLink && (
                <>
                  {' '}
                  <a href={content.closingNoteLink.href} target="_blank" rel="noopener noreferrer">
                    {content.closingNoteLink.text} →
                  </a>
                </>
              )}
            </p>
          )}

        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="service-cta-section">
        <p className="service-cta-section__label">
          {locale === 'de' ? 'Bereit anzufangen?' : 'Ready to begin?'}
        </p>
        {content.ctaOverride ? (
          <a
            href={content.ctaOverride.href}
            target={content.ctaOverride.external ? '_blank' : undefined}
            rel={content.ctaOverride.external ? 'noopener noreferrer' : undefined}
            className="service-cta-section__btn"
          >
            {content.ctaOverride.label}
          </a>
        ) : (
          <Link href="/contact" className="service-cta-section__btn">
            {t.common.bookSession}
          </Link>
        )}
      </section>

    </div>
  )
}
