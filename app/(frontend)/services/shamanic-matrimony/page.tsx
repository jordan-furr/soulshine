'use client';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { matrimonyContent } from '@/lib/content/services';
import { getTranslations } from '@/lib/i18n/translations';
import Image from 'next/image';
import Link from 'next/link';

export default function ShamanicMatrimonyPage() {
  const { locale } = useLocale();
  const content = matrimonyContent[locale];
  const t = getTranslations(locale);

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero__content">
          <p className="service-hero__label">{content.label}</p>
          <h1 className="service-hero__headline reveal">{content.headline}</h1>
          <Link href="/contact" className="service-hero__cta">
            {t.common.startConversation}
          </Link>
        </div>
        <div className="service-hero__image-wrapper">
          <Image
            src="/images/services/shamanic-matrimony.jpeg"
            alt={content.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="service-hero__image"
          />
        </div>
      </section>

      <section className="service-body">
        <div className="service-prose">
          <p className="service-prose__intro">{content.intro}</p>
          {content.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          {content.quote && (
            <div className="service-prose__quote">
              <p>{content.quote}</p>
            </div>
          )}
        </div>
      </section>

      <section className="service-cta-section">
        <p className="service-cta-section__label">
          {locale === 'de' ? 'Bereit anzufangen?' : 'Ready to begin?'}
        </p>
        <Link href="/contact" className="service-cta-section__btn">
          {t.common.startConversation}
        </Link>
      </section>
    </div>
  );
}
