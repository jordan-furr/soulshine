'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { publicationsContent } from '@/lib/content/publications';

export default function PublicationsPage() {
  const { locale } = useLocale();
  const t = publicationsContent[locale];

  return (
    <div className="publications-page">

      {/* ── Header ── */}
      <section className="publications-header">
        <p className="publications-header__label">{t.pageLabel}</p>
        <h1 className="publications-header__headline reveal">{t.pageHeadline}</h1>
        <p className="publications-header__intro">{t.intro}</p>
      </section>

      {/* ── Grid ── */}
      <section className="publications-grid-section">
        <div className="publications-grid">
          {t.publications.map((pub) => (
            <div key={pub.id} className="pub-card">
              <div className="pub-card__image-wrapper">
                <Image
                  src={pub.imageDe && locale === 'de' ? pub.imageDe : pub.image}
                  alt={pub.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="pub-card__image"
                />
                <span className="pub-card__type-badge">
                  {pub.type === 'pdf' ? 'Digital' : pub.type === 'book' ? 'Book' : pub.type}
                </span>
              </div>
              <div className="pub-card__body">
                <h2 className="pub-card__title">{pub.title}</h2>
                {pub.subtitle && (
                  <p className="pub-card__subtitle">{pub.subtitle}</p>
                )}
                <p className="pub-card__desc">{pub.description}</p>
                <div className="pub-card__footer">
                  {pub.price && (
                    <span className="pub-card__price">{pub.price}</span>
                  )}
                  <div className="pub-card__actions">
                    {pub.comingSoon ? (
                      <span className="pub-card__coming-soon">{t.comingSoonLabel}</span>
                    ) : (
                      <>
                        {pub.buyLink && (
                          <a
                            href={pub.buyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pub-card__btn"
                          >
                            {t.buyLabel}
                          </a>
                        )}
                        {pub.downloadLink && (
                          <a
                            href={pub.downloadLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pub-card__btn pub-card__btn--outline"
                          >
                            {t.downloadLabel}
                          </a>
                        )}
                        {!pub.buyLink && !pub.downloadLink && (
                          <Link href="/contact" className="pub-card__btn">
                            {locale === 'de' ? 'Anfragen' : 'Enquire'}
                          </Link>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* More to come card */}
          <div className="pub-card pub-card--placeholder">
            <div className="pub-card__placeholder-inner">
              <p className="pub-card__placeholder-text">{t.moreLabel}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}