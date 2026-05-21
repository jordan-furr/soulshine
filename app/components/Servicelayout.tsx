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
          <Link href="/contact" className="service-hero__cta">
            {t.common.bookSession}
          </Link>
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
              <p>{section.text}</p>
            </div>
          ))}

          {/* Pricing */}
          {content.pricing && content.pricing.length > 0 && (
            <div className="service-prose__pricing">
              <p className="service-prose__pricing-label">
                {locale === 'de' ? 'Preise' : 'Pricing'}
              </p>
              {content.pricing.map((row, i) => (
                <div key={i} className="service-prose__pricing-row">
                  <span>{row.label}</span>
                  <span>{row.cost}</span>
                </div>
              ))}
              {content.pricingNote && (
                <p className="service-prose__pricing-note">{content.pricingNote}</p>
              )}
            </div>
          )}

        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="service-cta-section">
        <p className="service-cta-section__label">
          {locale === 'de' ? 'Bereit anzufangen?' : 'Ready to begin?'}
        </p>
        <Link href="/contact" className="service-cta-section__btn">
          {t.common.bookSession}
        </Link>
      </section>

    </div>
  )
}