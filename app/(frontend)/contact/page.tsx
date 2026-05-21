'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { getTranslations } from '@/lib/i18n/translations';

export default function ContactPage() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <div className="contact-page">

      {/* ── Header ── */}
      <section className="contact-header">
        <p className="contact-header__label">{t.nav.contact}</p>
        <h1 className="contact-header__headline">
          {locale === 'de'
            ? 'Beginne das Gespräch.'
            : 'Begin the conversation.'}
        </h1>
        <p className="contact-header__sub">
          {locale === 'de'
            ? 'Sitzungen auf Deutsch und Englisch — persönlich und online.'
            : 'Sessions in German and English — in person and remotely.'}
        </p>
      </section>

      {/* ── Contact info ── */}
      <section className="contact-body">
        <div className="contact-body__inner">
          <div className="contact-info">
            <p className="contact-info__label">{t.contact.email}</p>
            <a
              href="mailto:info@soulshinesarah.com"
              className="contact-info__value"
            >
              info@soulshinesarah.com
            </a>
          </div>

          <div className="contact-info">
            <p className="contact-info__label">
              {locale === 'de' ? 'Formular folgt in Kürze' : 'Form coming soon'}
            </p>
            <p className="contact-info__note">
              {locale === 'de'
                ? 'Bis dahin erreichen Sie Sarah direkt per E-Mail.'
                : 'In the meantime, reach Sarah directly by email.'}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}