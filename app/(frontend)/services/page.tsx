'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { serviceContent } from '@/lib/content/services';

const services = (t: typeof serviceContent.en) => [
  { label: t.counseling, description: t.counselingDescription, slug: t.counselingSlug },
  { label: t.guidance, description: t.guidanceDescription, slug: t.guidanceSlug },
  { label: t.ceremonies, description: t.ceremoniesDescription, slug: t.ceremoniesSlug },
  { label: t.integration, description: t.integrationDescription, slug: t.integrationSlug },
  { label: t.cacao, description: t.cacaoDescription, slug: t.cacaoSlug },
  { label: t.energy, description: t.energyDescription, slug: t.energySlug },
  { label: t.matrimony, description: t.matrimonyDescription, slug: t.matrimonySlug },
];

export default function ServicesPage() {
  const { locale } = useLocale();
  const t = serviceContent[locale];
  const list = services(t);

  return (
    <div className="services-overview">

      {/* ── Hero ── */}
      <section className="services-overview__hero">
        <p className="services-overview__eyebrow">{t.title}</p>
        <h1 className="services-overview__headline">{t.hero}</h1>
      </section>

      {/* ── Intro ── */}
      <section className="services-overview__intro">
        <p>{t.description}</p>
      </section>

      {/* ── Service list ── */}
      <section className="services-overview__list">
        {list.map((service) => (
          <div key={service.slug} className="services-overview__item">
            <div className="services-overview__item-image">
              <Image
                src={`/images/services/${service.slug}.jpeg`}
                alt={service.label}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="services-overview__item-img"
              />
            </div>
            <div className="services-overview__item-content">
              <h2 className="services-overview__item-title">{service.label}</h2>
              <p className="services-overview__item-desc">{service.description}</p>
              <Link href={`/services/${service.slug}`} className="services-overview__item-cta">
                {t.explore} →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* ── Pricing ── */}
      <section className="services-overview__pricing">
        <p className="services-overview__pricing-label">{t.pricing}</p>
        <div className="services-overview__pricing-table">
          {t.priceTable.map((row, i) => (
            <div key={i} className="services-overview__pricing-row">
              <span>{row.service}</span>
              <span>{row.cost}</span>
            </div>
          ))}
        </div>
        <p className="services-overview__pricing-note">{t.pricingNote}</p>
        <p className="services-overview__pricing-note">{t.confidentiality}</p>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="services-overview__cta">
        <p className="services-overview__cta-label">{t.unsure}</p>
        <Link href="/contact" className="services-overview__cta-btn">
          {t.book}
        </Link>
      </section>

    </div>
  );
}